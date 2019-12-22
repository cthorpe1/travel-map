import React from "react";
import { connect } from "react-redux";

const UserContainersGrid = props => {
    return (
      <div className={classes.UserContainersGrid}>
        {props.containers.map((container, i) => {
          return <UserContainer key={i} />;
        })}
      </div>
    );
  };

  const mapStateToProps = state => {
    return {
      containers: state.userContainersReducer.containers
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
     
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(UserContainersGrid);