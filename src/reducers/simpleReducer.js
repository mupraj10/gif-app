import {
  GET_NEW_GIF
} from '../actions/simpleAction';

const initialState = {
  randomGif: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_GIF:
      return Object.assign({}, state, {
        randomGif: action.gif
      })
    default:
      return state
  }
}