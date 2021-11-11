import { useState, useEffect } from 'react';
import { toast } from "react-toastify";

import { getTrending } from "../../MoviesAPI/MoviesAPI";
import MoviesList from "../../Component/MoviesList/MoviesList";




const HomePage = ({movie_list, titleHeader}) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrending()
      .then((data) => {
        setMovieList(data);
      })
    .catch((error)=> toast.error("Not Found"))
    
  }, [movieList]);

  

  return (
    <>     
      <MoviesList movie_list={movie_list} titleHeader={titleHeader}/>
      </>
  )

};

export default HomePage;
