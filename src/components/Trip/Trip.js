import React from "react";
import image from "../../assets/images/default-trip.jpg";
import classes from "./Trip.module.css";
const Trip = props => {
  return (
    <div className={classes.Trip}>
      <div className={classes.PhotoContainer}>
        <img src={image} alt="Nothing Uploaded" />
      </div>
      <h4>{props.details}</h4>
    </div>
  );
};

export default Trip;
