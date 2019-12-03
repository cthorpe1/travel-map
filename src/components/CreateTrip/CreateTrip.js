import React, { useState } from "react";
import { addMarkerToDB } from "../../helpers/markerHelpers";
import { findCountryByName } from "../../helpers/countryHelpers";
import { connect } from "react-redux";
import { loadMarkers } from "../../actions/index";
import countries from "../../countries.json";
import classes from "./CreateTrip.module.css";
const CreateTrip = (props) => {
  const [selectedCountry, setSelectedCountry] = useState(
    countries[0].name.common
  );
  const addCountry = e => {
    e.preventDefault();
    let countryToAdd;
    findCountryByName(selectedCountry).then(snap => {
      if (snap.empty) {
        alert("That country does not exist");
      } else {
        countryToAdd = snap.docs[0].data();
        addMarkerToDB({
          name: countryToAdd.name.common,
          coords: { lat: countryToAdd.latlng[0], lng: countryToAdd.latlng[1] },
          countryRef: snap.docs[0].id
        }).then(() => {
          props.loadMarkers();
        });
      }
    });
  };
  const handleChange = e => {
    setSelectedCountry(e.target.value);
  };
  return (
    <div className={classes.FormContainer}>
      <form onSubmit={addCountry}>
        <label htmlFor="exampleSelect">Select A Country</label>
        <select value={selectedCountry} onChange={handleChange}>
          {countries.map((country, i) => {
            return (
              <option key={i} value={country.name.common}>
                {country.name.common}
              </option>
            );
          })}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadMarkers: () => {
      dispatch(loadMarkers());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip);

