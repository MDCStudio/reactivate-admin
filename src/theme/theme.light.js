import { createMuiTheme } from '@material-ui/core'
import { lighten, darken } from '@material-ui/core/styles/colorManipulator'

export const palette = {
  primary: '#3366ff',
  secondary: '#3366ff',  // TODO @fox: we need to set this to a different value
  success: '#00d68f',
  info: '#0095ff',
  warning: '#ffaa00',
  danger: '#ff3d71',
  basic: '#c5cee0'
}

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: palette.primary },
    secondary: { main: palette.secondary },
    success: {
      light: lighten(palette.success, .2),
      main: palette.success,
      dark: darken(palette.success, .2)
    },
    info: {
      light: lighten(palette.info, .2),
      main: palette.info,
      dark: darken(palette.info, .2)
    },
    warning: {
      light: lighten(palette.warning, .2),
      main: palette.warning,
      dark: darken(palette.warning, .2)
    },
    danger: {
      light: lighten(palette.danger, .2),
      main: palette.danger,
      dark: darken(palette.danger, .2)
    },
  },
  // typography: { },  // TODO: add nunito (https://fonts.google.com/specimen/Nunito) as primary font
  overrides: {
    // particular light theme overrides here
  }
})
