import React from 'react'
import WizardCard from './WizardCard'
import {connect} from 'react-redux'

class WizardDisplay extends React.Component{
  render(){

    return(
      <div>
        <h2>Welcome to the Wizarding World of Harry Potter!</h2>
        <ul>
          {this.props.wizards.map(wizardObject => <WizardCard key={wizardObject.name} wizard={wizardObject}/>)}
        </ul>
      </div>
    )
  }
}

// return value for MSTP is going to be merged as props
const mapStateToProps = (state) => {
  return {wizards: state.wizards}
}

let someFunction = connect(mapStateToProps)
let someComponent = someFunction(WizardDisplay)

export default someComponent
