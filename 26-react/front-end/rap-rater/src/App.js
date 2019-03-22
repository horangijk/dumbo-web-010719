import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import RapContainer from "./containers/RapContainer";

class App extends Component {
  state = {
    user: {}
  };

  componentDidMount = () => {
    let token = localStorage.token;
    token
      ? fetch("http://localhost:3000/api/v1/current_user", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            accepts: "application/json",
            Authorization: `${token}`
          }
        })
          .then(resp => resp.json())
          .then(user => {
            this.setState({ user }, () => {
              console.log(user);
              this.props.history.push("/rappers");
            });
          })
      : this.props.history.push("/signup");
  };

  signupSubmitHandler = userInfo => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(userData => {
        this.setState({ user: userData.user }, () => {
          localStorage.setItem("token", userData.jwt);
          this.props.history.push("/rappers");
        });
      });
  };
  loginSubmitHandler = userInfo => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(
        userData => this.setState({ user: userData.user }),
        () => this.props.history.push("/rappers")
      );
  };
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            path="/rappers"
            render={() => <RapContainer user={this.state.user} />}
          />
          <Route
            path="/signup"
            render={() => <Signup submitHandler={this.signupSubmitHandler} />}
          />
          <Route
            path="/login"
            render={() => <Login submitHandler={this.loginSubmitHandler} />}
          />
          <Route path="/home" render={() => <Home user={this.state.user} />} />
          <Route path="/" component={Error} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
