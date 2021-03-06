import { connect } from 'react-redux'
import Message from '../components/Message'
import { sendMessage } from '../actions/message'

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: message => dispatch(sendMessage(message)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Message)
