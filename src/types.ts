export const GET_RECIPES = "GET_RECIPES";
export const ADD_TO_MYFAVORITES = "ADD_TO_MYFAVORITES";
export const SEARCH_KEYWORD = "SEARCH_KEYWORD";
export const DELETE_FROM_MYFAVORITES = "DELETE_FROM_MYFAVORITES";
export const SORT_BY_RECIPE = "SORT_BY_RECIPE";
export const SORT_BY_TOTAL_COOKING_TIME = "SORT_BY_TOTAL_COOKING_TIME";

export type Recipe = {
  id: number;
  title: string;
  photoUrl: string;
  totalTime: number;
  cuisine: string;
  mainIngredient: string;
  publicUrl: string;
  calories: number;
  fat: number;
  cholesterol: number;
  fiber: number;
  protein: number;
  tags: string;
  ingredients: string;
  directions: string;
};

export type GetRecipes = {
  type: "GET_RECIPES";
  payload: Recipe[];
};
export type AddToMyFavorites = {
  type: "ADD_TO_MYFAVORITES";

  payload: {
    recipe: Recipe;
  };
};
export type SortByRecipe = {
  type: "SORT_BY_RECIPE";
  payload: boolean;
};
export type SortByCookingTime = {
  type: "SORT_BY_TOTAL_COOKING_TIME";
  payload: boolean;
};
export type SearhForKeyword = {
  type: "SEARCH_KEYWORD";
  payload: string;
};
export type DeleteFromCartList = {
  type: "DELETE_FROM_MYFAVORITES";
  payload: {
    recipe: Recipe;
  };
};
export type SwitchTheme = {
  type: "SWITCH_THEME";
};
export type RecipeActions =
  | GetRecipes
  | AddToMyFavorites
  | SortByRecipe
  | SortByCookingTime
  | SearhForKeyword
  | DeleteFromCartList
  | SwitchTheme;
