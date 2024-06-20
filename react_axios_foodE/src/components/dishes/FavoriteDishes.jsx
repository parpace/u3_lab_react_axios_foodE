import { useContext, useEffect, useState } from 'react'
import FavoriteContext from '../../FavoriteContext'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function FavoriteDishes () {

    const { favorites } = useContext(FavoriteContext)
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

    return(
        <div className='favoriteDishesContainer'>
            {favoriteDishes && (
                <div>
                    <h1 className='pageTitle'>Favorite Dishes</h1>
                    <div className="categoryMealList">
                        {favoriteDishes.map((dish) => (
                            <Link className="mealLink" key={dish.idMeal} to={`/dishes/${dish.idMeal}`}>
                                <div className="dish" key={dish.idMeal}>
                                    <img className="mealImg" src={dish.strMealThumb}/>
                                    <h3 className='mealTitle'>{dish.strMeal}.</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}