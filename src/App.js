import { Switch, Route } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Container from "./Component/Container/Container";
import NavBar from "./Component/NavBar/NavBar";
import Loader from "./Component/Loader/Loader";

import { getTrending } from "./MoviesAPI/MoviesAPI";


const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /*webpackChunkName:"home-page"*/)
);
const MoviePage = lazy(() =>
  import("./pages/MoviePage/MoviesPage" /*webpackChunkName:"movie-page"*/)
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage" /*webpackChunkName:"movie-details-page"*/)
);



function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = () => {
    getTrending()
      .then(({ results }) => {
        setMovieList(results);
      })
      .catch((e) => toast(e));
  };

  return (
    <Container>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage movie_list={movieList} titleHeader="Trending today" />
          </Route>
          <Route path="/movies" exact>
            <MoviePage />
          </Route>
          <Route path="/movies/:movie_id">
            <MovieDetailsPage />
          </Route>
          
        </Switch>
      </Suspense>
      <ToastContainer />
    </Container>
  );
}

export default App;
