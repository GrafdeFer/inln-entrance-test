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

const NavigationDrawer = ({ classes, show, switchDrawer }) => {
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
          <DrawerContent />
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
          <DrawerContent />
        </Drawer>
      </Hidden>
    </div>
  )
}

export default withStyles(styles)(NavigationDrawer)
