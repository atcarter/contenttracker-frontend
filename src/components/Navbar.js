import { NavLink } from "react-router-dom";

export default NavBar = () => {
  return (
    <div>
      <NavLink to="/about">About</NavLink>
      <NavLink exact to="/contents">Content List</NavLink>
      <NavLink to="/contents/new">Add New Content</NavLink>
    </div>
  )
}