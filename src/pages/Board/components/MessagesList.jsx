import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Message from '../../../components/Message'

const styles = {
  root: {
    marginTop: 60,
  },
}

const renderMessages = messages => {
  return messages.map(message => (
    <Message key={message.text} text={message.text} />
  ))
}

const MessagesList = ({ messages, classes }) => {
  return <div className={classes.root}>{renderMessages(messages)}</div>
}

export default withStyles(styles)(MessagesList)
