import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempRecommends = [];
      let tempNewDisneys = [];
      let tempOriginals = [];
      let tempTrending = [];

      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            tempRecommends = [...tempRecommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            tempNewDisneys = [...tempNewDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            tempOriginals = [...tempOriginals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            tempTrending = [...tempTrending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: tempRecommends,
          newDisney: tempNewDisneys,
          original: tempOriginals,
          trending: tempTrending,
        }),
      );
    });
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh -250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
