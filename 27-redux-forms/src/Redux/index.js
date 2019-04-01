import wizardsArr from '../wizards'

const initialState = {
  wizards: wizardsArr
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_WIZARD":
      let nameIReceived = action.payload
      let filteredArray = state.wizards.filter(wizardObject => wizardObject.name !== nameIReceived)
      return {...state, wizards: filteredArray};
    case "ADD_WIZARD":
      let newWizard = action.payload
      let newArray = [newWizard, ...state.wizards]
      return {...state, wizards: newArray};
    default:
      return state
  }
}

export default reducer
