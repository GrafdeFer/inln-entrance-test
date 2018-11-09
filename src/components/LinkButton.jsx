import React from 'react'
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const LinkButton = ({ name, path }) => {
  return (
    <ListItem
      button
      component={Link}
      to={path}
      variant="contained"
      color="primary"
    >
      <ListItemText primary={name} />
    </ListItem>
  )
}

export default LinkButton
