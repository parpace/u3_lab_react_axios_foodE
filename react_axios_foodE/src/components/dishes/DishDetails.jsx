import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function DishDetails () {
    
    const [dish, setDish] = useState('')

    const { selectedDish } = useParams()

    useEffect(() => {
        const getDish = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedDish}`)
            console.log(response.data.meals)
            setDish(response.data.meals[0])
        }
        getDish()
    }, [selectedDish])
    
    return (
        <div className='categoryMealContainer'>
            <h1>{dish.strMeal}</h1>
            <img src={dish.strMealThumb} alt={dish.strMeal}/>
            <h3>{dish.strInstructions}</h3>
        </div>
    )
}