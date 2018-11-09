import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    marginLeft: 300,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${300}px)`,
    },
  },
  header: {
    flexGrow: 1,
  },
})

const ApplicationBar = ({ classes }) => {
  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.header}>
          Messages
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(ApplicationBar)