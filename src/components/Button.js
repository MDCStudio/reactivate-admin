import React from 'react'
import clsx from 'clsx'
import { Button as MuiButton } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'

const makeTextStyles = (style, theme) => (
  {[`text${style.charAt(0).toUpperCase() + style.slice(1)}`]: {
    color: theme.palette[style].main,
    '&:hover': {
      backgroundColor: fade(theme.palette[style].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  }
})

const makeOutlinedStyles = (style, theme) => (
  {[`outlined${style.charAt(0).toUpperCase() + style.slice(1)}`]: {
    color: theme.palette[style].main,
    border: `1px solid ${fade(theme.palette[style].main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette[style].main}`,
      backgroundColor: fade(theme.palette[style].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  }
})

const makeContainedStyles = (style, theme) => (
  {[`contained${style.charAt(0).toUpperCase() + style.slice(1)}`]: {
    color: theme.palette[style].contrastText,
    backgroundColor: theme.palette[style].main,
    '&:hover': {
      backgroundColor: theme.palette[style].dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette[style].main,
      },
    },
  }
})

export const styles = theme => ({
  ...makeTextStyles('success', theme),
  ...makeTextStyles('info', theme),
  ...makeTextStyles('warning', theme),
  ...makeTextStyles('danger', theme),

  ...makeOutlinedStyles('success', theme),
  ...makeOutlinedStyles('info', theme),
  ...makeOutlinedStyles('warning', theme),
  ...makeOutlinedStyles('danger', theme),

  ...makeContainedStyles('success', theme),
  ...makeContainedStyles('info', theme),
  ...makeContainedStyles('warning', theme),
  ...makeContainedStyles('danger', theme),
})

const Button = React.forwardRef(function Button(props, ref) {
  const {
    children,
    classes,
    className: classNameProp,
    color = 'default',
    variant = 'text',
  } = props

  const text = variant === 'text'
  const outlined = variant === 'outlined'
  const contained = variant === 'contained'
  const success = color === 'success'
  const info = color === 'info'
  const warning = color === 'warning'
  const danger = color === 'danger'

  const className = clsx({
    [classes.textSuccess]: text && success,
    [classes.textInfo]: text && info,
    [classes.textWarning]: text && warning,
    [classes.textDanger]: text && danger,
    [classes.outlinedSuccess]: outlined && success,
    [classes.outlinedInfo]: outlined && info,
    [classes.outlinedWarning]: outlined && warning,
    [classes.outlinedDanger]: outlined && danger,
    [classes.containedSuccess]: contained && success,
    [classes.containedInfo]: contained && info,
    [classes.containedWarning]: contained && warning,
    [classes.containedDanger]: contained && danger,
  }, classNameProp)

  return (
    <MuiButton
      className={className}
      ref={ref}
      {...props}
    >
      {children}
    </MuiButton>
  )
})

export default withStyles(styles, { name: 'MdcsButton' })(Button)
