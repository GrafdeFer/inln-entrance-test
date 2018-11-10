import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Message from '../containers/MessageContainer'
import Paginate from './Paginate'

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 67px)',
    justifyContent: 'space-between',
  },
})

class MessagesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      rows: 7,
    }
  }

  nextPage = total => {
    const { currentPage, rows } = this.state
    const next = currentPage + 1
    const count = Math.ceil(total / rows)
    if (next <= count) {
      this.setState({
        currentPage: next,
      })
    }
  }

  prevPage = () => {
    const { currentPage } = this.state
    const next = currentPage - 1
    if (next >= 1) {
      this.setState({
        currentPage: next,
      })
    }
  }

  paginate(array, total, current) {
    --current
    return array.slice(current * total, (current + 1) * total)
  }

  getAllMessages = (messages, receiver, authorized) => {
    const { currentPage, rows } = this.state
    return this.paginate(messages, rows, currentPage).map(message => {
      if (this.isUsersMessage(message.receiver, receiver)) {
        return (
          <Message
            key={message.text}
            message={message}
            authorized={authorized}
            forYou
            author={receiver}
          />
        )
      } else {
        return (
          <Message
            key={message.text}
            message={message}
            authorized={authorized}
            author={receiver}
          />
        )
      }
    })
  }

  getUserMessages = (messages, receiver, authorized) => {
    const { currentPage, rows } = this.state
    const result = messages.filter(message =>
      this.isUsersMessage(message.receiver, receiver)
    )
    return this.paginate(result, rows, currentPage).map(message => (
      <Message
        key={message.text}
        message={message}
        authorized={authorized}
        forYou
        author={receiver}
      />
    ))
  }

  isUsersMessage = (receiver, user) => (receiver === user ? true : false)

  render() {
    const { classes, messages, receiver, authorized, all } = this.props
    const { currentPage } = this.state
    const userMessages = all
      ? this.getAllMessages(messages, receiver, authorized)
      : this.getUserMessages(messages, receiver, authorized)
    const total = all ? messages.length : userMessages.length
    return (
      <div className={classes.root}>
        <div>{userMessages}</div>
        <Paginate
          total={total}
          next={() => this.nextPage(total)}
          prev={this.prevPage}
          current={currentPage}
        />
      </div>
    )
  }
}

export default withStyles(styles)(MessagesList)
