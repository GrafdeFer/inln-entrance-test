import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import NavigationDrawer from '../../../components/NavigationDrawer'
import ApplicationBar from '../../../components/ApplicationBar'
import MessagesListContainer from './MessagesListContainer'

const styles = {
  root: {
    display: 'flex',
  },
}

const Board = ({ classes }) => {
  return (
    <div className={classes.root}>
      <ApplicationBar />
      <NavigationDrawer />
      <MessagesListContainer />
    </div>
  )
}

export default withStyles(styles)(Board)
