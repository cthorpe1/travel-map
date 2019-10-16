import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import classes from "./AddCityForm.module.css";
const AddCityForm = () => {
  const addCity = e => {
    e.preventDefault();
    alert("Adding");
  };
  return (
    <div className={classes.Container}>
      <div className={classes.backContainer}>
        <a className={classes.backLink}>
          <i className="fa fa-arrow-left" />
        </a>
      </div>
      <h4>Add A City</h4>
      <Form onSubmit={addCity}>
        <FormGroup>
          <Label for="cityName">City Name</Label>
          <Input type="text" id="cityName" required></Input>
        </FormGroup>
        <FormGroup>
          <Label for="thumbnail">Thumbnail</Label>
          <Input type="file" id="thumbnail"></Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default AddCityForm;
