import { useEffect, useState } from "react";
import {
  NavLink,
  useParams,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";

import Api from "../../servises/movies-api";
import Cast from "../Cast";
import Reviews from "../Reviews";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
  } = movie;

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    Api.fatchMovieDetails(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  const goBack = () => {
    history.push(location.state.from);
  };

  return (
    movie && (
      <div className={styles.movieContainer}>
        <button className={styles.button} type="button" onClick={goBack}>
          &#129044; Go back
        </button>
        <div className={styles.movieInfo}>
          <img
            className={styles.poster}
            src={Api.imagePath + poster_path}
            alt={original_title}
          />
          <div>
            <h2>
              {original_title}({Number.parseInt(release_date)})
            </h2>
            <p>User Score {vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <ul className={styles.genersList}>
              {genres &&
                genres.map((genre) => (
                  <li className={styles.genersItem} key={genre.name}>
                    {genre.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <hr />
        <h4>Additional information</h4>
        <ul>
          <li>
            {/* <NavLink to={`${url}/cast`}>Cast</NavLink> */}
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location.state.from },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            {/* <NavLink to={`${url}/reviews`}>Reviews</NavLink> */}
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location.state.from },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <hr />
        {/* <Route path={`${path}/:movieId/cast`}> */}
        <Route path="/movies/:movieId/cast">
          <Cast></Cast>
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews></Reviews>
        </Route>
      </div>
    )
  );
};
export default MovieDetailsPage;
