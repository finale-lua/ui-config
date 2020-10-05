const colors = {
    black: [0, 0, 0],
    white: [255, 255, 255],
    transparent: 'transparent',
    current: 'currentColor',
    primary: {
        default: [13, 100, 226],
        d: [0, 124, 255],
        50: [211, 233, 252],
        100: [179, 213, 248],
        200: [127, 185, 251],
        300: [68, 156, 253],
        400: [0, 126, 254],
        500: [13, 100, 226],
        600: [17, 79, 189],
        700: [15, 62, 157],
        800: [10, 46, 122],
        900: [1, 22, 77],
        d50: [1, 22, 78],
        d100: [7, 39, 107],
        d200: [14, 57, 146],
        d300: [17, 77, 184],
        d400: [13, 99, 224],
        d500: [0, 124, 255],
        d600: [58, 152, 253],
        d700: [111, 178, 254],
        d800: [161, 202, 248],
        d900: [213, 234, 252],
    },
    highlight: {
        default: [150, 64, 205],
        d: [171, 92, 219],
        50: [234, 228, 239],
        100: [218, 204, 229],
        200: [199, 171, 219],
        300: [183, 135, 215],
        400: [172, 95, 219],
        500: [150, 64, 205],
        600: [131, 28, 194],
        700: [108, 13, 159],
        800: [83, 14, 117],
        900: [42, 15, 55],
        d50: [43, 15, 57],
        d100: [72, 11, 100],
        d200: [100, 14, 146],
        d300: [129, 19, 192],
        d400: [149, 63, 204],
        d500: [171, 92, 219],
        d600: [182, 130, 215],
        d700: [195, 161, 217],
        d800: [210, 191, 224],
        d900: [235, 229, 240],
    },
    success: {
        default: [2, 125, 1],
        d: [30, 148, 23],
        50: [215, 236, 211],
        100: [177, 221, 167],
        200: [129, 198, 115],
        300: [76, 175, 64],
        400: [35, 150, 26],
        500: [2, 125, 1],
        600: [1, 102, 1],
        700: [3, 81, 1],
        800: [3, 62, 2],
        900: [3, 33, 2],
        d50: [3, 34, 2],
        d100: [2, 53, 1],
        d200: [3, 75, 2],
        d300: [1, 99, 1],
        d400: [2, 123, 1],
        d500: [30, 148, 23],
        d600: [70, 171, 58],
        d700: [116, 192, 102],
        d800: [157, 213, 144],
        d900: [216, 237, 214],
    },
    warning: {
        default: [175, 79, 17],
        d: [199, 101, 11],
        50: [255, 230, 121],
        100: [255, 202, 64],
        200: [238, 168, 0],
        300: [218, 135, 9],
        400: [200, 102, 11],
        500: [175, 79, 17],
        600: [139, 67, 25],
        700: [106, 55, 26],
        800: [79, 43, 23],
        900: [40, 24, 14],
        d50: [40, 24, 15],
        d100: [66, 37, 21],
        d200: [98, 52, 25],
        d300: [133, 65, 25],
        d400: [172, 78, 18],
        d500: [199, 101, 11],
        d600: [216, 131, 9],
        d700: [232, 161, 2],
        d800: [255, 186, 11],
        d900: [255, 232, 124],
    },
    error: {
        default: [216, 0, 11],
        d: [243, 49, 45],
        50: [252, 224, 220],
        100: [255, 195, 184],
        200: [255, 154, 140],
        300: [255, 106, 91],
        400: [244, 53, 48],
        500: [216, 0, 11],
        600: [176, 7, 15],
        700: [143, 6, 16],
        800: [111, 1, 13],
        900: [63, 0, 15],
        d50: [65, 0, 15],
        d100: [96, 1, 13],
        d200: [133, 4, 15],
        d300: [172, 7, 15],
        d400: [214, 0, 9],
        d500: [243, 49, 45],
        d600: [255, 99, 84],
        d700: [255, 142, 127],
        d800: [255, 180, 167],
        d900: [252, 226, 221],
    },
    gray: {
        default: [103, 106, 116],
        d: [125, 128, 136],
        50: [229, 230, 237],
        100: [208, 209, 217],
        200: [180, 181, 189],
        300: [152, 154, 163],
        400: [127, 129, 138],
        500: [103, 106, 116],
        600: [84, 87, 97],
        700: [66, 70, 79],
        800: [66, 70, 79],
        900: [23, 27, 37],
        d50: [23, 28, 37],
        d100: [41, 45, 54],
        d200: [60, 64, 73],
        d300: [81, 84, 94],
        d400: [103, 106, 115],
        d500: [125, 128, 136],
        d600: [148, 151, 159],
        d700: [172, 174, 182],
        d800: [197, 198, 205],
        d900: [230, 231, 238],
        10: [248, 248, 249],
        20: [243, 243, 244],
        30: [238, 238, 239],
        40: [233, 233, 235],
        60: [224, 225, 226],
        70: [220, 221, 223],
        80: [216, 217, 219],
        90: [213, 213, 216],
        110: [206, 207, 209],
        120: [202, 203, 206],
        130: [200, 201, 203],
        140: [196, 198, 200],
        150: [194, 195, 198],
        160: [191, 192, 195],
    },
    accent: {
        cyan: [17, 213, 239],
        magenta: [191, 64, 162],
        yellow: [255, 191, 23],
        green: [0, 217, 36],
        indigo: [98, 42, 255],
        blue: [14, 144, 219],
        pink: [133, 66, 86],
    },
}

const isColor = (color) => {
    return Array.isArray(color) || typeof color === 'string'
}
const getTailwindColor = (color) => {
    if (typeof color === 'string') return color
    const colorString = color.join(', ')
    return ({ opacityVariable, opacityValue }) => {
        if (typeof opacityValue !== 'undefined') return `rgba(${colorString}, ${opacityValue})`
        if (typeof opacityVariable !== 'undefined')
            return `rgba(${colorString}, var(${opacityVariable}, 1))`
        return `rgb(${colorString})`
    }
}
const createTailwindColors = (colors) => {
    const tailwindColors = {}
    for (const colorGroup in colors) {
        if (Object.prototype.hasOwnProperty.call(colors, colorGroup)) {
            const item = colors[colorGroup]
            if (isColor(item)) tailwindColors[colorGroup] = getTailwindColor(item)
            else tailwindColors[colorGroup] = createTailwindColors(item)
        }
    }
    return tailwindColors
}

module.exports = createTailwindColors(colors)