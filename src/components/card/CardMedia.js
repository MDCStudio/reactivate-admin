import React from 'react'
import { CardMedia as MuiCardMedia } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

export const styles = theme => ({})

const CardMedia = React.forwardRef(function CardMedia(props, ref) {
  return (
    <MuiCardMedia
      ref={ref}
      {...props}
    />
  )
})

export default withStyles(styles, { name: 'MdcsCardMedia' })(CardMedia)
