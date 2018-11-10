import { connect } from 'react-redux'
import { switchDrawer } from '../actions/settings'
import ApplicationBar from '../components/ApplicationBar'

const mapDispatchToProps = dispatch => {
  return {
    switchDrawer: () => dispatch(switchDrawer()),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ApplicationBar)
