import React from 'react'
import Button from '../components/Button'
import { Button as MuiButton } from '@material-ui/core'

function ButtonsPage() {
  return (
    <>
      <div style={{ margin: 10 }}>
        {/* variant="text" */}
        <Button variant="text" color="success">
          Mdcs success
        </Button>
        <Button variant="text" color="info">
          Mdcs info
        </Button>
        <Button variant="text" color="warning">
          Mdcs warning
        </Button>
        <Button variant="text" color="danger">
          Mdcs danger
        </Button>
        <Button variant="text" color="primary">
          Mdcs primary
        </Button>
        <Button variant="text" color="secondary">
          Mdcs secondary
        </Button>
      </div>

      <div style={{ margin: 10 }}>
        {/* variant="outlined" */}
        <Button variant="outlined" color="success">
          Mdcs success
        </Button>
        <Button variant="outlined" color="info">
          Mdcs info
        </Button>
        <Button variant="outlined" color="warning">
          Mdcs warning
        </Button>
        <Button variant="outlined" color="danger">
          Mdcs danger
        </Button>
      </div>

      <div style={{ margin: 10 }}>
        {/* variant="contained" */}
        <Button variant="contained" color="success">
          Mdcs success
        </Button>
        <Button variant="contained" color="info">
          Mdcs info
        </Button>
        <Button variant="contained" color="warning">
          Mdcs warning
        </Button>
        <Button variant="contained" color="danger">
          Mdcs danger
        </Button>
      </div>

      <div style={{ margin: 10 }}>
        <MuiButton variant="text" color="primary">
          mui primary
        </MuiButton>
        <MuiButton variant="text" color="secondary">
          mui secondary
        </MuiButton>
        <MuiButton variant="text" color="info">
          mui info
        </MuiButton>
      </div>
    </>
  )
}

export default ButtonsPage
