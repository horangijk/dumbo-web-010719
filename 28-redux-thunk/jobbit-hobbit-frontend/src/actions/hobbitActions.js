// HOBBIT ACTION CREATOR

export const selectHobbit = (hobbit) => ({ type: 'SELECT_HOBBIT', payload: hobbit })
const editHobbit = (hobbit) => ({ type: 'EDIT_HOBBIT', payload: hobbit })
const loadHobbits = (hobbits) => ({ type: 'LOAD_HOBBITS', payload: hobbits })


// HOBBIT THUNK CREATOR

export const updateHobbit = (hobbit) => {
  return dispatch => {
    return fetch(`http://localhost:3001/hobbits/${hobbit.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: "PATCH",
      body: JSON.stringify(hobbit)
    })
      .then(r => r.json())
      .then(res => dispatch(editHobbit(res)))
      .catch(console.error)
  }
}


export const getHobbits = () => (dispatch) => {
  return fetch('http://localhost:3001/hobbits')
    .then(r => r.json())
    .then(res => console.log(res) || dispatch(loadHobbits(res)))
}
