import React, { Component } from "react";
import Search from "./Search";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
import { Link } from "react-router-dom";

class MovieResults extends Component {
  render() {
    return (
      <div>
        <Link to="/favourite">Favorite</Link>
        <Search />
        {this.props?.movies?.map((item) => {
          return <MovieItem movie={item} key={item.id} showButton={true} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    movies: state.movies,
  };
}

export default connect(mapStateToProps, null)(MovieResults);