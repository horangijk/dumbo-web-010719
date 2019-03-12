import React, { Component } from "react";
import "./App.css";
import RapContainer from "./RapContainer";

class App extends Component {
  render() {
    let name = "Hashed Potatoes";
    let otherName = "Frontend Freaks";
    return (
      <div>
        <RapContainer />
      </div>
    );
  }
}

export default App;
