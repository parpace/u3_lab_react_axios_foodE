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
        <div className='Header'>
            <Link className="title-link" to="/">
                <h1 className="page-title" style={{ cursor: 'pointer' }}>THE RECIPE.</h1>
            </Link>
            <Link className='favorites-link' to="/dishes/favoriteDishes">
                <h3>Favorites</h3>
            </Link>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="search."
                />
                <h4 className='search-by'>search by</h4>
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
            <div className='BlueCircle'></div>
            <div className='BlueCircle2'></div> 
            <div className='BlueCircle3'></div>
        </div>
    )
}

// edits kass made on this page 
// className for h1
// className for link
// className h4
// className header div
// bluecircle divs
// added input placeholder for accessibility 
// search by to lowercase