import { createMuiTheme } from '@material-ui/core'

export const palette = {
  brand: {
    main: '#9D15E1',
    accent: '#E7357E',
    secondary: '#D809E6'
  },
  font: {
    main: '#32323',
    secondary: '#848484',
    light: '#E0E0E0'
  },
}

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: palette.brand.main },
    secondary: { main: palette.brand.secondary }
  },
  // typography: { },  // TODO: add nunito (https://fonts.google.com/specimen/Nunito) as primary font
  overrides: {
    // particular light theme overrides here
  }
})
