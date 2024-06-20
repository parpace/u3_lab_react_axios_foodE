import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function DishDetails () {
    
    const [dish, setDish] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const { selectedDish } = useParams()

    useEffect(() => {
        const getDish = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedDish}`)

            console.log(response.data.meals)

            if (response.data.meals) {
                setDish(response.data.meals[0])
                setErrorMessage('')
            } else {
                setDish('')
                setErrorMessage(`Sorry, we don't have this dish. Try another one!`)
            }
        }
        getDish()
    }, [selectedDish])
    
    return (
        <div className='dishDetails'>
            {errorMessage ? (
                <p style={{ color: 'red' }}>{errorMessage}</p>
            ) : (
                <div className='dishDetail'>
                    <img className="recipePic"src={dish.strMealThumb} alt={dish.strMeal}/>
                    <h1 className='mealName'>{dish.strMeal}</h1>
                    <ul className='ingredients'><li>{/* ingredients here */}</li></ul>
                    <h3 className='instructions'>{dish.strInstructions}</h3>
                </div>
            )}
        </div>
    )
}

// changes kass made 
// added div classname above img
// changed category classname
// added classname to img 
// added classname to h1 and h2