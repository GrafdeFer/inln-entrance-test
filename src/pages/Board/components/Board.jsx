import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import NavigationDrawer from '../../../containers/NavigationDrawerContainer'
import ApplicationBar from '../../../containers/ApplicationBarContainer'
import MessagesList from '../../../components/MessagesList'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  messages: {
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 67px)',
    justifyContent: 'space-between',
  },
})

const Board = ({ classes, messages, receiver, authorized }) => {
  return (
    <div className={classes.root}>
      <ApplicationBar title="Стена" />
      <NavigationDrawer />
      <div className={classes.messages}>
        <div className={classes.toolbar} />
        <MessagesList
          messages={messages}
          receiver={receiver}
          authorized={authorized}
          all
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(Board)
