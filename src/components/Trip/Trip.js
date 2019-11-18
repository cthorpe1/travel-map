import React from "react";
import image from "../../assets/images/default-trip.jpg";
import classes from "./Trip.module.css";
const Trip = props => {
  const handleTripClick = () => {
    props.setActiveMarker(props.details.countryRef);
  }
  return (
    <div className={classes.Trip} onClick={() => handleTripClick()}>
      <div className={classes.PhotoContainer}>
        <img src={image} alt="Trip Photo" />
      </div>
      <h4>{props.details.name}</h4>
    </div>
  );
};

export default Trip;
