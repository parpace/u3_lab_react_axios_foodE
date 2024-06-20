import { useState } from 'react'

export default function Footer () {
    const intialState = {
        mealName: '',
        ingredients: '',
        instruction: '',
      
      }

      const [formState, setFormState] = useState (intialState)

      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        setFormState(intialState)
      }

      const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
      }
     
    return (
        <div className="MealDiv">
        <h1 className="footer">THE RECIPE.</h1>
        <form className="mealform" onSubmit={handleSubmit}>
                       <label className="MealLabel" htmlFor="mealName">Meal Name:</label>
                            <input
                                   type="text"
                                     id="mealName"
                               onChange={handleChange}
                                  value={formState.mealName}
                                                          />
                        <label className="MealLabel" htmlFor="ingredients">Ingredients</label>
                            <textarea
                                     id="ingredients"
                                   cols="30"
                                   rows="10"
                               onChange={handleChange}
                                  value={formState.Ingredients}
                                               ></textarea>
                        <label className="MealLabel" htmlFor="instruction">Instruction</label>
                            <textarea
                                     id="instruction"
                                   cols="30"
                                   rows="10"
                               onChange={handleChange}
                                  value={formState.Instruction}
                                               ></textarea>
                           <button className="Button" type="submit">Send</button>
                       </form>
        </div>
    )
}