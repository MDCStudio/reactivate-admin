import React from 'react'
import clsx from 'clsx'
import { Button as MuiButton } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { capitalize } from '@material-ui/core/utils'
import { extraColors } from '../theme/theme.light';

const makeTextStyles = (color, theme) => ({
  [`text${capitalize(color)}`]: {
    color: theme.palette[color].main,
    '&:hover': {
      backgroundColor: fade(theme.palette[color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  }
})

const makeOutlinedStyles = (color, theme) => ({
  [`outlined${capitalize(color)}`]: {
    color: theme.palette[color].main,
    border: `1px solid ${fade(theme.palette[color].main, 0.5)}`,
    backgroundColor:
      theme.overrides.MuiButton.outlinedVariant.transparentBackground
      ? 'transparent'
      : fade(theme.palette[color].main, theme.palette.action.hoverOpacity),
    '&:hover': {
      border: `1px solid ${theme.palette[color].main}`,
      backgroundColor:
        theme.overrides.MuiButton.outlinedVariant.transparentBackground
        ? fade(theme.palette[color].main, theme.palette.action.hoverOpacity)
        : fade(theme.palette[color].main, theme.palette.action.hoverOpacity + 0.1),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  }
})

const makeContainedStyles = (color, theme) => ({
  [`contained${capitalize(color)}`]: {
    color: theme.palette[color].contrastText,
    backgroundColor: theme.palette[color].main,
    '&:hover': {
      backgroundColor: theme.palette[color].dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette[color].main,
      },
    },
  }
})

export const styles = theme => extraColors.reduce((stylesObject, color) =>  ({
  ...stylesObject,
  ...makeTextStyles(color, theme),
  ...makeOutlinedStyles(color, theme),
  ...makeContainedStyles(color, theme)
}), {})

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
