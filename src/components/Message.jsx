import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
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
  userInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 5,
    width: 25,
    height: 25,
  },
}

const Message = ({ message, classes, forYou }) => {
  return (
    <Paper className={forYou ? classes.forYou : classes.root}>
      <div className={classes.header}>
        <div className={classes.userInfo}>
          <Avatar
            className={classes.avatar}
            alt="Adelle Charles"
            src="https://cataas.com/cat"
          />
          <Typography variant="h6">{message.author}</Typography>
        </div>
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
