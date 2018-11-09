import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MsgSenderContainer from './MsgSenderContainer'
import NavigationDrawer from '../../../components/NavigationDrawer'
import ApplicationBar from '../../../components/ApplicationBar'

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
      <MsgSenderContainer />
    </div>
  )
}

export default withStyles(styles)(Home)
