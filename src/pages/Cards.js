import React from 'react'
import { Card, CardHeader, CardContent, IconButton, Divider } from '@material-ui/core'
import Button from '../components/Button'
import MoreVertIcon from '@material-ui/icons/MoreVert'

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
      <Card>
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
      </Card>
    </>
  )
}

export default Cards
