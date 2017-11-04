import { connect } from 'react-redux'
import DialogRoot from './DialogRoot.view'
import { actions } from './DialogRoot.state'

export default connect(
  ({ dialog: { list } }) => ({
    dialog: list[list.length - 1]
  }),
  actions
)(DialogRoot)
