import axios from "axios"
import { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom"

export default function Travel() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const getCountries = async () => {
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
            )
            const countryNames = response.data.meals

            const countriesData = await Promise.all(
                countryNames.map(async (country) => {
                    const mealsResponse = await axios.get(
                        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country.strArea}`
                    )
                    const meals = mealsResponse.data.meals.map(meal => ({
                        mealImage: meal.strMealThumb,
                        mealName: meal.strMeal,
                        idMeal: meal.idMeal
                    }))

                    return {
                        countryName: country.strArea,
                        meals: meals
                    }
                })
            )
            setCountries(countriesData)
        }
        getCountries()
    }, [])

    console.log(countries)

    return (
        <div className="Countries">
            <Carousel>
                {countries.map((country) => (
                    <Link key={country.countryName} to={`/dishes/country/${country.countryName}`}>
                        <Carousel.Item key={country.countryName}>
                            <img
                                className="d-block w-100"
                                src={country.meals[0].mealImage}
                                alt={country.meals[0].mealName}
                            />
                            <Carousel.Caption>
                                <h3>{country.countryName}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Link>
                ))}
            </Carousel>
        </div>
    )
}