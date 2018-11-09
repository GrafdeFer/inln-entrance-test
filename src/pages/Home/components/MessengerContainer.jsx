import { connect } from 'react-redux'
import { sendMessage } from '../actions'
import Messenger from './Messenger'

const mapStateToProps = state => ({
  login: state.user.login,
})

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: message => dispatch(sendMessage(message)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messenger)
