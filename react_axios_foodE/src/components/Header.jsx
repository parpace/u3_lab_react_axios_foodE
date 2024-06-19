import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchType, setSearchType] = useState('Dish')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        
        switch (searchType) {
            case 'Dish':
                navigate(`/dishes/${searchQuery}`)
                break
            case 'Country':
                navigate(`/dishes/country/${searchQuery}`)
                break
            case 'Category':
                navigate(`/dishes/category/${searchQuery}`)
                break
            case 'Ingredient':
                navigate(`/dishes/ingredient/${searchQuery}`)
                break
            default:
                break
        }
    }

    return (
        <div>
            <Link to="/">
                <h1 style={{ cursor: 'pointer' }}>THE RECIPE.</h1>
            </Link>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <h4>Search By</h4>
                <select 
                    value={searchType} 
                    onChange={(e) => setSearchType(e.target.value)}
                >
                    <option value="Dish">Dish</option>
                    <option value="Country">Country</option>
                    <option value="Category">Category</option>
                    <option value="Ingredient">Ingredient</option>
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}