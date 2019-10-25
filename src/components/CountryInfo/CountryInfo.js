import React from "react";
import { findCountryById } from "../../helpers/helpers";
import classes from "./CountryInfo.module.css";
const CountryInfo = props => {
  // let markerData;
  // if (props.country !== null) {
  //   findCountryById(props.country).then(doc => {
  //     markerData = doc.data();
  //     console.log(markerData.name.common);
  //   });
  // }
  return (
    <div className={classes.InfoContainer}>
      <h1>test</h1>
      {/* <p>
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
      <p>{props.data.desc}</p> */}
    </div>
  );
};

export default CountryInfo;
