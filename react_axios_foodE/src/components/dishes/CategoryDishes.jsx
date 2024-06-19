import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function CategoryDishes () {
    
    const [meals, setMeals] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const { selectedCategory } = useParams()

    useEffect(() => {
        const getCategoryMeals = async () => {
            const response = await axios.get(`https:www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)

            console.log(selectedCategory)
            console.log(response)
            
            if (response.data.meals) {
                setMeals(response.data.meals)
                setErrorMessage('')
            } else {
                setMeals([])
                setErrorMessage('Category does not exist. Try again!')
            }
        }
        getCategoryMeals()
    }, [selectedCategory])
    
    return (
        <div className='categoryMealContainer'>
            <h1>{selectedCategory} Dishes</h1>
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