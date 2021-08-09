import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Api from "../../servises/movies-api";
// import styles from "./Reviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    Api.fatchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return reviews ? (
    <>
      <ul>
        {reviews.map(({ author, id, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p> {content}</p>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <h2> we don't have any reviews for this movie</h2>
  );
};
export default Reviews;
