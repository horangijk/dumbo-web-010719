// import hogs from '../data/porkers_data'


const initialState = []


const hogReducer = (hogState = initialState, action) => {
    console.log('HOG STATE: ', hogState, 'ACTION: ', action);
  switch(action.type) {
    case ('LOAD_HOGS'): {
      return action.payload
    }

    case('REMOVE_HOG'): {
      return hogState.filter(hog => hog.id !== action.payload)
    }

    // case ('LOAD_HOBBITS'):
    //   return 'hee hee hee i am in the hog reducer with some hobbits'
    default:
      return hogState
  }
}

export default hogReducer
