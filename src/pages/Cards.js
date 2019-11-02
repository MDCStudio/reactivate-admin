import React from 'react'
import { IconButton, Divider } from '@material-ui/core'
import { Card, CardHeader, CardContent, CardActions } from '../components/card'
import Button from '../components/Button'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ExpandIcon from '../components/icons/ExpandIcon'

function CardSubheader({ children }) {
  return (
    <div style={{
        display: 'flex',
        // padding: 16,
        flexWrap: 'wrap',
        flex: 1,
        // backgroundColor: '#f7f9fc',
        justifyContent: 'space-between',
        padding: '1.5rem 4rem 1rem',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderLeft: 'none',
        borderRight: 'none',
      }}>
      {children}
    </div>
  )
}

function Cards() {
  return (
    <>
      <div>Cards page</div>
      <Card color="success" accent="danger" >
        <CardContent>card content 1</CardContent>
        <CardHeader
          color="primary"
          // avatar={
          //   <Avatar aria-label="recipe" className={classes.avatar}>
          //     R
          //   </Avatar>
          // }
          action={
            <>
              <Button variant="text" color="warning">warning btn</Button>
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            </>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />

        <Divider />

        <CardContent>card content 2</CardContent>

        <CardSubheader>
          children
        </CardSubheader>

        <CardContent>card content 3</CardContent>

        <CardActions>
          <ExpandIcon></ExpandIcon>
        </CardActions>

        <CardContent>card content 4</CardContent>
      </Card>
    </>
  )
}

export default Cards
