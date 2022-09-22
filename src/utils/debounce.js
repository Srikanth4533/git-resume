export function debounce(fn, delay) {
    let clearTime
    return function (...args) {
        if(clearTime) {
            clearTimeout(clearTime)
        }
        clearTime = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}