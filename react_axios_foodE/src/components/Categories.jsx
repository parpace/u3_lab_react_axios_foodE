import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Categories () {
    
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)

            console.log(response)

            setCategories(response.data.categories)
        }
        getCategories()
    }, [])
    
    return (
        <div>
            <h1>Categories</h1>
            <div className="categoryList">
                {categories.map((category) => (
                    <Link key={category.idCategory} to={`/dishes/category/${category.strCategory}`}>
                        <div className="category" key={category.idCategory}>
                            <h3 style={{backgroundImage: `url(${category.strCategoryThumb})`}}>{category.strCategory}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}