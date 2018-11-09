import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    margin: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forYou: {
    margin: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#b2d8b3',
  },
}

const Message = ({ message, classes, forYou }) => {
  return (
    <Paper className={forYou ? classes.forYou : classes.root}>
      <div className={classes.header}>
        <Typography variant="h6">{message.author}</Typography>
        <Typography variant="caption">{message.date}</Typography>
      </div>
      <Typography variant="headline">
        {message.receiver ? `${message.receiver}, ` : undefined}
        {message.text}
      </Typography>
    </Paper>
  )
}

export default withStyles(styles)(Message)
