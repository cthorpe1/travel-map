import React from "react";
import Trip from "../../components/Trip/Trip";
import classes from "./AllTripsContainer.module.css";
const AllTripsContainer = props => {
  return (
    <div className={classes.AllTripsContainer}>
      {props.trips.map((trip,i) => {
        return <Trip key={i} details={trip.name} />;
      })}
    </div>
  );
};

export default AllTripsContainer;
