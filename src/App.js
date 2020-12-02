import React from 'react';
import propTypes from "prop-types";
//import Ujone from './Ujone';

class App extends React.Component {
  state = {
    isLoading : true,
    movies:[]
  };

  componentDidMount() {
    //after 6ms re-call render because of setState
    setTimeout(()=>{
      this.setState({isLoading : false});
    }, 6000);
  }

  render() {
    const{isLoading} = this.state;
  return <div>{isLoading?"Loading..." : "we are ready"}</div>
  }

}

export default App;