import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import currentDate from '../../../helpers/currentDate'

const styles = theme => ({
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
    }
  }

  handleChange = e => {
    this.setState({
      message: e.currentTarget.value,
    })
  }

  handleSubmit = () => {
    const { sendMessage, login } = this.props
    const { message } = this.state
    sendMessage({
      text: message,
      date: currentDate(),
      author: login,
      receiver: null,
    })
    this.setState({
      message: '',
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
