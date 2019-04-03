// HOG ACTION CREATORS

const loadHogs = (hogs) => ({ type: 'LOAD_HOGS', payload: hogs })
export const removeHog = (id) => ({ type: 'REMOVE_HOG', payload: id  })


// HOG THUNK CREATORS

export const getHogs = () => {
  return (dispatch) => {
    return fetch('http://localhost:3001/hogs')
      .then(r => r.json())
      .then(res => dispatch(loadHogs(res)))
  }
}
