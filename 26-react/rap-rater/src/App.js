import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Error from "./Error";
import Title from "./Title";
import RapContainer from "./RapContainer";

class App extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div>
        <Switch>
          <Route path="/rappers" component={RapContainer} />
          <Route path="/home" render={() => <Home user={this.state.user} />} />
          <Route path="/error" component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
