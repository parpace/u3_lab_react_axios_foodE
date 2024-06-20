import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
    <div className="randomContainer">
        <div className='blueDiv'>
            <h3>Welcome to The Recipe, where every recipe tells a tale of flavor and adventure. Embark on a delicious journey with us and discover the art of culinary storytelling.</h3>
            <div className='randomLink'>
                <Link to={`/dishes/${random.idMeal}`}>
                    <h1 className=''>Be Bold. Choose Random.</h1>
                    <img src= "https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg" alt={random.strMeal} className="radomImage"/>
                </Link>
            </div>
        </div>
    </div>
    
  )
}

export default RandomDetails