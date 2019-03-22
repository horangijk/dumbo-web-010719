import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import RapCard from "../components/RapCard";
import Form from "../components/Form";
import Search from "../components/Search";
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
    Object.keys(this.props.user).length > 0
      ? fetch("http://localhost:4000/rapperList")
          .then(resp => resp.json())
          .then(rappers =>
            this.setState({ rappers: rappers, filteredRappers: rappers })
          )
      : this.props.history.push("/login");
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
    return (
      <div>
        {Object.keys(this.props.user).length > 0 ? (
          <Switch>
            <Route
              path="/rappers/:name"
              render={renderProps => {
                console.log("render props", renderProps);
                renderProps.history.push("/home");
                let name = renderProps.match.params.name;
                let rapper = this.state.rappers.find(
                  rapper => rapper.name.toLowerCase() === name.toLowerCase()
                );
                console.log("render rapper", rapper);
                return <RapCard rapper={rapper} />;
              }}
            />

            <Route
              path="/rappers"
              render={() => {
                let arrayOfRapCards = this.state.filteredRappers.map(
                  rapperObj => (
                    <RapCard key={rapperObj.name} rapper={rapperObj} />
                  )
                );
                return (
                  <div>
                    <Form submitHandler={this.submitHandler} />
                    <br />
                    <Search
                      value={this.state.searchTerm}
                      changeHandler={this.changeHandler}
                    />
                    <br />
                    {this.state.rappers.length > 0 ? (
                      arrayOfRapCards
                    ) : (
                      <h1>Loading</h1>
                    )}
                  </div>
                );
              }}
            />
          </Switch>
        ) : null}
      </div>
    );
  }
}

export default withRouter(RapContainer);
