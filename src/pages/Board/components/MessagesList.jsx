import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Message from '../../../components/MessageContainer'

const styles = theme => ({
  root: {
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
})

const renderMessages = (messages, receiver, authorized) => {
  return messages.map(message => {
    if (isMessageForYou(message.receiver, receiver)) {
      return (
        <Message
          key={message.date}
          message={message}
          authorized={authorized}
          forYou
          author={receiver}
        />
      )
    } else {
      return (
        <Message key={message.date} message={message} authorized={authorized} />
      )
    }
  })
}

const isMessageForYou = (receiver, user) => (receiver === user ? true : false)

const MessagesList = ({ classes, messages, receiver, authorized }) => {
  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <div>{renderMessages(messages, receiver, authorized)}</div>
    </div>
  )
}

export default withStyles(styles)(MessagesList)
