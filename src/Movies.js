import React from "react";
import PropTypes from "prop-types";

// Movies.js doesn't need to using state. so Use function not class like App.js (class App extends React.Component)
function Movies({id, year, title, summary, poster}) {
    return <h1>{title}</h1>
}

Movies.prototype = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Movies;