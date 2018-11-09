import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import LinkButton from './LinkButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
})

const DrawerContent = ({ classes, authorized, user }) => {
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      {authorized && (
        <ListItem button>
          <ListItemText>{user}</ListItemText>
        </ListItem>
      )}
      {!authorized && <LinkButton name="Войти" path="/login" />}
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
