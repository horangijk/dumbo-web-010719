import React from "react";
import { Redirect } from "react-router-dom";
const Home = props => {
  console.log(props.user);
  return (
    <div>
      {Object.keys(props.user).length > 0 ? (
        <h1>Home</h1>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Home;
