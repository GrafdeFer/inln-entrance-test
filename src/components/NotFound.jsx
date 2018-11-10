import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    textAlign: 'center',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  button: {
    display: 'block',
    marginTop: 15,
  },
}

const NotFound = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h3">Упс... Такой страницы нет :(</Typography>
      <Button
        className={classes.button}
        size="large"
        component={Link}
        to="/"
        variant="contained"
        color="primary"
      >
        На главную
      </Button>
    </div>
  )
}

export default withStyles(styles)(NotFound)
