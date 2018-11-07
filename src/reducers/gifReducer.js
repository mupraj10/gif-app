import {
  GET_NEW_GIF,
  SET_GIF_THEME,
  SET_GIF_LIST
} from '../actions/gif';

const initialState = {
  randomGif: {},
  theme: 'puppies',
  gifSet: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_GIF:
      return Object.assign({}, state, {
        randomGif: action.gif
      })
    case SET_GIF_THEME:
      return Object.assign({}, state, {
        theme: action.theme
      })
    case SET_GIF_LIST:
      return Object.assign({}, state, {
        gifSet: action.list
      })
    default:
      return state
  }
}