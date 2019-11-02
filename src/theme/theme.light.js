import { createMuiTheme } from '@material-ui/core'
import { lighten, darken } from '@material-ui/core/styles/colorManipulator'

export const extraColors = ['success', 'info', 'warning', 'danger']

// TODO @fox: should add validations if extra colors exist which do not have values defined in the palette object or in the theme object

export const palette = {
  primary: {
    main: '#3366ff'
  },
  secondary: {
    main: '#2196f3',  // TODO @fox: we need to set this to a different value
  },
  error: {
    light: "#e57373",
    main: "#f44336",
    dark: "#d32f2f",
    contrastText: "#fff",
  },
  success: '#00d68f',
  info: '#0095ff',
  warning: '#ffaa00',
  danger: '#ff3d71',
  basic: '#c5cee0',
  background: '#edf1f7'
}

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: palette.primary,
    secondary: palette.secondary,
    error: palette.error,
    success: {
      light: lighten(palette.success, .2),
      main: palette.success,
      dark: darken(palette.success, .2),
      contrastText: 'white',
    },
    info: {
      light: lighten(palette.info, .2),
      main: palette.info,
      dark: darken(palette.info, .2),
      contrastText: 'white',
    },
    warning: {
      light: lighten(palette.warning, .2),
      main: palette.warning,
      dark: darken(palette.warning, .2),
      contrastText: 'white',
    },
    danger: {
      light: lighten(palette.danger, .2),
      main: palette.danger,
      dark: darken(palette.danger, .2),
      contrastText: 'white',
    },
    background: {
      light: lighten(palette.background, .2),
      main: palette.background,
      dark: darken(palette.background, .2),
      // paper: '#00d68f',
      // default: 'red',
    }
  },
  // typography: { },  // TODO: add nunito (https://fonts.google.com/specimen/Nunito) as primary font
  shape: {
    borderRadius: 3,
  },
})

lightTheme.overrides = {
  // particular light theme overrides here
  MuiButton: {
    root: {
      // borderRadius: 3,
      margin: 5
    },
    contained: {
      // color: theme.palette.getContrastText(theme.palette.grey[300]),
      // backgroundColor: theme.palette.grey[300],
      boxShadow: lightTheme.shadows[0],
      '&:hover': {
        // backgroundColor: theme.palette.grey.A100,
        boxShadow: lightTheme.shadows[2],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: lightTheme.shadows[0],
          // backgroundColor: theme.palette.grey[300],
        },
        '&$disabled': {
          // backgroundColor: theme.palette.action.disabledBackground,
        },
      },
      '&$focusVisible': {
        boxShadow: lightTheme.shadows[4],
      },
      '&:active': {
        boxShadow: lightTheme.shadows[6],
      },
      '&$disabled': {
        // color: theme.palette.action.disabled,
        boxShadow: lightTheme.shadows[0],
        // backgroundColor: theme.palette.action.disabledBackground,
      },
    },
    outlinedVariant: {
      transparentBackground: false
    }
  }
}

export default lightTheme
