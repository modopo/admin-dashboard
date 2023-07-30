// color design token export
export const tokensDark = {
  black: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#d1d4d8",
    200: "#a4a8b1",
    300: "#767d89",
    400: "#495162",
    500: "#1b263b",
    600: "#161e2f",
    700: "#101723",
    800: "#0b0f18",
    900: "#05080c",
    1000: "#000000",
  },
  primary: {
    100: "#e4e8ee",
    200: "#c9d1dd",
    300: "#adbbcb",
    400: "#92a4ba",
    500: "#778da9",
    600: "#5f7187",
    700: "#475565",
    800: "#303844",
    900: "#181c22",
  },

  secondary: {
    50: "#f0f0f0",
    100: "#f9f9f8",
    200: "#f3f3f1",
    300: "#ecedeb",
    400: "#e6e7e4",
    500: "#e0e1dd",
    600: "#b3b4b1",
    700: "#868785",
    800: "#5a5a58",
    900: "#2d2d2c",
  },
};

function reverseTokens(tokens) {
  let reverseTokens = {};

  Object.entries(tokens).forEach(([key, val]) => {
    let keys = Object.keys(val);
    let values = Object.values(val);
    let length = keys.length;
    let reversedObj = {};

    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }

    tokens[(key = reversedObj)];
  });

  return tokens;
}

export const tokensLight = reverseTokens(tokensDark);

//mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            //palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.black,
              main: tokensDark.black[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            primary: {
              ...tokensLight.primary,
              main: tokensDark.black[50],
              light: tokensDark.black[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensDark.black,
              main: tokensDark.black[500],
            },
            background: {
              default: tokensDark.black[0],
              alt: tokensDark.black[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
