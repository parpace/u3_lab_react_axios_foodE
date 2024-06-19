import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function CountryDishes () {
    
    const [meals, setMeals] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const { selectedCountry } = useParams()

    useEffect(() => {
        const getCountryMeals = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCountry}`)

            console.log(selectedCountry)
            console.log(response)

            if (response.data.meals) {
                setMeals(response.data.meals)
                setErrorMessage('')
            } else {
                setMeals([])
                setErrorMessage(`We don't have dishes for this country. Try another one!`)
            }
        }
        getCountryMeals()
    }, [selectedCountry])
    
    return (
        <div className='categoryMealContainer'>
            <h1>{selectedCountry} Dishes</h1>
            {errorMessage ? (
                <p style={{ color: 'red' }}>{errorMessage}</p>
            ) : (
                <div className="categoryMealList">
                    {meals.map((meal) => (
                        <Link key={meal.idMeal} to={`/dishes/${meal.idMeal}`}>
                            <div className="dish" key={meal.idMeal}>
                                <h3 style={{backgroundImage: `url(${meal.strMealThumb})`}}>{meal.strMeal}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}