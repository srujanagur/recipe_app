import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { fetchRecipes } from "../../redux/actions";
import { rootState } from '../../redux/reducers';

import "./EachRecipeDetails.css";

export default function EachRecipeDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);
  const { recipes } = useSelector((state: rootState) => state.recipeReducer);
  const { name } = useParams();
  const eachRecipe = recipes.filter(
    (recipe) => recipe.title === name
  );

  return (
    <div className='eachrecipedetails'>
      {eachRecipe.map((recipe) => {
        return (
          <div >
            <div className='details'>
              <h5>Title:{recipe.title}</h5>
              <div >
                <img className="img1" src={recipe.photoUrl} alt="..." />
              </div>
              <div>
                <div className='datails1'>
                  <p></p>
                  <h5>you can find recipe here:<Link to={recipe.publicUrl}>
                    {recipe.publicUrl}
                  </Link></h5>
                  <h5 >Nutritions: <BsFillArrowDownSquareFill /></h5>
                  <p >calories: {recipe.calories}</p>
                  <p >fat: {recipe.fat}</p>
                  <p >cholesterol: {recipe.cholesterol}</p>
                  <p >fiber: {recipe.fiber}</p>
                  <p >protien: {recipe.protein}</p>
                  <p ><small >Tag Line{recipe.tags}</small></p>
                  <p><h5>Ingredients: </h5>{recipe.ingredients}</p>
                  <p><h5>Preparation: </h5>{recipe.directions}</p>
                  <Button className='cartbtn' variant='success' onClick={() => navigate("/recipelist")}>Back</Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}
