import {
    giphyKey
} from '../secrets';


export function generateUrl(theme) {
    const apiKey = giphyKey;
    const searchEndPoint = "https://api.giphy.com/v1/gifs/random?";
    let searchTerm = theme ? theme : 'puppies'
    console.log('ser', searchTerm);
    let url = `${searchEndPoint}&api_key=${apiKey}&q=${
        searchTerm
      }`;

    return url;
}