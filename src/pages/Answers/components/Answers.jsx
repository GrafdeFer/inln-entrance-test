import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import NavigationDrawer from '../../../components/NavigationDrawerContainer'
import ApplicationBar from '../../../components/ApplicationBarContainer'
import Message from '../../../components/Message'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  messages: {
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
})

const renderMessages = (messages, receiver) => {
  return messages.map(message => {
    if (isMessageForYou(message.receiver, receiver)) {
      return <Message key={message.date} message={message} />
    }
  })
}

const isMessageForYou = (receiver, user) => (receiver === user ? true : false)

const Answers = ({ classes, messages, receiver }) => {
  return (
    <div className={classes.root}>
      <ApplicationBar />
      <NavigationDrawer />
      <div className={classes.messages}>
        <div className={classes.toolbar} />
        <div>{renderMessages(messages, receiver)}</div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Answers)
