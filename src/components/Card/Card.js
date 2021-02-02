import React from "react";
import PropTypes from 'prop-types'

const Card = ({ movie }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="card-image-top"
          width="100%"
        />
        <div className="card-body">
          <h4>
            {movie.Title} - {movie.Year}
          </h4>
          <span>{movie.Type}</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
    Type: PropTypes.string,
  }).isRequired
}

export default Card;
