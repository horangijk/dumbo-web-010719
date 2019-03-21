import React from "react";
import { Redirect } from "react-router-dom";

const Home = props => {
  return (
    <div>
      {Object.keys(props.user).length > 0 ? (
        <Redirect to="/rappers" />
      ) : (
        <h1>No User</h1>
      )}
    </div>
  );
};

export default Home;
