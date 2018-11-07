import {
  GET_NEW_GIF,
  SET_GIF_THEME
} from '../actions/gif';

const initialState = {
  randomGif: {},
  theme: 'puppies'
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

    default:
      return state
  }
}