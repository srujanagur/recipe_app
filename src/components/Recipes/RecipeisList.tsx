import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
import Carousel from "react-bootstrap/Carousel";

import { fetchRecipes } from "../../redux/actions";
import NavbarSection from "../NavBarRecipes/NavbarSection";
import { addToMyFavorites } from "../../redux/actions";
import { rootState } from "../../redux/reducers";

import "./RecipeisList.css";

export default function RecipeisList() {
  const finalRecipes = useSelector((state: rootState) =>
    state.recipeReducer.keyword
      ? state.recipeReducer.filteredData
      : state.recipeReducer.recipes
  );
  const { cart } = useSelector((state: rootState) => state.recipeReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className="recipieslist">
      <div>
        <NavbarSection />
      </div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="carouselimage"
            src="./images/indian.jpg"
            alt="Indian Special"
          />
          <Carousel.Caption>
            <h5>Indian</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselimage"
            src="./images/finland.jpg"
            alt="Finland Special"
          />
          <Carousel.Caption>
            <h5>Finland</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselimage"
            src="./images/sweden-food.jpg"
            alt="Sweden Special"
          />
          <Carousel.Caption>
            <h5>Sweden</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="recipelist">
        {finalRecipes.map((recipe) => {
          return (
            <div className="each">
              <img
                className="recipelistimage"
                src={recipe.photoUrl}
                alt="..."
              />
              <div className="datails1">
                <Link to={`/detail/${recipe.title}`}>{recipe.title}</Link>
                <p>Cuisine:{recipe.cuisine}</p>
                <p>Main Ingrdient: {recipe.mainIngredient}</p>
                <p>Total Cooking Time {recipe.totalTime}</p>
                <button
                  type="button"
                  className="cartbtn"
                  disabled={cart
                    .map((recipe) => recipe.title)
                    .includes(recipe.title)}
                  onClick={() => dispatch(addToMyFavorites(recipe))}
                >
                  AddToCart <BsSuitHeartFill className="heart" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
