import React, { Component } from "react";
import MovieItem from "./MovieItem";

export default class ListMovie extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center m-3">LIST MOVIE</h1>
        <div className="row">
          <div className="col-sm-3">
            <MovieItem />
          </div>
          <div className="col-sm-3">
            <MovieItem />
          </div>
          <div className="col-sm-3">
            <MovieItem />
          </div>
          <div className="col-sm-3">
            <MovieItem />
          </div>
        </div>
      </div>
    );
  }
}
