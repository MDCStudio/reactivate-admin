import React from 'react'
import MdcsButton from './components/Button'
import './Main.css'

import {Button} from '@material-ui/core'

function Main() {
  return (
    <div className="Main">
      {/* variant="text" */}
      <MdcsButton variant="text" color="success">
        Mdcs success
      </MdcsButton>
      <MdcsButton variant="text" color="info">
        Mdcs info
      </MdcsButton>
      <MdcsButton variant="text" color="warning">
        Mdcs warning
      </MdcsButton>
      <MdcsButton variant="text" color="danger">
        Mdcs danger
      </MdcsButton>

      {/* variant="outlined" */}
      <MdcsButton variant="outlined" color="success">
        Mdcs success
      </MdcsButton>
      <MdcsButton variant="outlined" color="info">
        Mdcs info
      </MdcsButton>
      <MdcsButton variant="outlined" color="warning">
        Mdcs warning
      </MdcsButton>
      <MdcsButton variant="outlined" color="danger">
        Mdcs danger
      </MdcsButton>

      {/* variant="contained" */}
      <MdcsButton variant="contained" color="success">
        Mdcs success
      </MdcsButton>
      <MdcsButton variant="contained" color="info">
        Mdcs info
      </MdcsButton>
      <MdcsButton variant="contained" color="warning">
        Mdcs warning
      </MdcsButton>
      <MdcsButton variant="contained" color="danger">
        Mdcs danger
      </MdcsButton>

      <MdcsButton variant="text" color="primary">
        Mdcs primary
      </MdcsButton>

      <Button variant="text" color="primary">
        mui primary
      </Button>
      <Button variant="text" color="secondary">
        mui secondary
      </Button>
      <Button variant="text" color="info">
        mui info
      </Button>
    </div>
  )
}

export default Main
