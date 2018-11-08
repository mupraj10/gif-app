import shuffle from 'lodash/shuffle';

export function massageData(gifArr) {
    const shuffledArr = shuffle(gifArr);
    return shuffledArr.map((gif, i) => {
        return {
            id: i,
            gif: gif.images.original.url,
            flipped: false
        }
    })
}