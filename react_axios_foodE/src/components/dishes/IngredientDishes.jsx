import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function IngredientDishes () {
    
    const [meals, setMeals] = useState([])

    const { selectedIngredient } = useParams()

    useEffect(() => {
        const getIngredientMeals = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`)
            console.log(selectedIngredient)
            console.log(response)
            setMeals(response.data.meals)
        }
        getIngredientMeals()
    }, [selectedIngredient])
    
    return (
        <div className='categoryMealContainer'>
            <h1>Dishes with {selectedIngredient}</h1>
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