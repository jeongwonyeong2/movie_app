import React from 'react';
import propTypes from 'prop-types';



/*function Fruit(props){
  console.log(props);
  return (
    <h1>{props.fav} 먹어</h1>
    
  )
  }
*/



function Fruit({name,picture,rating}){
  return (
    <div>
    <h2>{name}맛있어</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  )
  
}
const fruitLike=[
  {
    id:1,
    name:'바나나',//키값이 있는애 객체
    image:'http://qwerew.cafe24.com/images/banana.png',
    rating:5,
  },
  { 
    id:2,
    name:'오렌지',//키값이 있는애 객체
    image:'http://qwerew.cafe24.com/images/orange.png',
    rating:4,

  },
  {
    id:3,
    name:'사과',//키값이 있는애 객체
    image: 'http://qwerew.cafe24.com/images/apple.png',
    rating:4.5,

  },
  {
    id:4,
    name:'멜론',//키값이 있는애 객체
    image: 'http://qwerew.cafe24.com/images/melon.jpg',
    rating:4.9,
  },
]
/*
function renderFruit(dish){
  return<Fruit key={dish.id} name={dish.name} picture={dish.imae}/>
}
*/
function App() {
  return (
  <div>
    <Fruit key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
  </div> 
  )
  
}
Fruit.propType={
  name:propTypes.string.isRequired,
  picture:propTypes.string.isRequired,
  rating:propTypes.number.isRequired,
}
export default App;
