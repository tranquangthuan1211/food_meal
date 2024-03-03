import React, { useEffect, useState } from 'react'
import Header from '../../component/Header'
import { useParams } from 'react-router-dom';
import Youtube from './youtube';
import { FaRegUserCircle } from "react-icons/fa";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import './style.css'

export default function DetailCooking({ cart, addToCart, moveTocart }) {
  const {id} = useParams()
  const linkfetchId = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
  const [meal, setMeal] = useState({})
  const navigate = useNavigate();
  const cookiesUser = Cookies.get("userId")
  if(cookiesUser === undefined) {
    navigate('/login')
  }

  useEffect(() => {
    fetch(`${linkfetchId}${id}`)
    .then((res) => res.json())
    .then((res) => setMeal(res.meals[0]))
    .catch((error) => console.log(error))
  },[id])
  return (
    <div>
      <Header cart={cart} moveTocart={moveTocart}/>
       <div className='youtube'>
        <Youtube linkFilm={meal.strYoutube}/>
      </div> 
      <div className='contentYoutube'>
        <div>
          <img src={meal.strMealThumb} alt='anh' className='imageFood'/>
        </div>
        <div>
          <h1>{meal.strCategory}</h1>
          <p className='detailMeal' ><h1>Describe: </h1>{meal.strInstructions}</p>
          <p style={{display:'flex',}}><h1 style={{lineHeight:'16px'}}>Area: </h1>{meal.strArea}</p>
        </div>
      </div>
      <div className='contentBodyComment'>
          <h1 style={{margin:"10px 0"}}>commment</h1>
          <div className='userComment'>
            <FaRegUserCircle  style={{color:"#fff", width:"30px", height:"30px", marginRight:"4px"}}/>
            <input style={{width:"400px"}}/>
            <button className='buttonSend'>send</button>
          </div>
          <div className='contentComment'>
            <FaRegUserCircle style={{color:"#fff", width:"30px", height:"30px",marginRight:"4px"}}/>
            <div>
              <h3>tranquathuan</h3>
              <p>jfhfhfhfhf</p>
            </div>
          </div>
          <div className='contentComment'>
            <FaRegUserCircle style={{color:"#fff", width:"30px", height:"30px",marginRight:"4px"}}/>
            <div>
              <h3>tranquathuan</h3>
              <p>jfhfhfhfhf</p>
            </div>
          </div>
          <div className='contentComment'>
            <FaRegUserCircle style={{color:"#fff", width:"30px", height:"30px",marginRight:"4px"}}/>
            <div>
              <h3>tranquathuan</h3>
              <p>jfhfhfhfhf</p>
            </div>
          </div>
        </div>
    </div>
  )
}
