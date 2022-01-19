import react, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Cast.module.scss';
import * as fetchOptions from "../../utils/fetchFilmsAPI";
const { endPoints, getDataMovie } = fetchOptions;

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    // endPoints.getMoreDetailsMoviePoint = `/movie/${movieId}/${type}`
    getDataMovie((endPoints.setId(movieId, 'credits'))).then(
      (data) => {
        setCast(data.cast);
      }
    );
  }, [movieId]);
  const {moviesList, cardImage, card, cardTitle, cardSubtitle, wrapperNoIMg} = styles;
  return (
    <ul className={moviesList}>
      {cast?.map((item) => {
        return (
          <li className={card} key={item.id}>
            {item?.profile_path ? <img className={cardImage}
              src={`https://image.tmdb.org/t/p/w300/${item?.profile_path}`}
              alt="actor_poster"
            /> : <div className={wrapperNoIMg}><h3 className={cardSubtitle}>404 No image</h3></div>}
            <h3 className={cardTitle}>{item?.name}</h3>
            <h4 className={cardSubtitle}>{item?.character}</h4>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
