import React from 'react'
import clsx from 'clsx'
import { Radio as MuiRadio } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { capitalize } from '@material-ui/core/utils'
import { extraColors } from '../theme/theme.light';

const makeColorStyles = (color, theme) => ({
  [`color${capitalize(color)}`]: {
    color: theme.palette[color].main,
    '&:hover': {
      backgroundColor: fade(theme.palette[color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&$checked': {
      color: theme.palette[color].main,
      '&:hover': {
        backgroundColor: fade(theme.palette[color].main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
    },
  },
})

export const styles = theme => extraColors.reduce((stylesObject, color) =>  ({
  ...stylesObject,
  ...makeColorStyles(color, theme),
}), {})

const Radio = React.forwardRef(function Radio(props, ref) {
  const {
    classes,
    className: classNameProp,
    color = 'default',
  } = props

  return (
    <MuiRadio
      className={clsx(classes[`color${capitalize(color)}`], classNameProp)}
      color={color}
      ref={ref}
      {...props}
    />
  )
})

export default withStyles(styles, { name: 'MdcsRadio' })(Radio)
