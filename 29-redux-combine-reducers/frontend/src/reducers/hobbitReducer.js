// import hobbits from '../data/hobbit_data'

const initialState = {
  hobbits: [],
  selectedHobbit: {}
}

const reducer = (state = initialState, action) => {
  console.log('HOBBIT STATE: ', state, 'ACTION: ', action);
  switch (action.type) {

    case ('LOAD_HOBBITS'): {
      return { ...state, hobbits: action.payload }
    }

    case ('EDIT_HOBBIT'): {
      const newHobbits = state.hobbits.map(hob => {
        if(action.payload.id === hob.id){
          return { ...hob, ...action.payload }
        } else {
          return hob
        }
      })
      return { ...state, hobbits: newHobbits }

    }

    case ('SELECT_HOBBIT'): {
      return { ...state, selectedHobbit: action.payload }
    }

    default:
      return state
  }
}

export default reducer
