export function thousandSeparator (val){
    return val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : '0'
}

export const currencyValidation = (value) =>
    thousandSeparator(value) + ' ₸'

export const longNumberReducer = (num) => {
    if (num > 999 && num < 100000) {
        return thousandSeparator(num)
    } else if (num > 99999 && num < 1000000) {
        return (num / 1000).toFixed(0) + ' тыс.'
    } else if (num >= 1000000 && num < 1000000000) {
        return (num / 1000000).toFixed(0) + ' млн.'
    } else if (num >= 1000000000 && num < 1000000000000) {
        return (num / 1000000000) + ' млрд.'
    } else if (num >= 1000000000000) {
        return (num / 1000000000000) + ' трлн.'
    }
    return `${num}`
}