import { Dispatch } from "redux";
import {
  AddToMyFavorites,
  DeleteFromCartList,
  GetRecipes,
  Recipe,
  SearhForKeyword,
  SortByCookingTime,
  SortByRecipe,
  SwitchTheme,
} from "../types";

export function getRecipes(recipes: Recipe[]): GetRecipes {
  return {
    type: "GET_RECIPES",
    payload: recipes,
  };
}
export function searchForKeyword(keyword: string): SearhForKeyword {
  return {
    type: "SEARCH_KEYWORD",
    payload: keyword,
  };
}
export function addToMyFavorites(recipe: Recipe): AddToMyFavorites {
  return {
    type: "ADD_TO_MYFAVORITES",
    payload: {
      recipe,
    },
  };
}
export function deleteFromCartList(recipe: Recipe): DeleteFromCartList {
  return {
    type: "DELETE_FROM_MYFAVORITES",
    payload: {
      recipe,
    },
  };
}
export function sortByRecipe(recipesort: boolean): SortByRecipe {
  return {
    type: "SORT_BY_RECIPE",
    payload: recipesort,
  };
}

export function sortByCookingTime(time: boolean): SortByCookingTime {
  return {
    type: "SORT_BY_TOTAL_COOKING_TIME",
    payload: time,
  };
}
export function switchTheme(): SwitchTheme {
  return {
    type: "SWITCH_THEME",
  };
}

export function fetchRecipes() {
  return (dispatch: Dispatch) => {
    fetch("https://api.sampleapis.com/recipes/recipes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        dispatch(getRecipes(data));
      });
  };
}
