import axios from 'axios';
import {
    generateUrl
} from '../utils/gifurl';


// action types 
export const GET_NEW_GIF = 'GET_NEW_GIF';
export const SET_GIF_THEME = 'SET_GIF_THEME';


// action creators 
const getNewGif = (gif) => ({
    type: GET_NEW_GIF,
    gif
})

export const setGifTheme = (theme) => ({
    type: SET_GIF_THEME,
    theme
})

// thunk creators 
export const fetchRandomGif = () =>
    (dispatch, getState) => {
        const theme = getState().gifReducer.theme;
        console.log(theme);
        let url = generateUrl(theme);
        axios.get(url)
            .then(res => res.data)
            .then(obj => dispatch(getNewGif(obj.data)))
            .then(err => console.log(err));
    }