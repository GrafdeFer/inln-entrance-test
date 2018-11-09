import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    border: '1px solid #888',
    padding: 20,
    borderRadius: 5,
    minWidth: 300,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
})

class MessageSender extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      recipient: null,
    }
  }

  handleChange = e => {
    this.setState({
      message: e.currentTarget.value,
    })
  }

  handleSubmit = () => {
    const { sendMessage } = this.props
    const { message, recipient } = this.state
    sendMessage({
      text: message,
      recipient: recipient,
    })
    this.setState({
      message: '',
      recipient: null,
    })
  }

  render() {
    const { classes } = this.props
    const { message } = this.state
    return (
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <TextField
          onChange={this.handleChange}
          fullWidth
          id="standard-required"
          label="Текст сообщения"
          margin="normal"
          value={message}
        />
        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
          Отправить
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(MessageSender)
