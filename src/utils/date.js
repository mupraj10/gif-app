export function getDate(title) {
    let date = Number(title.replace(/griditem-/gi, ''));
    return date + 1;
}