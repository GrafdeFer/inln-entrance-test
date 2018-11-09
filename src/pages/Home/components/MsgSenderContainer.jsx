import { connect } from 'react-redux'
import { sendMessage } from '../actions'
import MsgSender from './MsgSender'

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: message => dispatch(sendMessage(message)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(MsgSender)
