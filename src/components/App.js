import React, { Component, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import routes from "../utils/routes";
import {BallTriangle} from 'react-loader-spinner';
const Home = React.lazy(()=> import('../pages/HomePage/Home'/* webpackChunkName: "home-page" */));
const Movies = React.lazy(()=> import('../pages/MoviesPage/Movies'/* webpackChunkName: "movies-page" */));
const DetailsMovie = React.lazy(()=> import('../pages/DetailsPage/DetailsMovie'/* webpackChunkName: "details-page" */));
const Cast = React.lazy(()=> import('./Cast/Cast'/* webpackChunkName: "cast-component" */));
const Reviews = React.lazy(()=> import('./Reviews/Reviews'/* webpackChunkName: "reviews-component" */));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage/NotFoundPage') /* webpackChunkName: "notFound-Page" */);

class App extends Component {
  state = {};

  render() {
      const {notFoundPage, homePage, moviesPage, detailsPage, movieCast, movieReviews} = routes;
    return (
      <>
        <Header />
        <Suspense fallback={<BallTriangle className='loader' color="white" height={80} width={80} />}>
        <Routes>
            <Route path={homePage} element={<Home/>}/>
            <Route path={moviesPage} element={<Movies/>}/>
            <Route path={detailsPage} element={<DetailsMovie/>}>
              <Route path={movieCast} element={<Cast/>}/>
              <Route path={movieReviews} element={<Reviews/>}/>
            </Route>
            <Route path={notFoundPage} element={<NotFoundPage/>}/>
        </Routes>
        </Suspense>
      </>
    );
  }
}

export default App;
