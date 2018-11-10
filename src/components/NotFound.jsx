import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    textAlign: 'center',
    width: '100%',
    height: '100vh',
    display: 'flex',
    backgroundColor: '#252525',
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  link: {
    display: 'block',
  },
}

const NotFound = ({ classes }) => {
  return (
    <div className={classes.root}>
      <img src="/images/404.png" />
      <Link to="/" className={classes.link}>
        <Button variant="contained" color="primary">
          На главную
        </Button>
      </Link>
    </div>
  )
}

export default withStyles(styles)(NotFound)
