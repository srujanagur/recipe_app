import React from 'react';
import { Button, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { deleteFromCartList } from "../../redux/actions";
import { rootState } from '../../redux/reducers';

import "./Myfavorite.css";

export default function Myfavorite() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state: rootState) => state.recipeReducer);
  return (
    <div className='myfavorite'>
      {cart.map((recipe) => {
        return (
          <div className='myfavoriteeach'>
            <h5>{recipe.title}</h5>
            <div >
              <img className="recipelistimage" src={recipe.photoUrl} alt="..." />
            </div>
            <Button className="cartbtn" variant='success' onClick={() => dispatch(deleteFromCartList(recipe))}>Remove</Button>
            <Button className='cartbtn' variant='success' onClick={() => navigate("/recipelist")}>Back</Button>
          </div>
        );
      })}
    </div>
  )
};

