import react from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieItem.module.scss";

const MovieItem = ({ title, id, imageUrl }) => {
  const { card, cardImg, cardTitle, imgNotfound } = styles;
  return (
    <Link to={`/movies/${id}`}>
      <li>
      <div className={card}>
        {imageUrl ? (
          <img
            className={cardImg}
            src={`https://image.tmdb.org/t/p/w300${imageUrl}`}
          />
        ) : (
          <div className={imgNotfound}>
            <h2 className={cardTitle}>404 image not found&#128554;</h2>
          </div>
        )}
        <h4 className={cardTitle}>{title}</h4>
        </div>
      </li>
    </Link>
  );
};

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number,
  imageUrl: PropTypes.string,
};

export default MovieItem;
