import React from 'react'
import clsx from 'clsx'
import { Card as MuiCard } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { capitalize } from '@material-ui/core/utils'
import { extraColors } from '../../theme/theme.light'

export const styles = theme => [...extraColors, 'primary', 'secondary'].reduce((stylesObject, color) =>  ({
  ...stylesObject,
  [`color${capitalize(color)}`]: {
    backgroundColor: theme.palette[color].main,
    color: theme.palette[color].contrastText
  },
  [`accent${capitalize(color)}`]: {
    borderTop: `${theme.mdcs.card.accentWidth} solid ${theme.palette[color].main}`,
  },
}), {})

const Card = React.forwardRef(function Card(props, ref) {
  const { classes, className, color, accent, ...other } = props

  return (
    <MuiCard
      className={clsx(
        {
          [classes[`color${capitalize(color)}`]]: color,
          [classes[`accent${capitalize(accent)}`]]: accent
        },
        classes,
        className,
      )}
      ref={ref}
      {...other}
    />
  )
})

export default withStyles(styles, { name: 'MdcsCard' })(Card)
