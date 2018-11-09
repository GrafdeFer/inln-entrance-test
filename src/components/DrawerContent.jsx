import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import LinkButton from './LinkButton'
import List from '@material-ui/core/List'

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
})

const DrawerContent = ({ classes }) => {
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List component="nav">
        <LinkButton name="Все сообщения" path="/" />
        <LinkButton name="Написать сообщение" path="/messenger" />
        <LinkButton name="Ответы" path="/answers" />
      </List>
    </div>
  )
}

export default withStyles(styles)(DrawerContent)
