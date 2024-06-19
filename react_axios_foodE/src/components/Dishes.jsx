import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Dishes () {
    
    const [dishes, setDishes] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)

            console.log(response)

            setDishes(response.data.categories)
        }
        getCategories()
    }, [])
    
    return (
        <div>
            <div className='dishesContainer'>
                <h1>You Searched By Meal Type</h1>
                <div className="dishList">
                    {dishes.map((dish) => (
                        // <Link key={category.idCategory} to={`/dishes/${category.idCategory}`}>
                            <div className="dish" key={dish.idCategory}>
                                <h3 style={{backgroundImage: `url(${dish.strCategoryThumb})`}}>{dish.strCategory}</h3>
                            </div>
                    ))}
                </div>
            </div>
            <div className='dishesContainer'>
                <h1>You Searched By Ingredient</h1>
                <div className="dishList">
                    {dishes.map((dish) => (
                        // <Link key={category.idCategory} to={`/dishes/${category.idCategory}`}>
                            <div className="dish" key={dish.idCategory}>
                                <h3 style={{backgroundImage: `url(${dish.strCategoryThumb})`}}>{dish.strCategory}</h3>
                            </div>
                    ))}
                </div>
            </div>
            <div className='dishesContainer'>
                <h1>You Searched By Country</h1>
                <div className="dishList">
                    {dishes.map((dish) => (
                        // <Link key={category.idCategory} to={`/dishes/${category.idCategory}`}>
                            <div className="dish" key={dish.idCategory}>
                                <h3 style={{backgroundImage: `url(${dish.strCategoryThumb})`}}>{dish.strCategory}</h3>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}