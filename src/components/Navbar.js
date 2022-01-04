import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const link = {
  padding: "20px",
  background: "black",
  color: "bisque",
};

const activeLink = {
  padding: "20px",
  background: "white",
  color: "black",
}

class Navbar extends Component {

  render(){
    return (
      <div>
        <NavLink to="/about" style={link} activeStyle={activeLink}>About</NavLink>
        <NavLink exact to="/contents" style={link} activeStyle={activeLink}>Content List</NavLink>
        <NavLink to="/contents/new" style={link} activeStyle={activeLink}>Add New Content</NavLink>
      </div>
    )
  }

}

export default Navbar;