import { connect } from 'react-redux'
import Drawer, { drawerWidth } from './Drawer.view'
import { drawerActions } from './Drawer.state'
import { rootActions } from '../../root/Root.state'
import { bindActionCreators } from 'redux'

export { drawerWidth }
export default connect(
  ({ drawer }) => ({
    opened: drawer.opened,
    disabled: drawer.disabled,
    showedHiddenBlock: drawer.showedHiddenBlock
  }),
  dispatch => ({
    drawerActions: bindActionCreators(drawerActions, dispatch),
    rootActions: bindActionCreators(rootActions, dispatch)
  })
)(Drawer)
