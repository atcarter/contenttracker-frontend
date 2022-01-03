import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends Component {

  render(){
    return (
      <div>
        <NavLink to="/about">About</NavLink>
        <NavLink exact to="/contents">Content List</NavLink>
        <NavLink to="/contents/new">Add New Content</NavLink>
      </div>
    )
  }

}

export default Navbar;