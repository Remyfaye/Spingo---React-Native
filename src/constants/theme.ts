interface Color {
    primary: string;
    gray: string;
    black: string;
    white: string;
    spinGray: string;
    spinBlack: string;
}

export const COLORS: Color = {
    primary: '#00A6FB',
    gray: '#CACACA',
    spinBlack: '#3B3B3B',
    white: '#FFFFFF',
    black: "#000000",
    spinGray: '#7B7B7B',
};

interface FontSize {
    size_8: number;
    size_10: number;
    size_12: number;
    size_14: number;
    size_16: number;
    size_18: number;
    size_20: number;
    size_24: number;
    size_28: number;
    size_30: number;
}

export const FONTSIZE: FontSize = {
    size_8: 8,
    size_10: 10,
    size_12: 12,
    size_14: 14,
    size_16: 16,
    size_18: 18,
    size_20: 20,
    size_24: 24,
    size_28: 28,
    size_30: 30,
};

interface BorderRadius {
    radius_4: number;
    radius_8: number;
    radius_10: number;
    radius_15: number;
    radius_20: number;
    radius_25: number;
}

export const BORDERRADIUS: BorderRadius = {
    radius_4: 4,
    radius_8: 8,
    radius_10: 10,
    radius_15: 15,
    radius_20: 20,
    radius_25: 25,
};

export const shadows = {
    light: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 10,
            height: 5,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    medium: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    dark: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.56,
        shadowRadius: 9.11,

        elevation: 18,
    },
};