import { useEffect, useState } from "react";
import { Link, useLocation, useRouteMatch, useHistory } from "react-router-dom";

import Api from "../../servises/movies-api";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const [moviesArr, setMoviesArr] = useState([]);
  const request = new URLSearchParams(location.search).get("query") ?? "";

  const searchMovie = (e) => {
    e.preventDefault();
    history.push({
      ...location,
      search: `query=${e.target.elements.searchMovieInput.value}`,
    });
  };

  useEffect(() => {
    Api.fetchMovieByName(request).then(setMoviesArr);
  }, [request]);

  return (
    <>
      <form className={styles.form} onSubmit={searchMovie}>
        <input className={styles.input} name="searchMovieInput" />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
      <ul className={styles.list}>
        {moviesArr.map(({ id, original_title }) => (
          <li key={id}>
            {/* <Link to={`${url}/${id}`}>{original_title}</Link> */}
            <Link to={{ pathname: `${url}/${id}`, state: { from: location } }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MoviesPage;

// _______
// const MoviesPage = () => {
//   const { url } = useRouteMatch();
//   const [movieName, setMovieName] = useState("");
//   const [moviesArr, setMoviesArr] = useState([]);

//   useEffect(() => {
//     if (movieName === "") {
//       return;
//     }
//     Api.fetchMovieByName(movieName).then(setMoviesArr);
//   }, [movieName]);

//   const searchMovie = (e) => {
//     e.preventDefault();
//     setMovieName(e.target.elements.searchMovieInput.value);
//   };

//   return (
//     <>
//       <form className={styles.form} onSubmit={searchMovie}>
//         <input className={styles.input} name="searchMovieInput" />
//         <button className={styles.button} type="submit">
//           Search
//         </button>
//       </form>
//       <ul className={styles.list}>
//         {moviesArr.map(({ id, original_title }) => (
//           <li key={id}>
//             <Link to={`${url}/${id}`}>{original_title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
// export default MoviesPage}
