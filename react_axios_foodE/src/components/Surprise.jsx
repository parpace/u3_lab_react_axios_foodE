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
          <div className='surpriseText'>
            <h3 className='randomText'>Welcome to The Recipe, where every recipe tells a tale of flavor and adventure. Embark on a delicious journey with us and discover the art of culinary storytelling.</h3>
            </div>
            <div className='randomLink'>
              <div className='blueDiv'>
                <Link className='surpriseLink' to={`/dishes/${random.idMeal}`}>
                    <h1 className='boldText'>Be Bold. Choose Random.</h1>
                    <img src= "https://www.themealdb.com/images/media/meals/1529446352.jpg" alt={random.strMeal} className="radomImage"/>
                </Link>
            </div>
        </div>
    </div>
    
  )
}

export default RandomDetails

// things kass added 
// classname for Link 
// className for h1
// added div for text and moved blueDiv
// added className to h3