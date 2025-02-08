// Selectors
const _body = () => document.body
const _q = (selector, parent) => (parent ? parent : document).querySelector(selector)
const _ql = (selector, parent) => Array.from((parent ? parent : document).querySelectorAll(selector))
const _transition = () => new Array('transition', 'duration-200', 'ease-out')
const _even = n => n % 2 == 0
const _odd = n => Math.abs(n % 2) == 1
const _capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
const _empty = value => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    )
}


// Exports
export {
    _body, _q, _ql, _transition, _even, _odd, _capitalize, _empty
}