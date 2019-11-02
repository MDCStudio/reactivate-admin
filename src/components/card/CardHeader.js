import React from 'react'
import clsx from 'clsx'
import { CardHeader as MuiCardHeader } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { capitalize } from '@material-ui/core/utils'
import { extraColors } from '../../theme/theme.light'

export const styles = theme => [...extraColors, 'primary', 'secondary'].reduce((stylesObject, color) =>  ({
  ...stylesObject,
  [`cardHeader${capitalize(color)}`]: {
    backgroundColor: theme.palette[color].main,
    color: theme.palette[color].contrastText
  },
}), {})

const CardHeader = React.forwardRef(function CardHeader(props, ref) {
  const { classes, className, color, ...other } = props

  return (
    <MuiCardHeader
      className={clsx(
        {
          [classes[`cardHeader${capitalize(color)}`]]: color
        },
        classes,
        className,
      )}
      ref={ref}
      {...other}
    />
  )
})

export default withStyles(styles, { name: 'MdcsCardHeader' })(CardHeader)
