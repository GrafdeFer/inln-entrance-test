import { connect } from 'react-redux'
import { logIn } from '../actions'
import Login from './Login'

const mapDispatchToProps = dispatch => {
  return {
    logIn: (payload, redirect) => dispatch(logIn(payload, redirect)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login)
