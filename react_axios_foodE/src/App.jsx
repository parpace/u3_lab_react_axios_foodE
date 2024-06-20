import { useState } from 'react'
import FavoriteContext from './FavoriteContext'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [favorites, setFavorites] = useState([])

  return (
    <>
      <FavoriteContext.Provider value={{favorites, setFavorites}}>
        <Header/>
        <Main/>
        <Footer/>
      </FavoriteContext.Provider>
    </>
  )
}

export default App
