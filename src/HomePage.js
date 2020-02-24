import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreateUser from "./CreateUser";
import CreateEvent from "./CreateEvent";
import Gallery from "./components/Gallery";
import Itemdetails from "./Itemdetails";
import Createtest from "./Createtest"
const HomePage = () => {
const [events, setEvents] = useState([]);
  useEffect(() => {
      fetch("http://localhost:8000/api/events")
      .then(res => res.json())
      .then(res => setEvents(res));
       });
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
      <Route path="/create-items" render={props => < Createtest {...props} />}/>
      <Route path="/itemdetails" render={props => < Itemdetails {...props} />}/>
     </BrowserRouter>
  

       );
      };
export default HomePage;
