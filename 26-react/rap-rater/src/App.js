import React, { Component } from "react";
import "./App.css";
import Header from "./Header";

class App extends Component {
  render() {
    let name = "Hashed Potatoes";
    let otherName = "Frontend Freaks";
    return (
      <div>
        <Header name={name} />
        <Header name={otherName} />
      </div>
    );
  }
}

export default App;
