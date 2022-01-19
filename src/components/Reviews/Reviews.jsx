import react, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Reviews.module.scss';
import * as fetchOptions from "../../utils/fetchFilmsAPI";
const { endPoints, getDataMovie } = fetchOptions;

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState(null);
    useEffect(() => {
        // endPoints.getMoreDetailsMoviePoint = `/movie/${movieId}/${type}`
        getDataMovie((endPoints.setId(movieId, 'reviews'))).then(
          (data) => {
            setReviews(data.results);
          }
        );
      }, [movieId]);
      const {title, text, itemLi} = styles;
    return(
        <ul>
            {reviews?.map(item => {
                return(
                    <li className={itemLi} key={item.id}>
                        <h3 className={title}>{item?.author}</h3>
                        <p className={text}>{item?.content}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default Reviews;