import { useState, useEffect } from 'react';
import { toast } from "react-toastify";

import { getTrending } from "../../MoviesAPI/MoviesAPI";
import MoviesList from "../../Component/MoviesList/MoviesList";




const HomePage = ({titleHeader}) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrending()
      .then((data) => {
        setMovieList(data);
      })
    .catch((error)=> toast.error("Not Found"))
    
  }, []);

  

  return (
    <>     
      <MoviesList movie_list={movieList} titleHeader={titleHeader}/>
      </>
  )

};

export default HomePage;
