import { rgba } from "polished";
import { breakpoints } from "./breakpoints";

const defaultColors = {
    primary: "#bc1e2e",
    secondary: "#125b31",
    white: "#ffffff",
    dark: "#19191b",
    black: "#000000",
    yellow: "#fedc5a",
    ash: "#413e65",
    green: "#77bf41",
    info: "#0e567c"
};

const colors = {
    primary: defaultColors.primary,
    secondary: defaultColors.secondary,
    light: defaultColors.white,
    lightShade: rgba(defaultColors.white, 0.75),
    dark: defaultColors.dark,
    darkShade: rgba(defaultColors.dark, 0.75),
    ash: defaultColors.ash,
    bg: defaultColors.white,
    border: rgba(defaultColors.ash, 0.115),
    shadow: rgba(defaultColors.ash, 0.175),
    shadowDark: '#0000007f',
    heading: defaultColors.dark,
    text: rgba(defaultColors.dark, 0.75),
    warning: defaultColors.yellow,
    success: defaultColors.green,
    info: defaultColors.info,
    lightgrey: 'rgba(0,0,0,0.52)',

    modes: {
        dark: {
            primary: defaultColors.primary,
            secondary: defaultColors.secondary,
            light: defaultColors.white,
            lightShade: rgba(defaultColors.white, 0.75),
            dark: defaultColors.dark,
            darkShade: rgba(defaultColors.dark, 0.75),
            ash: defaultColors.ash,
            bg: defaultColors.dark,
            border: rgba(defaultColors.ash, 0.115),
            shadow: rgba(defaultColors.ash, 0.175),
            heading: defaultColors.white,
            text: rgba(defaultColors.white, 0.75),
            warning: defaultColors.yellow,
            success: defaultColors.green,
            info: defaultColors.info
        }
    }
};

const theme = {
    initialColorModeName: "light",
    colors: colors,
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    breakpoints: [
        `${breakpoints.sm}px`,
        `${breakpoints.md}px`,
        `${breakpoints.lg}px`,
        `${breakpoints.xl}px`
    ]
};

export default theme;
