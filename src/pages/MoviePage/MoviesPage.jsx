import { useState, useEffect} from "react";
import { toast } from "react-toastify";
// import { useHistory, useLocation } from 'react-router-dom';
import FormSearch from "../../Component/FormSearch/FormSearch";
import HomePage from "../HomePage/HomePage";

import { getSearchMovie } from "../../MoviesAPI/MoviesAPI";


const MoviePage = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movieList, setMovieList] = useState([]);
  // const history = useHistory();
  // const location = useLocation();
  
  useEffect(() => {
    if (searchMovie !== "") {
       getMovieList();
    }
   
  }, [searchMovie]);

  const getMovieList = () => {
    getSearchMovie(searchMovie)
      .then(({ results }) => setMovieList(results))
      .catch((e) => toast(e));
  };

  const onFormSubmit = (movie) => {
    setSearchMovie(movie);
    
  };

  return (
    <>
      <FormSearch 
        onFormSubmit={onFormSubmit} />
      {searchMovie && (
        <HomePage 
          movie_list={movieList}
          titleHeader={`Your search: ${searchMovie}`}
        />
      )}
    </>
  );
};

export default MoviePage;
