import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsSuitHeart } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";

import { rootState } from "../../redux/reducers";
import { searchForKeyword } from "../../redux/actions";
import { sortByCookingTime, sortByRecipe } from "../../redux/actions";

import "./NavBarSection.css";

export default function NavbarSection() {
  const { keyword } = useSelector((state: rootState) => state.recipeReducer);
  const { cart } = useSelector((state: rootState) => state.recipeReducer);
  const { recipesort } = useSelector((state: rootState) => state.recipeReducer);
  const { time } = useSelector((state: rootState) => state.recipeReducer);
  const dispatch = useDispatch();
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchForKeyword(evt.target.value));
  };
  return (
    <div className="navbarsectionlist">
      <div>
        <input
          className="navbarsection"
          width="200px"
          type="text"
          placeholder="Search for Recipe"
          onChange={handleChange}
          value={keyword}
        />
      </div>
      <Dropdown>
        <Dropdown.Toggle className="btn btn-info">Sort by</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => dispatch(sortByRecipe(recipesort))}>
            Recipe
          </Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(sortByCookingTime(time))}>
            Cooking Time
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div>
        <Link className="linkstyle" to={"/myfavorite"}>
          <BsSuitHeart size="2.5rem" />
          {Object.keys(cart).length}
        </Link>
      </div>
    </div>
  );
}
