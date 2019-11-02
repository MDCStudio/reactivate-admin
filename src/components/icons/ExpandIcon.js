import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  expand: {
    marginLeft: 'auto',         // TODO @fox: this enforces all usages to push the icon button to the right
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}))

function ExpandIcon({ onClick }) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = (event) => {
    setExpanded(!expanded)

    if (onClick) {
      onClick(event)
    }
  }

  return (
    <IconButton
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
      onClick={ handleExpandClick }
      aria-expanded={ expanded }
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </IconButton>
  )
}

export default ExpandIcon
