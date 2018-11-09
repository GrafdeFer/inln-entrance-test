import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Message from '../../../components/Message'

const styles = theme => ({
  root: {
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
})

const renderMessages = (messages, receiver) => {
  return messages.map(message => {
    if (isMessageForYou(message.receiver, receiver)) {
      return <Message key={message.date} message={message} forYou />
    } else {
      return <Message key={message.date} message={message} />
    }
  })
}

const isMessageForYou = (receiver, user) => (receiver === user ? true : false)

const MessagesList = ({ classes, messages, receiver }) => {
  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <div>{renderMessages(messages, receiver)}</div>
    </div>
  )
}

export default withStyles(styles)(MessagesList)
