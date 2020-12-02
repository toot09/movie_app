import React from 'react';
import propTypes from "prop-types";
import axios from "axios";
import Movies from './Movies';
//import Ujone from './Ujone';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // axios is not fast. so take async method.
  // + async , await !!!!!
  getMovies = async () => {
    // When only use lower step data like "data->data->movies" use like below
    // if not? you have to use like this : var.data.data.movies
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    this.setState({ movies: movies, isLoading: false })
  }

  componentDidMount() {

    this.getMovies();
    //this.setState({isLoading:false});

    //after 6ms re-call render because of setState
    /*
    setTimeout(()=>{
      this.setState({isLoading : false});
    }, 6000);
    */
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading 
        ? "Loading..."
        : movies.map(movies => (
          <Movies 
            key={movies.id}
            id={movies.id} 
            year={movies.year} 
            title={movies.title} 
            summary={movies.summary} 
            poster={movies.medium_cover_image}
          />
        ))}
      </div>
    )
  }

}

export default App;