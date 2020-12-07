import React from "react";
import PropTypes from "prop-types";
import './Movies.css';

// Movies.js doesn't need to using state. so Use function not class like App.js (class App extends React.Component)
function Movies({id, year, title, summary, poster}) {
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year} 작</h5>
            <p className="movie_summary">{summary}</p>
        </div>
    </div>);
}

Movies.prototype = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Movies;