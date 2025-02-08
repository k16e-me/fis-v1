import { _hue } from '../lib/hue'

export const _shade = (hex) => {
    const
        { hue } = _hue(hex),
        lightest = () => `hsl(${hue}, 42%, 96%)`,
        pastel = () => `hsl(${hue}, 96%, 93%)`,
        light = () => `hsl(${hue}, 38%, 56%)`,
        dark = () => `hsl(${hue - 1}, 83%, 14%)`

    return {
        lightest,
        pastel,
        light,
        dark
    }
}