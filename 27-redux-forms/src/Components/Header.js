import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addWizard} from '../Redux/Actions'

class Header extends Component {

  handleClick = () => {
    this.props.addWizard({
      name: "HASHED POTATOS",
      house: "FLATIRON",
      redux: "WIZARDS"
    })
  }

  render() {
    return (
      <header className="App-header">
        <img src={"https://image.flaticon.com/icons/svg/135/135869.svg"} className="App-logo" alt="logo" />
        <p>Harry Potter of Redux</p>
        <button onClick={this.handleClick}>Add a Wizard!</button>
      </header>
    );
  }

}

export default connect(null, {addWizard})(Header);
