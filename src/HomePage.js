import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreateUser from "./CreateUser";
import CreateEvent from "./CreateEvent"
// import CreatePost from "./CreatePost";
// import CreateUser from "./CreateUser";
// import Gallery from "./components/Gallery";
// import Footer from "./components/Footer";
// import PostDetails from "./PostDetails";
// import UserDetails from "./UserDetails";
// import UpdateUser from "./components/UpdateUser";

const HomePage = () => {
 // const [users, setUsers] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [comments, setComments] = useState([]);

//   const [changed, setChanged] = useState(false);

//   const [userID, setUserID] = useState("5e334f250840630004a420be");

//   useEffect(() => {
//     fetch("https://notpinterest.herokuapp.com/api/posts")
//       .then(res => res.json())
//       .then(res => setPosts(res))
//       .catch(err => console.log(err));
//     fetch("https://notpinterest.herokuapp.com/api/comments")
//       .then(res => res.json())
//       .then(res => setComments(res))
//       .catch(err => console.log(err));
//     fetch("https://notpinterest.herokuapp.com/api/users")
//       .then(res => res.json())
//       .then(res => setUsers(res))
//       .catch(err => console.log(err));
//   }, [changed]);

//   const userIdChange = newID => {
//     setUserID(newID);
//   };

//   const handlePageChanged = () => {
//     setChanged(!changed);
//     console.log(changed);
//   };
console.log('Home page')
  return (
  
    <BrowserRouter className="container">
      <Route path="/" render={props => < NavBar {...props} />}/>
    
      <Route path="/create-user" render={props => < CreateUser {...props} />}/>
      <Route path="/create-event" render={props => < CreateEvent {...props} />}/>
    </BrowserRouter>
      


);
};
export default HomePage;
