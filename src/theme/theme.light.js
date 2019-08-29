import { createMuiTheme } from '@material-ui/core'

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
    success: { main: palette.success },
    info: { main: palette.info },
    warning: { main: palette.warning },
    danger: { main: palette.danger },
  },
  // typography: { },  // TODO: add nunito (https://fonts.google.com/specimen/Nunito) as primary font
  overrides: {
    // particular light theme overrides here
  }
})
