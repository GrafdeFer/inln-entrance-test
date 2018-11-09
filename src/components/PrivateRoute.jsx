import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest.isAuth)
  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.user.authorized,
  }
}

export default connect(
  mapStateToProps,
  null
)(PrivateRoute)
