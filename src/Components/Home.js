import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setMovies } from "../features/movie/movieSlice";
import db from "../firebase";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setMovies(tempMovies));
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  /* remainig  height after the header */
  min-height: 93vh;
  padding: 0 3.5vw;
  position: relative;
  overflow-x: hidden;
  &:before {
    /* background: url("/images/home-background.png") center center / cover
      no-repeat fixed; */
    background-image: url("/images/home-background.png");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
