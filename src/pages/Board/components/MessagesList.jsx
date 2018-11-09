import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Message from '../../../components/MessageContainer'
import Paginate from '../../../components/Paginate'

const styles = theme => ({
  root: {
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

class MessagesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      rows: 9,
    }
  }

  nextPage = () => {
    const { currentPage, rows } = this.state
    const { messages } = this.props
    const next = currentPage + 1
    const count = Math.ceil(messages.length / rows)
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

  renderMessages = (messages, receiver, authorized) => {
    const { currentPage, rows } = this.state
    let result = []
    for (
      var i = (currentPage - 1) * rows;
      i < currentPage * rows && i < messages.length;
      i++
    ) {
      const message = messages[i]
      if (this.isMessageForYou(message.receiver, receiver)) {
        result.push(
          <Message
            key={i}
            message={message}
            authorized={authorized}
            forYou
            author={receiver}
          />
        )
      } else {
        result.push(
          <Message
            key={i}
            message={message}
            authorized={authorized}
            author={receiver}
          />
        )
      }
    }
    return result
  }

  isMessageForYou = (receiver, user) => (receiver === user ? true : false)

  render() {
    const { classes, messages, receiver, authorized } = this.props
    const { currentPage } = this.state
    const total = messages.length
    return (
      <div className={classes.root}>
        <div className={classes.toolbar} />
        <div className={classes.content}>
          <div>{this.renderMessages(messages, receiver, authorized)}</div>
          <Paginate
            total={total}
            next={this.nextPage}
            prev={this.prevPage}
            current={currentPage}
          />
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(MessagesList)
