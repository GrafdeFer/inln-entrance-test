import { connect } from 'react-redux'
import MessagesList from './MessagesList'

const mapStateToProps = state => ({
  messages: state.messages.messages,
  receiver: state.user.login,
})

export default connect(
  mapStateToProps,
  null
)(MessagesList)
