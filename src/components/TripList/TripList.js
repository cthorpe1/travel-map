import React from "react";
import { getMarkersFromDB } from "../../helpers/helpers";
import classes from "./TripList.module.css";
const TripList = props => {
    // let trips = [];
    // if (props.markers.length === 0) {
    //     let tripRef = await getMarkersFromDB();
    // }
  return (
    <div className={classes.Page}>
      <h1>Your Trips</h1>
      <div className={classes.TripsContainer}>
        {props.markers.map(marker => {
          return (
            <div className={classes.Trip}>
              <h4>{marker.name}</h4>
              <div className={classes.TripControls}>
                <p>View Details</p>
                <p>Delete Trip</p>
                <p>Edit Trip</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TripList;
