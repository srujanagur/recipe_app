// import { lighttheme } from "../../components/Themes/Theme";

import { Recipe, RecipeActions } from "../../types";

export type InitialState = {
  recipes: Recipe[];
  cart: Recipe[];
  keyword: string;
  recipesort: boolean;
  time: boolean;
  filteredData: Recipe[];
  theme: string;
};
const initialState: InitialState = {
  keyword: "",
  recipes: [],
  cart: [],
  theme: "light",
  recipesort: true,
  time: true,
  filteredData: [],
};
export default function recipeReducer(
  state = initialState,
  action: RecipeActions
): InitialState {
  switch (action.type) {
    case "GET_RECIPES": {
      return {
        ...state,
        recipes: action.payload,
      };
    }
    case "SEARCH_KEYWORD": {
      const keyword = action.payload;
      let recipes = state.recipes.filter((recipe) => {
        return recipe.title.toLowerCase().search(keyword.toLowerCase()) !== -1;
      });
      return {
        ...state,
        filteredData: recipes,
        keyword: keyword,
      };
    }
    case "ADD_TO_MYFAVORITES": {
      const { recipe } = action.payload;
      return {
        ...state,
        cart: [...state.cart, recipe],
      };
    }
    case "DELETE_FROM_MYFAVORITES": {
      const { recipe } = action.payload;
      return {
        ...state,
        cart: state.cart.filter(function (item) {
          return item !== recipe;
        }),
      };
    }
    case "SORT_BY_RECIPE":
      return {
        ...state,
        recipes: action.payload
          ? [...state.recipes].sort((a, b) =>
              a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
            )
          : [...state.recipes]?.sort((a, b) =>
              a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
            ),
        recipesort: !state.recipesort,
      };

    case "SORT_BY_TOTAL_COOKING_TIME":
      return {
        ...state,
        recipes: action.payload
          ? [...state.recipes].sort((a, b) =>
              a.totalTime > b.totalTime ? 1 : -1
            )
          : [...state.recipes]?.sort((a, b) =>
              a.totalTime < b.totalTime ? 1 : -1
            ),
        time: !state.time,
      };

    case "SWITCH_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}
