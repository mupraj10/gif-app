import axios from 'axios';
import {
    generateUrl,
    randomUrl
} from '../utils/gifurl';

import {
    massageData
} from '../utils/massage';

// action types 
export const GET_NEW_GIF = 'GET_NEW_GIF';
export const SET_GIF_THEME = 'SET_GIF_THEME';
export const SET_GIF_LIST = 'SET_GIF_LIST';
export const FLIP = "FLIP";

// action creators 
const getNewGif = (gif) => ({
    type: GET_NEW_GIF,
    gif
})

export const setGifTheme = (theme) => ({
    type: SET_GIF_THEME,
    theme
})

export const setGifList = (list) => ({
    type: SET_GIF_LIST,
    list
})

export const flip = (data) => ({
    type: FLIP,
    data
})


// thunk creators 
export const fetchRandomGif = () =>
    dispatch =>
    axios.get(randomUrl)
    .then(res => res.data)
    .then(obj => dispatch(getNewGif(obj.data)))
    .then(err => console.log(err));

// changes the theme and then causes the gif set to load 

export const fetchGifList = (offset) =>
    (dispatch, getState) => {
        const theme = getState().gifReducer.theme;
        let url = generateUrl(theme, offset);
        axios.get(url)
            .then(res => res.data)
            .then(obj => dispatch(
                setGifList(massageData(obj.data))
            ))
            .then(err => console.log(err));
    }