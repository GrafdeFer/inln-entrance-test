import { connect } from 'react-redux'
import NavigationDrawer from './NavigationDrawer'
import { switchDrawer } from '../actions/settings'

const mapStateToProps = state => ({
  show: state.settings.showDrawer,
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
