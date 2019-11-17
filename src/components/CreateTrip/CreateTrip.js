import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addMarkerToDB } from "../../helpers/markerHelpers";
import { findCountryByName } from "../../helpers/countryHelpers";
import countries from "../../countries.json";
import classes from "./CreateTrip.module.css";
const CreateTrip = () => {
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
        });
      }
    });
  };
  const handleChange = e => {
    setSelectedCountry(e.target.value);
  };
  return (
    <div className={classes.FormContainer}>
      <Form onSubmit={addCountry}>
        <FormGroup>
          <Label for="exampleSelect">Select A Country</Label>
          <Input
            type="select"
            name="select"
            value={selectedCountry}
            onChange={handleChange}
          >
            {countries.map((country, i) => {
              return (
                <option key={i} value={country.name.common}>
                  {country.name.common}
                </option>
              );
            })}
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default CreateTrip;
