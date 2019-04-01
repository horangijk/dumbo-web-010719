import React, { Component } from 'react';
import {connect} from 'react-redux'
import {removeWizard} from '../Redux/Actions'

class WizardCard extends Component {
  clickHandler = () => {
    // const {removeWizard, wizard} = this.props
    // removeWizard(wizard.name)
    // OR
    this.props.removeWizard(this.props.wizard.name)
  }

  render() {
    let {wizard} = this.props
    return (
      <div onClick={this.clickHandler}>
      <h6>{wizard.name}</h6>
        <p>
          {wizard.house} | {wizard.redux}
        </p>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeWizard: (name) => dispatch({type: "REMOVE_WIZARD", payload: name })
//   }
// }

export default connect(null, {removeWizard})(WizardCard);
