import {
    giphyKey
} from '../secrets';

const apiKey = giphyKey;
const searchEndPoint = "https://api.giphy.com/v1/gifs/search?";
const randomEndpoint = "https://api.giphy.com/v1/gifs/random?";
const rating = 'g';

const randomOffset = Math.floor(Math.random() * 50);

export function generateUrl(theme, offset) {

    let searchTerm = theme ? theme : 'puppies';
    offset = offset ? randomOffset : 0;
    let limit = 25;
    let url = `${searchEndPoint}&api_key=${apiKey}&q=${
        searchTerm}&limit=${limit}&offset=${offset}&rating=${rating}`;
    return url;
}

export const randomUrl = `${randomEndpoint}&rating=${rating}`