import React from 'react';
import { Row } from 'react-bootstrap';

import './movie-view.scss';

class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <Row>
        <div className="movie-poster">
          <img src={movie.ImagePath} alt=""/>
        </div>
        </Row>
        <Row>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        </Row>
        <Row>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        </Row>
        
        <button onClick={() => { onBackClick(null); }}>Back</button>

      </div>
    );
  }
}

export default  MovieView;