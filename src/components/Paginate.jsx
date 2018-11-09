import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
}

const Paginate = ({ classes, next, prev, current }) => {
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={prev}>
        Prev
      </Button>
      {current}
      <Button variant="contained" color="primary" onClick={next}>
        Next
      </Button>
    </div>
  )
}

export default withStyles(styles)(Paginate)
