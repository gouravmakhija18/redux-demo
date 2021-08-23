import React, { Component } from "react";
import MovieResults from "./MovieResults";
import FavoriteMovieList from "./FavoriteMovieList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class MovieApp extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="jumbotron">
            <h1>Movies MovieApp</h1>
            <p>Who doesn't Love movies?</p>
          </div>
        </div>
        <div className="row">
          <Router>
            <Switch>
              <Route exact path="/" component={MovieResults} />
              <Route path="/favourite" component={FavoriteMovieList} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default MovieApp;