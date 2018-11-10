import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 5px',
  },
}

const Paginate = ({ classes, next, prev, current }) => {
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={prev}>
        Сюда
      </Button>
      {current}
      <Button variant="contained" color="primary" onClick={next}>
        Туда
      </Button>
    </div>
  )
}

export default withStyles(styles)(Paginate)
