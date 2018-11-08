import {shuffle} from 'lodash/shuffle';
export function massageData(gifArr) {
    
    return gifArr.map((gif, i )=> {
        return {
            id: i,
            gif: gif.images.original.url,
            flipped: false
        }
    } )

}