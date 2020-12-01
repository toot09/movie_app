import React from 'react';
import propTypes from "prop-types";
//import Ujone from './Ujone';

class App extends React.Component {
  state = {
    count: 0
  };

  plus=()=>{
    //setSate re-call render()
    this.setState(current => ({count: current.count+1}));
  };
  minus=()=>{
    this.setState(current => ({count: current.count-1}));    
  };

  render() {
    return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.plus}>Plus</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;

/*
function Food({name, price, rating}) {
  //console.log(props);
  //alert(props.age);
  return (
  //<h1> Ma age is {props.age}</h1>
  <div>
    <h1>My favorite foods is {name}</h1>
    <h2>price : {price}</h2>
    <h3>rating : {rating}/5.0</h3>
  </div>
  )
}

const foodILike = [
  {key : 1,
  name : "samgyupsal",
  price : 12000,
  rating : 5.0},
  {key : 2,
  name : "kimbab",
  price : 2000,
  rating : 2.0},
  {key : 3,
  name : "gukbab",
  price : 8000,
  rating : 3.8}
]

Food.propTypes = {
  name : propTypes.string.isRequired,
  price : propTypes.number.isRequired,
  rating : propTypes.number.isRequired
}

function Dishes(dish) {
  //console.log(dish.name);
  return <Food key={dish.key} name={dish.name} price={dish.price} rating={dish.rating} />
}

function App() {
return <div>{foodILike.map(Dishes)}</div>
  
  //return (
  //  <div>
  //    <h1>Helloo!!!</h1>
  //    {foodILike.map(dish=><Food name={dish.name} price={dish.price}/>)}
  //  </div>
  //);
  
}

export default App;
*/