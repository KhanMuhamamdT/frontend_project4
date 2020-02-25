import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreateUser from "./CreateUser";
import CreateEvent from "./CreateEvent";
import Gallery from "./components/Gallery";
import Itemdetails from "./Itemdetails";
import CreateItems from "./CreateItems"
import axios from 'axios';
import Footer from "./components/Footer";
const HomePage = () => {
const [events, setEvents] = useState([]);
console.log('Home')
async function  fetchData() {
      const res = await fetch("http://localhost:8000/api/events")
      const data = await res.json()
      setEvents (data)
}

useEffect( () => {
  console.log('use effect in home page')
  fetchData()
},[])
  return (
    <BrowserRouter className="container">
      <Route path="/" render={props => < NavBar {...props} />}/>
      <Route
          exact
          path="/"
          render={props => <Gallery getEvent={events} {...props} />}
        />
      <Route path="/create-user" render={props => < CreateUser {...props} />}/>
      <Route path="/create-event" render={props => < CreateEvent {...props} />}/>
      <Route path="/create-items" render={props => < CreateItems {...props} />}/>
      <Route path="/itemdetails" render={props => < Itemdetails {...props} />}/>
      <Footer/>
     </BrowserRouter>
  
       );
      };
export default HomePage;
