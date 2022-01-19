import React, { Component, lazy, Suspense } from "react";
import styles from "./Movies.module.scss";
import * as fetchOptions from "../../utils/fetchFilmsAPI.js";
import {BallTriangle} from 'react-loader-spinner';
const { endPoints, getDataMovie } = fetchOptions;
const MoviesList = React.lazy(() => import('../../components/MoviesList/MoviesList' /* webpackChunkName: "moviesList-component" */))
const NotFoundPage = React.lazy(() => import('../NotFoundPage/NotFoundPage') /* webpackChunkName: "notFound-Page" */);
class Movies extends Component {
  state = {
    query: "",
    movieArray: [],
    hasError: false
  };

  componentDidMount(){
    if(sessionStorage.getItem('query')) {
      getDataMovie(endPoints.searchMoviePoint, sessionStorage.getItem('query')).then((data) => {
        if(data.results.length === 0) {
          this.setState({
            hasError: true,
            query: "",
          })
        } else {
          this.setState({
            movieArray: data.results,
            query: "",
            hasError: false,
          });
        }
      }).catch(err => {
        console.log(err)
        this.setState({
          hasError: true
        })
      })
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem('query', this.state.query);
    getDataMovie(endPoints.searchMoviePoint, this.state.query).then((data) => {
      if(data.results.length === 0) {
        this.setState({
          hasError: true,
          query: "",
        })
      } else {
        this.setState({
          movieArray: data.results,
          query: "",
          hasError: false,
        });
      }
    }).catch(err => {
      console.log(err)
      this.setState({
        hasError: true
      })
    })
  };
  render() {
    const { query, movieArray, hasError} = this.state;
    // console.log(movieArray)
    const { sectionMovies, searchForm, FormInput, submitBtn } = styles;
    return (
      <section className={sectionMovies}>
        <form onSubmit={this.handleSubmit} className={searchForm}>
          <input
            onChange={this.handleOnChange}
            value={query}
            className={FormInput}
            type="text"
            name="query"
            placeholder="Search movies"
          />
          <button className={submitBtn} type="submit">Search</button>
        </form>
        <Suspense fallback={<BallTriangle color="white" height={80} width={80} />}>
        {hasError ? <NotFoundPage/> : <MoviesList movieArray={movieArray} />}
        </Suspense>
      </section>
    );
  }
}
export default Movies;
