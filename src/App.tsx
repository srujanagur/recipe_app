import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RecipeisList from "./components/Recipes/RecipeisList";
import Myfavorite from "./components/Myfavorites/Myfavorite";
import EachRecipeDetails from "./components/EachRecipeDetails/EachRecipeDetails";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import MainNavbar from "./components/Home/MainNavbar";
import { useSelector } from "react-redux";
import { rootState } from "./redux/reducers";


function App() {
  const theme = useSelector((state: rootState) => state.recipeReducer.theme);
  console.log("theme" + theme);
  return (
    <div className="data" data-color-mode={theme}>
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipelist" element={<RecipeisList />} />
          <Route path="/detail/:name" element={<EachRecipeDetails />} />
          <Route path="/myfavorite" element={<Myfavorite />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
