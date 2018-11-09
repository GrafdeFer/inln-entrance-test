import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import currentDate from '../helpers/currentDate'

const styles = {
  root: {
    margin: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forYou: {
    margin: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#b2d8b3',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 5,
    width: 25,
    height: 25,
  },
  response: {
    display: 'flex',
    alignItems: 'baseline',
  },
}

class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: false,
      message: '',
    }
  }

  handleInput = e => {
    this.setState({
      message: e.currentTarget.value,
    })
  }

  changeEditable = () => {
    this.setState({ editable: !this.state.editable })
  }

  handleSubmit = () => {
    const { sendMessage } = this.props
    const { message } = this.state
    sendMessage({
      text: message,
      date: currentDate(),
      author: this.props.author,
      receiver: this.props.message.author,
    })
    this.setState({
      editable: false,
      message: '',
    })
  }

  responseControl = () => {
    const { authorized, classes } = this.props
    const { editable, message } = this.state
    return (
      authorized && (
        <div className={classes.response}>
          {editable && (
            <TextField
              onChange={this.handleInput}
              fullWidth
              id="standard-required"
              label="Текст сообщения"
              margin="normal"
              value={message}
            />
          )}
          {editable && (
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Отправить
            </Button>
          )}
          {!editable && (
            <Button color="primary" onClick={this.changeEditable}>
              Ответить
            </Button>
          )}
        </div>
      )
    )
  }

  render() {
    const { message, classes, forYou } = this.props
    return (
      <Paper className={forYou ? classes.forYou : classes.root}>
        <div className={classes.header}>
          <div className={classes.userInfo}>
            <Avatar
              className={classes.avatar}
              alt="Adelle Charles"
              src="https://cataas.com/cat"
            />
            <Typography variant="h6">{message.author}</Typography>
          </div>
          <Typography variant="caption">{message.date}</Typography>
        </div>
        <Typography variant="headline">
          {message.receiver ? `${message.receiver}, ` : undefined}
          {message.text}
        </Typography>
        {this.responseControl()}
      </Paper>
    )
  }
}

export default withStyles(styles)(Message)
