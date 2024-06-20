import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Categories () {
    
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            setCategories(response.data.categories.slice(0, -2)) 
        }
        getCategories()
    }, [])
    
    return (
        <div>
            <h1 className='categoriesTitle'>Meal Type.</h1>
            <div className="categoryList">
                {categories.map((category) => (
                    <Link key={category.idCategory} to={`/dishes/category/${category.strCategory}`}>
                        <div className="category" key={category.idCategory}>
                            <img className="mealPic" src={category.strCategoryThumb} alt={category.strCategory}/>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

// things kass added
// className to h1
// changed from Categories to Meal Type
// changed background img to regular img
// took out the last 2 images bc for some reason they're not pngs???