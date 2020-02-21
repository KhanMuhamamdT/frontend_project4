import React from "react";
import "../App.css";
import EventThumb from "./EventThumb";

const Gallery = props => {
  if (props.getEvent.length === 0) {
    return <div>Loading......</div>;
  }
  const event = props.getEvent.map((item, key) => {
    return <EventThumb event={item} key={key} />;
  });
 return <div className="row">{event}</div>;
   };
export default Gallery;
