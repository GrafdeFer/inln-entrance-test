import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { withStyles } from '@material-ui/core/styles'
import DrawerContent from './DrawerContent'

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 300,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: 300,
  },
})

const NavigationDrawer = ({
  classes,
  show,
  switchDrawer,
  user,
  authorized,
}) => {
  return (
    <div className={classes.drawer}>
      <Hidden xsDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <DrawerContent user={user} authorized={authorized} />
        </Drawer>
      </Hidden>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={show}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={switchDrawer}
        >
          <DrawerContent
            user={user}
            authorized={authorized}
            close={switchDrawer}
          />
        </Drawer>
      </Hidden>
    </div>
  )
}

export default withStyles(styles)(NavigationDrawer)
