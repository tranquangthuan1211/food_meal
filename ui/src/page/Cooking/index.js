import React, { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import Header from '../../component/Header/index';
import "./styles.css"
import Footer from '../../component/footer';
import { useNavigate } from 'react-router-dom';

export default function Cooking({ cart,addToCart, moveTocart }) {
  const [meals, setMeal] = useState([]) 
  const api = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  useEffect(() => {
    fetch(api)
    .then ((res) => res.json())
    .then((res) => setMeal(res.meals))
    .catch((error) => console.log(error))
  },[api])
  const navigate = useNavigate()
  return (
    <div className='content_cooking'>
      <Header cart={cart} moveTocart={moveTocart}/>
      <div className='content_cooking_body'>
        {meals.map((meal,index) => (
          <div key={index} className='contentMeal' 
            style={{backgroundImage: `url(${meal.strMealThumb})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    opacity:0.6}}
          >
            <div key={index} className='detailMeal'>
              <div className='imageMeal'>
                <img src={meal.strMealThumb} alt='anh' className='imageMeal'/>
              </div>
              <div className='button_cooking'>
                <h1 className='nameMeal'>{meal.strMeal}</h1>
                <p className='introduce'>{meal.strInstructions}</p>
                <button className='button' style={{margin:'4px 4px'}} onClick={() => navigate(`/cooking/${meal.idMeal}`)}>Cooking</button>
                <button className='button' style={{margin:'4px 4px'}}>buy</button>
              </div>
            </div>
            <div>
              <FaAngleDoubleRight style={{color:"#fff"}} />
            </div>
          </div>
        ))}
      </div> 
      <Footer/> 
    </div>
  )
}
