import { useState, useEffect} from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import FormSearch from "../../Component/FormSearch/FormSearch";
import MoviesList from "../../Component/MoviesList/MoviesList";
import { getSearchMovie } from "../../MoviesAPI/MoviesAPI";


const MoviePage = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    if (searchMovie !== "") {
       getMovieList();
    }
   
  }, [searchMovie]);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query");
    if (query) {
      getSearchMovie(query)
        .then(({ results }) => {
          if (results.length === 0) {
            toast.error(`Nothing was found on ${query}!`);
            return;
          }
          setSearchMovie(query);
          setMovieList(results);
        }
        )
        .catch((error) => toast(error));
    }
  }, [location.search]);

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
        <MoviesList          
          movie_list={movieList}
          titleHeader={`Your search: ${searchMovie}`}
        />
      )}
    </>
  );
};

export default MoviePage;
