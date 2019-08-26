import { createMuiTheme } from '@material-ui/core'

export const palette = {
  primary: '#3366ff',
  succeess: '#00d68f',
  info: '#0095ff',
  warning: '#ffaa00',
  danger: '#ff3d71',
  basic: '#c5cee0'
}

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    // primary: { main: palette.brand.main },
    // secondary: { main: palette.brand.secondary }
  },
  // typography: { },  // TODO: add nunito (https://fonts.google.com/specimen/Nunito) as primary font
  overrides: {
    // particular light theme overrides here
  }
})
