import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (

    <>

      <NavLink to='/movies' exact> Movies </NavLink>
      <NavLink to='/directors' exact> Directors </NavLink>
      <NavLink to='/actors' exact> Actors </NavLink>
      <NavLink to='/' exact> Home </NavLink>

    </>

  );
}

export default NavBar;
