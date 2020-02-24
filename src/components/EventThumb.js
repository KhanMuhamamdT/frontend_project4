import React from "react";
import { Link } from "react-router-dom";
 import "../App.css";
let aboutprops=""
const EventThumb = props => {
  return (
    <div className="col-md-4 mt-4">
      <Link
      className="post-thumb card mb-4 shadow-sm"
        to = {'/itemdetails'}        
      >
        
        <img className="card-img-top" src={props.event.event_url} alt="" />
        <div className="card-body">
          <h4 className="card-text">{'Event ::: ' +  props.event.event_name}</h4>
          <h4 className="card-text">{'Event Date ::: ' +  props.event.event_date}</h4>
          <h4 className="card-text">{'Event Start time ::: ' +  props.event.event_start_time}</h4>
          <h4 className="card-text">{'Event End Time ::: ' +  props.event.event_end_time}</h4>
        
        </div>

      </Link>
    </div>
   
  );
};
export default EventThumb;
