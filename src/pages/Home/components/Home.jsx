import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MessengerContainer from './MessengerContainer'
import NavigationDrawer from '../../../components/NavigationDrawerContainer'
import ApplicationBar from '../../../components/ApplicationBarContainer'

const styles = {
  root: {
    display: 'flex',
  },
}

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <ApplicationBar />
      <NavigationDrawer />
      <MessengerContainer />
    </div>
  )
}

export default withStyles(styles)(Home)
