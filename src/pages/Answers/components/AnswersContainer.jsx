import { connect } from 'react-redux'
import Answers from './Answers'

const mapStateToProps = state => ({
  messages: state.messages.messages,
  receiver: state.user.login,
})

export default connect(
  mapStateToProps,
  null
)(Answers)
