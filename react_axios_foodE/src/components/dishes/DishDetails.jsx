import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function DishDetails () {
    
    const [dish, setDish] = useState(null)
    const [ingredients, setIngredients] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const { selectedDish } = useParams()

    useEffect(() => {
        const getDish = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedDish}`)

            console.log(response.data.meals)

            if (response.data.meals) {
                const dishData = response.data.meals[0]
                setDish(dishData)
                setErrorMessage('')

                const ingredientList = []

                // I need to make a loop for each of the 20 possible ingredients and measurements. I need variables for each of the strIngredients and strMeasures. Next, it should check to see if the ingredient has a value or not, and only add it to the list if it is not falsy. The ingredientList will now be an array of objects with ingredient and measure properties.
                for (let i = 1; i <= 20; i++) {
                    const ingredient = dishData[`strIngredient${i}`]
                    const measure = dishData[`strMeasure${i}`]
                    // The function wasn't working, and ChatGPT told me I needed this .trim, as my function was not handling strings withwhitespace
                    if (ingredient && ingredient.trim()) {
                        ingredientList.push({ ingredient, measure })
                    }
                }
                setIngredients(ingredientList)
            } else {
                setDish(null)
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
                // Again, things weren't working without this "dish &&". ChaptGPT identified that my html here was trying to read the dish state while it was still null, so I needed to ensure that it doesn't render unless dish is not falsy.
                dish && (
                    <div className='dishDetail'>
                        <img className="recipePic" src={dish.strMealThumb} alt={dish.strMeal}/>
                        <h1 className='mealName'>{dish.strMeal}</h1>
                        <div className='ingredients'>
                            {ingredients.map((item, index) => (
                                <p key={index}>{item.ingredient}: {item.measure}</p>
                            ))}
                        </div>
                        <p className='instructions'>{dish.strInstructions}</p>
                    </div>
                )
            )}
        </div>
    )
}

// changes kass made 
// added div classname above img
// changed category classname
// added classname to img 
// added classname to h1 and h2