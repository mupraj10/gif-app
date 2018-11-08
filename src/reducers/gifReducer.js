import {
  GET_NEW_GIF,
  SET_GIF_THEME,
  SET_GIF_LIST,
  FLIP
} from '../actions/gif';

const initialState = {
  randomGif: {},
  theme: 'puppies',
  data: []
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
        data: action.list
      })
    case FLIP:
      return Object.assign({}, state, {
        data: action.data
      })

    default:
      return state
  }
}