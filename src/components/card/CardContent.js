import React from 'react'
import { CardContent as MuiCardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

export const styles = theme => ({})

const CardContent = React.forwardRef(function CardContent(props, ref) {
  return (
    <MuiCardContent
      ref={ref}
      {...props}
    />
  )
})

export default withStyles(styles, { name: 'MdcsCardContent' })(CardContent)
