import React from "react";
import classes from "./CountryInfo.module.css";
const CountryInfo = props => {
  return (
    <div className={classes.InfoContainer}>
      <h3>{props.data.name.common}</h3>
      <p>
        <strong>Capital</strong>: {props.data.capital}
      </p>
      <div className={classes.RegionInfo}>
        <p>
          <strong>Region</strong>: {props.data.region}
        </p>
        <p>
          <strong>Subregion</strong>: {props.data.subregion}
        </p>
      </div>
      <p>
        <strong>Description</strong>:
      </p>
      <p>{props.data.desc}</p>
      <div className={classes.CitiesContainer}>
        <button>Add City</button>
      </div>
    </div>
  );
};

export default CountryInfo;
