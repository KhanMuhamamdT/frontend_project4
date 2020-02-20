import React from "react";
import { NavLink } from "react-router-dom";

//import "../App.css";

const NavBar = props => {
  console.log ("NAV BAR")
  return (
    <nav className="nav">
      {/* <div className="custom-nav-brand nav-item nav-link ">Not Pinterest</div> */}
      
      <div className="d-flex justify-content-end custom-nav">
        <NavLink exact className="nav-item nav-link custom-nav-item" to="/">
          Home
        </NavLink>
       
       
       
       
        {/* <NavLink
          className="nav-item nav-link custom-nav-item"
          to="/create-post"
        >
          Create a Post
        </NavLink>
        <NavLink
          className="nav-item nav-link custom-nav-item"
          to="/create-user"
        >
          Create a User
        </NavLink>
        <NavLink
          exact
          className="nav-item nav-link"
          to={`/users/${props.userID}`}
        >
          <div className="avatar">
            <img
              className="avatar-img"
              src="https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-xlarge_trans++qVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"
              alt=""
            />
          </div>
        </NavLink> */}
      </div>
           
    </nav>
  );
};

export default NavBar;
