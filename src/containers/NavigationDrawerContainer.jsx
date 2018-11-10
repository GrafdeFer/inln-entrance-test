import { connect } from 'react-redux'
import NavigationDrawer from '../components/NavigationDrawer'
import { switchDrawer } from '../actions/settings'

const mapStateToProps = state => ({
  show: state.settings.showDrawer,
  user: state.user.login,
  authorized: state.user.authorized,
})

const mapDispatchToProps = dispatch => {
  return {
    switchDrawer: () => dispatch(switchDrawer()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationDrawer)
