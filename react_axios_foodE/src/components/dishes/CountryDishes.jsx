import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function CountryDishes () {
    
    const [meals, setMeals] = useState([])

    const { selectedCountry } = useParams()

    useEffect(() => {
        const getCountryMeals = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCountry}`)
            console.log(selectedCountry)
            console.log(response)
            setMeals(response.data.meals)
        }
        getCountryMeals()
    }, [selectedCountry])
    
    return (
        <div className='categoryMealContainer'>
            <h1>{selectedCountry} Dishes</h1>
            <div className="categoryMealList">
                {meals.map((meal) => (
                    <Link key={meal.idMeal} to={`/dishes/${meal.idMeal}`}>
                        <div className="dish" key={meal.idMeal}>
                            <h3 style={{backgroundImage: `url(${meal.strMealThumb})`}}>{meal.strMeal}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}