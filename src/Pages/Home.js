import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../Pages/Movies";
import { Box, Container } from "@mui/material";
import  Stepper  from "../Components/Stepper";
import ResponsiveAppBar from "../Components/Navbar";

export default function Home() {
  const featureapi =
    "https://api.themoviedb.org/3/movie/popular?api_key=28c8b0f21c1cdbe4b8a5ca67a5603e88&language=en-US&page=1";
 
  const [movies, setMovies] = useState([]);

  /////////----------------------------->fetch the api<----------------------------------////

  const fetchdata = async () => {
    try {
      const moviedata = await axios.get(featureapi);
     
      setMovies(moviedata.data.results);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  ////////////////////////////////////////////////////////////////
  


  return (

  <Box className="home">
  <ResponsiveAppBar></ResponsiveAppBar>
  <Stepper></Stepper>
    <Container className="home"  maxwidth="lg"  >
    
      <div className="row mt-5" >
        {movies.map((film) => (
          <Movies key={film.id} {...film}></Movies>
        ))}
      </div>
    </Container>
    </Box>
  );
}
