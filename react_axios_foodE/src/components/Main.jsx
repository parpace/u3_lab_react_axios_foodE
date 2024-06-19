import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import DishDetails from './dishes/DishDetails'
import CategoryDishes from './dishes/CategoryDishes'
import CountryDishes from './dishes/CountryDishes'
import IngredientDishes from './dishes/IngredientDishes'

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dishes/category/:selectedCategory' element={<CategoryDishes/>}/>
                <Route path='/dishes/ingredient/:selectedIngredient' element={<IngredientDishes/>}/>
                <Route path='/dishes/country/:selectedCountry' element={<CountryDishes/>}/>
                <Route path='/dishes/:selectedDish' element={<DishDetails/>}/>
            </Routes>
        </div>
    )
}