import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    margin: 5,
    padding: 10,
  },
}

const Message = ({ text, classes }) => {
  return (
    <Paper className={classes.root}>
      <Typography component="p">{text}</Typography>
      <Button>Response</Button>
    </Paper>
  )
}

export default withStyles(styles)(Message)
