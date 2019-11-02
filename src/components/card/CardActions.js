import React from 'react'
import { CardActions as MuiCardActions } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

export const styles = theme => ({})

const CardActions = React.forwardRef(function CardActions(props, ref) {
  return (
    <MuiCardActions
      ref={ref}
      {...props}
    />
  )
})

export default withStyles(styles, { name: 'MdcsCardActions' })(CardActions)
