import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MessengerContainer from './MessengerContainer'
import NavigationDrawer from '../../../containers/NavigationDrawerContainer'
import ApplicationBar from '../../../containers/ApplicationBarContainer'

const styles = {
  root: {
    display: 'flex',
  },
}

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <ApplicationBar title="Написать сообщение" />
      <NavigationDrawer />
      <MessengerContainer />
    </div>
  )
}

export default withStyles(styles)(Home)
