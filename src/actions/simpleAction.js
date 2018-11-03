import axios from 'axios';
import {
    giphyKey
} from '../secrets';


let apiKey = giphyKey;
let searchEndPoint = "https://api.giphy.com/v1/gifs/random?";
let searchTerm = 'superman'

let url = `${searchEndPoint}&api_key=${apiKey}&q=${
  searchTerm
}`;


// action types 
export const GET_NEW_GIF = 'GET_NEW_GIF';

// action creators 
export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })
}

const getNewGif = (gif) => ({
    type: GET_NEW_GIF,
    gif
})

// thunk creators 
export const fetchRandomGif = () =>
    dispatch =>
    axios.get(url)
    .then(res => res.data)
    .then(obj => dispatch(getNewGif(obj.data)))
    .then(err => console.log(err));