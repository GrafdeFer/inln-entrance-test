import { connect } from 'react-redux'
import { logIn } from '../actions'
import Login from './Login'

const mapStateToProps = state => {
  return {
    error: state.user.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (payload, redirect) => dispatch(logIn(payload, redirect)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
