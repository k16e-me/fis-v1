export const _hue = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

    if (!result) throw new Error('Could not parse Hex Color')

    const
        rHex = parseInt(result[1], 16),
        gHex = parseInt(result[2], 16),
        bHex = parseInt(result[3], 16),
        r = rHex / 255,
        g = gHex / 255,
        b = bHex / 255,
        max = Math.max(r, g, b),
        min = Math.min(r, g, b)

    let hue = (max + min) / 2

    if (max === min) {
        // Achromatic
        return { hue: 0 }
    }

    const d = max - min

    switch (max) {
        case r:
            hue = (g - b) / d + (g < b ? 6 : 0)
        break
        case g:
            hue = (b - r) / d + 2
        break
        case b:
            hue = (r - g) / d + 4
        break
    }
    hue /= 6
    hue = Math.round(360 * hue)

    return { hue }
}