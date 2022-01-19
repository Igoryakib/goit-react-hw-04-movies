import react from "react";
import MovieItem from "../MovieItem/MovieItem";
import PropTypes from "prop-types";
import styles from './MoviesList.module.scss';
const MoviesList = ({movieArray}) => {
    const {moviesList} = styles;
    return(
        <ul className={moviesList}>
            {movieArray?.map(item => {
                return(
                    <MovieItem
                        key={item.id}
                        title={item.title}
                        id={item.id}
                        imageUrl={item.poster_path}
                    />
                );
            })}
        </ul>
    );
};

MoviesList.propTypes = {
    movieArray: PropTypes.array.isRequired
}

export default MoviesList;