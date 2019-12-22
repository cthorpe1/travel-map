import React, { useState, useEffect } from "react";
import { findCountryById } from "../../helpers/countryHelpers";
import classes from "./CountryInfo.module.css";
const CountryInfo = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [markerData, setMarkerData] = useState(null);
  useEffect(() => {
    const getMarkerData = async () => {
      findCountryById(props.countryRef).then(doc => {
        setMarkerData(doc.data());
        setIsLoading(false);
      });
    };
    if (props.countryRef !== null) {
      setIsLoading(true);
      getMarkerData();
    }
  }, [props.countryRef]);
  return (
    <div className={classes.InfoContainer}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h3>{markerData.name.common}</h3>
          <p>
            <strong>Capital</strong>: {markerData.capital}
          </p>
          <div className={classes.RegionInfo}>
            <p>
              <strong>Region</strong>: {markerData.region}
            </p>
            <p>
              <strong>Subregion</strong>: {markerData.subregion}
            </p>
          </div>
          <p>
            <strong>Description</strong>:
          </p>
          <p>{markerData.desc}</p>
          <div className={classes.Gallery}>
            <p>
              <strong>Your Containers:</strong>
              <div className={classes.UserContainersGrid}>

              </div>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
