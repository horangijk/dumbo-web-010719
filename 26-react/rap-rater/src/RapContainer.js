import React, { Component } from "react";
import RapCard from "./RapCard";
class RapContainer extends Component {
  state = {
    rappers: []
  };

  componentDidMount() {
    console.log("did mount");
    fetch("http://localhost:3005/rapperList")
      .then(resp => resp.json())
      .then(rappers => this.setState({ rappers }));
  }

  render() {
    let arrayOfRapCards = this.state.rappers.map(rapperObj => (
      <RapCard key={rapperObj.name} rapper={rapperObj} />
    ));
    console.log("container array", arrayOfRapCards);
    return (
      <div>
        {this.state.rappers.length > 0 ? arrayOfRapCards : <h1>Loading</h1>}
      </div>
    );
  }
}

export default RapContainer;
