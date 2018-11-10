import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import NavigationDrawer from '../../../containers/NavigationDrawerContainer'
import ApplicationBar from '../../../containers/ApplicationBarContainer'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    width: '100%',
    textAlign: 'center',
  },
  toolbar: theme.mixins.toolbar,
  form: {
    maxWidth: 230,
    display: 'inline-block',
  },
})

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: '',
      redirectToPreviousRoute: false,
    }
  }

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  handleSubmit = () => {
    const { logIn } = this.props
    logIn(
      {
        login: this.state.login,
        password: this.state.password,
      },
      () =>
        this.setState({
          redirectToPreviousRoute: true,
        })
    )
  }

  render() {
    const { classes, location, error } = this.props
    const { login, password, redirectToPreviousRoute } = this.state
    const { from } = location.state || { from: { pathname: '/' } }
    if (redirectToPreviousRoute) {
      return <Redirect to={from} />
    }
    return (
      <div className={classes.root}>
        <ApplicationBar title="Войти" />
        <NavigationDrawer />
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.form}>
            <TextField
              name="login"
              onChange={this.handleChange}
              fullWidth
              required
              id="login-required"
              label="Логин"
              margin="normal"
              value={login}
              variant="outlined"
            />
            <TextField
              name="password"
              onChange={this.handleChange}
              fullWidth
              required
              id="password-required"
              label="Пароль"
              margin="normal"
              value={password}
              type="password"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Отправить
            </Button>
            {error ? <p>{error}</p> : undefined}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Login)
