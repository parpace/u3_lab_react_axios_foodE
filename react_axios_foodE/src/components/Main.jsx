import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import DishDetails from './DishDetails'
import Dishes from './Dishes'

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dishes' element={<Dishes/>}/>
                <Route path='/dishDetails' element={<DishDetails/>}/>
            </Routes>
        </div>
    )
}