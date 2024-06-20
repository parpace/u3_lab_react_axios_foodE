import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Carousel, Card, Stack, Button } from "react-bootstrap";

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

    // console.log(countries)
    return (
        <div>
            <h2 className="TravelText">TRAVEL.</h2>
        <div className="Countries">
            
            <Carousel className="c-universe">
                {countries.map((country, index) => (
                    index % 3 === 0 ? (
                        <Carousel.Item key={index} className="c-item">
                            <div className="row">
                                {countries.slice(index, index + 3).map((country) => (
                                    country.countryName !== 'unknown' && (
                                        <div key={country.countryName} className="key col-md-3">
                                            <Link to={`/dishes/country/${country.countryName}`} className="countries-link">
                                                <div className="country-card-wrapper">
                                                    <img
                                                        className="d-block c-img"
                                                        src={country.meals[0].mealImage}
                                                        alt={country.meals[0].mealName}
                                                    />
                                                    <div className="country-card-overlay">
                                                        <h5 className="card-title">{country.countryName}.</h5>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                ))}
                            </div>
                        </Carousel.Item>
                    ) : null
                ))}
            </Carousel>
        </div>
       </div> 
    )
}