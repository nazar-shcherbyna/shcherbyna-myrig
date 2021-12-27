export const getNumbFromStr = (ibs) => {
    return `${parseInt(ibs.replace(/[^\d]/g, ''))}`.split('')
}