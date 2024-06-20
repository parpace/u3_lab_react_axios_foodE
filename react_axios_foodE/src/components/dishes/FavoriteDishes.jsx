import { useContext, useEffect, useState } from 'react'
import FavoriteContext from '../../FavoriteContext'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function FavoriteDishes () {

    const { favorites, setFavorites } = useContext(FavoriteContext)
    const [favoriteDishes, setFavoriteDishes] = useState([])

    useEffect(() => {
        const getFavoriteDishes = async () => {

            if(favorites.length > 0) {
                const favoriteDishList = []

                // I tried to use forEach here, but forEach cannot handle async / await
                for (const id of favorites) {
                    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                    const dishInfo = response.data.meals[0]
                    favoriteDishList.push(dishInfo)
                }

                setFavoriteDishes(favoriteDishList)
            }
        }
        getFavoriteDishes()
    }, [favorites])

    const removeFromFavorites = (idMeal) => {
        const newFavorites = favorites.filter(id => id !== idMeal)
        setFavorites(newFavorites)

        // ChatGPT had to help here, as the change was not immediately taking effect when there was only 1 favorite left.
        const newFavoriteDishes = favoriteDishes.filter(dish => dish.idMeal !== idMeal)
        setFavoriteDishes(newFavoriteDishes)
    }

    return (
        <div className='favoriteDishesContainer'>
            <h1 className='pageTitle'>Favorite Dishes</h1>
            {favoriteDishes.length > 0 ? (
                <div className="categoryMealList">
                    {favoriteDishes.map((dish) => (
                        <div key={dish.idMeal} className="dish">
                            <Link className="mealLink" to={`/dishes/${dish.idMeal}`}>
                                <img className="mealImg" src={dish.strMealThumb} alt={dish.strMeal} />
                                <h3 className='mealTitle'>{dish.strMeal}</h3>
                            </Link>
                            <button 
                                className='favButton' 
                                onClick={() => removeFromFavorites(dish.idMeal)}>
                                Remove From Favorites
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>You have no favorite dishes yet!</p>
            )}
        </div>
    )
}