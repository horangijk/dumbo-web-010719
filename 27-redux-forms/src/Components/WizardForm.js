import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addWizard} from '../Redux/Actions'

class WizardForm extends Component {
  state = {
    name: "",
    house: "",
    redux: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newWizard = this.state
    this.props.addWizard(newWizard)
  }

  render() {
    let {name, house, redux} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
          <input type="text" name="name" value={name} onChange={this.handleChange}/>
        <label>
          House
        </label>
          <input type="text" name="house" value={house} onChange={this.handleChange}/>
        <label>
          Redux
        </label>
          <input type="text" name="redux" value={redux} onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    );
  }

}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addWizard: (newWizardObject) => dispatch({type:"ADD_WIZARD", payload: newWizardObject})
//   }
// }

export default connect(null, {addWizard})(WizardForm);
