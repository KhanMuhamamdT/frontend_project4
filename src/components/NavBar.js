import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withTheme } from "@material-ui/styles";
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
    flexGrow: 1,
    marginRight: 18,
  },
  register: {
    marginright :1200,
  },

}));

const NavBar = props => {
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar position="static">
       <Toolbar>
       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
       <MenuIcon />
          </IconButton>
      {/* <div className="custom-nav-brand nav-item nav-link ">Not Pinterest</div> */}
            
        <NavLink  exact to="/">
        <Typography variant="h6" className={classes.title}>
           <font color ='white'> Home </font>
          </Typography> 
        </NavLink>
        
        <NavLink  exact to="/create-user">
        <Typography variant="h6" className={classes.title}>
           <font color ='white'> Register </font>
          </Typography> 
          </NavLink>

        <NavLink  exact to="/create-event">
        <Typography variant="h6" className={classes.title}>
           <font color ='white'> Create Event </font>
          </Typography> 
          </NavLink>

          <NavLink  exact to="/create-items">
        <Typography variant="h6" className={classes.title}>
           <font color ='white'> Create Item List </font>
          </Typography> 
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
      
      </Toolbar>   
      </AppBar>
      </div>
  );
};

export default NavBar;
