import React from 'react'
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const LinkButton = ({ name, path, close }) => {
  const location = window.location.hash
  return (
    <ListItem
      selected={location === `#${path}`}
      button
      component={Link}
      to={path}
      onClick={close}
    >
      <ListItemText primary={name} />
    </ListItem>
  )
}

export default LinkButton
