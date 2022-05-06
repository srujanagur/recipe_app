import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux/reducers';

import "./Contact.css";

export default function Contact() {
  const { recipes } = useSelector((state: rootState) => state.recipeReducer);
  return (
    <div >
      <div className="contact">
        <div >
          <h2>Review your favorite Recipe</h2>
        </div>
        <div className="row">
          <div className="column">
            <div className='image'>
            </div>
          </div>
          <div className="column">
            <form>
              <label htmlFor="fname">Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
              <label htmlFor="lname">Type your Recipe Name </label>
              <input type="text" id="lname" name="lastname" placeholder="Your favorite Recipe name or or search Recipe.." />
              <label htmlFor="country">Search for a recipe</label>
              <select id="country" name="country">
                {recipes.map((recipe) => (
                  <option value={recipe.title}>{recipe.title}</option>))}

              </select>
              <label htmlFor="subject">review</label>
              <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
