export const primary = '#1f2833'
export const primaryDark = '#0b0c10'
export const secondary = '#67fcf1' //'#66fcf1'
export const secondaryDark = '#45a29e'
export const neutral = '#c5c6c7'

export const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
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