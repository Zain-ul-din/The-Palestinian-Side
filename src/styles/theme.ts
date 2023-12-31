import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const colors = {
    gray: {
        '50': '#F2F2F2',
        '100': '#DBDBDB',
        '200': '#C4C4C4',
        '300': '#ADADAD',
        '400': '#969696',
        '500': '#808080',
        '600': '#666666',
        '700': '#4D4D4D',
        '800': '#333333',
        '900': '#1A1A1A'
    },
    red: {
        '50': '#F2F2F2',
        '100': '#DBDBDB',
        '200': '#C4C4C4',
        '300': '#ADADAD',
        '400': '#969696',
        '500': '#808080',
        '600': '#666666',
        '700': '#4D4D4D',
        '800': '#333333',
        '900': '#1A1A1A'
    },
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
    },
    primary: {
        50: "#f0f5ff",
        100: "#dfebf7",
        200: "#add5f3",
        300: "#7abef3",
        400: "#599ff2",
        500: "#4285f4",
        600: "#3469e1",
        700: "#2a4bb3",
        800: "#1c3667",
        900: "#0e1b33",
    }
};

export const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: false,
}

const theme = extendTheme({ config, colors })
export default theme;

