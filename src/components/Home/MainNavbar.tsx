import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

import Svg from './Svg';
import { switchTheme } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux/reducers';

import "./MainNavBar.css";

export default function MainNavbar() {
  const theme = useSelector((state: rootState) => state.recipeReducer.theme)
  const dispatch = useDispatch();

  return (
    <div className='mainnavbar'>
      <div>
        <Svg />
      </div>
      <div>
        <Navbar className='navbar' variant="dark">
          <Container>
            {theme === "light" ? <BsFillBrightnessHighFill onClick={() => dispatch(switchTheme())} /> : <BsFillMoonFill className='sun' onClick={() => dispatch(switchTheme())} />}
            <Navbar.Brand href="#home"><img src="" alt=""></img></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link ><Link className="navButtons" to={"/"}>Home</Link></Nav.Link>
              <Nav.Link ><Link className="navButtons" to={"/recipelist"}>Recipes</Link></Nav.Link>
              <Nav.Link ><Link className="navButtons" to={"/myfavorite"}>My Favorites</Link></Nav.Link>
              <Nav.Link ><Link className="navButtons" to={"/contact"}>Review</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}
