import { NavLink, useRouteMatch, useLocation } from "react-router-dom";

import s from "./MovieDetPageLinks.module.css";

const MovieDetPagesLinks = () => {
  const { url } = useRouteMatch();
  
  const location = useLocation();
  return (
    <nav>
      <NavLink
        to={{
          pathname: `${url}/cast`,
          state: {
            from:location.state?location.state.from:'/',
    label:"back to movies",
          },
        }}
        exact
        className={s.Link}
        activeClassName={s.ActiveLink}
      >
        Cast
      </NavLink>
      <NavLink
        to={{
          pathname: `${url}/reviews`,
          state:{
            from:location.state?location.state.from : '/',
            label:"back to movies",
          },
        }}
        className={s.Link}
        activeClassName={s.ActiveLink}
      >
        Reviews
      </NavLink>
    </nav>
  );
};

export default MovieDetPagesLinks;
