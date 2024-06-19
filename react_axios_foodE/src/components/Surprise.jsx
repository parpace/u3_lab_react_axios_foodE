import { useEffect, useState } from 'react'
import {  Link } from 'react-router-dom'
import axios from 'axios'

const RandomDetails = () => {
  const [random, setRandom] = useState([])

  useEffect(() => {
    const getRandom = async () => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      setRandom(response.data.meals[0])
    }
    getRandom()
  }, [])

  
  return (
    <div className="random">
      <h2>{random.strMeal}</h2>
      <Link to={`/dishes/${random.idMeal}`}>
      <img src= "https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg" alt={random.strMeal} className="radomImage"/>
      </Link>
    </div>
  )
}

export default RandomDetails
