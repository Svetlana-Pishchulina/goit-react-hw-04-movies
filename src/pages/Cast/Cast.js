import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Api from "../../servises/movies-api";
import styles from "./Cast.module.css";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    Api.fatchMovieCredits(movieId).then(setCast);
  }, [movieId]);
  return (
    cast && (
      <>
        <ul>
          {cast.map(({ name, character, id, profile_path }) => (
            <li key={id}>
              <img
                className={styles.image}
                src={Api.imagePath + profile_path}
                alt=""
              />
              <p>{name}</p>
              <p>Caracter: {character}</p>
            </li>
          ))}
        </ul>
      </>
    )
  );
};
export default Cast;
