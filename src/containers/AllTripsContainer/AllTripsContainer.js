import React from "react";
import { connect } from "react-redux";
import { setActiveMarker } from "../../actions/index";
import Trip from "../../components/Trip/Trip";
import classes from "./AllTripsContainer.module.css";
const AllTripsContainer = props => {
  return (
    <div className={classes.AllTripsContainer}>
      {props.trips.map((trip, i) => {
        return <Trip key={i} details={trip} setActiveMarker={props.setActiveMarker}/>;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeMarker: state.markersReducer.activeMarker
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveMarker: countryRef => {
      dispatch(setActiveMarker(countryRef));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllTripsContainer);
