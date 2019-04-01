export const addWizard = (newWizardObject) => {
  return {type:"ADD_WIZARD", payload: newWizardObject}
}

export const removeWizard = (name) => {
  return {type:"REMOVE_WIZARD", payload: name}
}
