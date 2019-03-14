import React, { Component } from "react";
import RapCard from "./RapCard";
import Form from "./Form";
import Search from "./Search";
class RapContainer extends Component {
  // constructor() {
  //   super();
  //   this.state = { rappers: [], filteredRappers: [], searchTerm: "" };
  //   this.changeHandler = this.changeHandler.bind(this);
  // }
  state = {
    rappers: [],
    filteredRappers: [],
    searchTerm: ""
  };

  componentDidMount() {
    console.log("did mount");
    fetch("http://localhost:3005/rapperList")
      .then(resp => resp.json())
      .then(rappers =>
        this.setState({ rappers: rappers, filteredRappers: rappers })
      );
  }

  submitHandler = rapper => {
    this.setState({ rappers: [rapper, ...this.state.rappers] });
  };

  changeHandler = e => {
    let newArray = [...this.state.rappers];
    let otherArray = newArray.filter(rapper =>
      rapper.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    this.setState({
      filteredRappers: otherArray,
      searchTerm: e.target.value
    });
  };

  render() {
    let arrayOfRapCards = this.state.filteredRappers.map(rapperObj => (
      <RapCard key={rapperObj.name} rapper={rapperObj} />
    ));
    console.log("container array", arrayOfRapCards);
    return (
      <div>
        <Form submitHandler={this.submitHandler} />
        <br />
        <Search
          value={this.state.searchTerm}
          changeHandler={this.changeHandler}
        />
        <br />
        {this.state.rappers.length > 0 ? arrayOfRapCards : <h1>Loading</h1>}
      </div>
    );
  }
}

export default RapContainer;
