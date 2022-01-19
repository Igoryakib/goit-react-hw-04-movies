import react, { useState, useEffect } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./DetailsMovie.module.scss";
import * as fetchOptions from "../../utils/fetchFilmsAPI.js";
const { endPoints, getDataMovie } = fetchOptions;

const DetailsMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    // endPoints.getMoreDetailsMoviePoint = `/movie/${movieId}`
    getDataMovie(endPoints.setId(movieId)).then((res) => setMovie(res));
  }, [movieId]);
  const navigate = useNavigate();
  const handleGoBackFn = () => {
    navigate(-1);
  };
  const { sectionDetails, btnGoBack, imgPage, contentPage, titlePage, subTitlePage, textPage, subText, wrapperText, btnLoadMore, wrapperBtnLoadMore} = styles;
  return (
    movie && (
      <section className={sectionDetails}>
        {/* go back btn */}
        <button className={btnGoBack} type="button" onClick={handleGoBackFn}>
          Go Back
        </button>
        <div className={contentPage}>
          {/* poster */}
          {movie?.poster_path && (
            <img className={imgPage}
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt="poster"
            />
          )}
          <div className={wrapperText}>
          {/* title */}
          <h3 className={titlePage}>{movie?.title}</h3>
          <p className={subText}>User Score {movie?.vote_average}</p>
          {/* overview */}
          <h3 className={subTitlePage}>Overview</h3>
          <p className={textPage}>{movie?.overview}</p>
          {/* genres */}
          <h3 className={subTitlePage}>Genres</h3>
          <ul>
            {movie?.genres.map((item) => {
              return (
                <li key={item.id}>
                  <p className={subText}>{item.name}</p>
                </li>
              );
            })}
          </ul>
          </div>
        </div>
        {/* additional */}
        <h4 className={subTitlePage}>Additional Information</h4>
          <ul className={wrapperBtnLoadMore}>
            <Link to={`/movies/${movie.id}/cast`}>
              <li className={btnLoadMore}>Cast</li>
            </Link>
            <Link className={btnLoadMore} to={`/movies/${movie.id}/reviews`}>
              <li>Reviews</li>
            </Link>
          </ul>
          <Outlet />
      </section>
    )
  );
};

export default DetailsMovie;
