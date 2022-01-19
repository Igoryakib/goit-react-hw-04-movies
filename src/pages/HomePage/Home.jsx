import React, { Component, Lazy, Suspense } from "react";
import styles from './Home.module.scss';
import {BallTriangle} from 'react-loader-spinner';
import * as fetchOptions from '../../utils/fetchFilmsAPI.js';
const {endPoints, getDataMovie} = fetchOptions;

const MoviesList = React.lazy(() => import('../../components/MoviesList/MoviesList'/* webpackChunkName: "moviesList-component" */));
class Home extends Component {
    state = {
        trendingMovies: []
    };
    componentDidMount(){
        getDataMovie(endPoints.trendingPoint).then(data => {
            this.setState({
                trendingMovies: data.results
            })
        });
    }

  render() {
      const {trendingMovies} = this.state;
      const {sectionHome,titleSection} = styles;
    return (
      <section className={sectionHome}>
        <h3 className={titleSection}>Trending today</h3>
        <Suspense fallback={<BallTriangle color="white" height={80} width={80} />}>
        <MoviesList movieArray={trendingMovies}/>
        </Suspense>
      </section>
    );
  }
}

export default Home;
