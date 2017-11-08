import { connect } from 'react-redux'
import Drawer, { drawerWidth } from './Drawer.view'
import { drawerActions } from './Drawer.state'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'

export { drawerWidth }
export default connect(
  ({ drawer }) => ({
    opened: drawer.opened,
    disabled: drawer.disabled,
    showedHiddenBlock: drawer.showedHiddenBlock
  }),
  dispatch => ({
    drawerActions: bindActionCreators(drawerActions, dispatch),
    push: bindActionCreators(push, dispatch)
  })
)(Drawer)
