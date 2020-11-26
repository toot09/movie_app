import React from 'react';
//import Ujone from './Ujone';

function Food({name, price}) {
  //console.log(props);
  //alert(props.age);
  return (
  //<h1> Ma age is {props.age}</h1>
  <h1> Ma favorite foods is {name} and price is {price}</h1>
  )
}

const foodILike = [
  {name : "samgyupsal",
  price : 12000},
  {name : "kimbab",
  price : 2000},
  {name : "gukbab",
  price : 8000}
]

function App() {
  return (
    <div>
      <h1>Helloo!!!</h1>
      {foodILike.map(dish=><Food name={dish.name} price={dish.price}/>)}
    </div>
  );
}

export default App;
