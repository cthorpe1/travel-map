import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import image from "../../assets/images/locationIcon.svg";
import classes from "./Trip.module.css";
const Trip = props => {
  return (
    <>
      <Card className={classes.Trip}>
        <CardImg
          top
          width="100%"
          height="50"
          src={image}
          alt="No Image Uploaded"
        />
        <CardBody>
          <CardTitle>{props.details}</CardTitle>
        </CardBody>
      </Card>
    </>
  );
};

export default Trip;
