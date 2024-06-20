import { useContext, useEffect, useState } from 'react'
import FavoriteContext from '../../FavoriteContext'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function FavoriteDishes () {

    const { favorites, setFavorites } = useContext(FavoriteContext)
    const [favoriteDishes, setFavoriteDishes] = useState()

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
        setFavorites(favorites.filter(id => id !== idMeal))
    }

    return (
        <div className='favoriteDishesContainer'>
            <h1 className='pageTitle'>Favorite Dishes</h1>
            {favoriteDishes ? (
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