export const primary = '#1f2833'
export const primaryDark = '#0b0c10'
export const secondary = '#67fcf1'
export const secondaryDark = '#4ca29f'
export const neutral = '#c5c6c7'

export const theme = {
  breakpoints: { 
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  global: {
    font: {
      family: 'Roboto',
    },
    colors: {
      'light-2': '#f5f5f5',
      'dark-1': primary,
      text: {
        'light': primaryDark,
        'dark': 'white',
      },
      primary: secondary,
    },
    edgeSize: {
      small: '14px',
    },
    elevation: {
      light: {
        medium: `
          0px 2px 4px -1px rgba(0, 0, 0, 0.2), 
          0px 4px 5px 0px rgba(0, 0, 0, 0.14), 
          0px 1px 10px 0px rgba(0, 0, 0, 0.12)
        `,
      },
    },
  },
  button: {
    border: {
      width: '1px',
      radius: '0px',
    },
    padding: {
      vertical: '8px',
      horizontal: '16px',
    },
  },
  checkBox: {
    border: {
      radius: "0px"
    }
  },
  layer: {
    border: {
      radius: "0px"
    }
  }
};