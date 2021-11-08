import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { getMovieDetailsCast } from "../../MoviesAPI/MoviesAPI";

import s from "./Reviews.module.css";


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movie_id } = useParams();

  useEffect(() => {
    getReviewsList();
  }, [movie_id]);

  const getReviewsList = () => {
    getMovieDetailsCast(movie_id, "reviews")
      .then(({ results }) => setReviews(results))
      .catch((e) => toast(e));
  };

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(({ author, id, content, updated_at }) => (
          <div key={id} className={s.Reviews}>
            <p className={s.Author}>Author: {author}</p>
            <p className={s.Content}>{content}</p>
            <p className={s.Update}>Update: {updated_at}</p>
          </div>
        ))
      ) : (
        <p className={s.NotReviews}>No reviews found for this film</p>
      )}
    </>
  );
};

export default Reviews;
