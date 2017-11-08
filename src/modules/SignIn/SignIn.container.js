import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SignInView from './SignIn.view'
import { signInAPI } from './SignIn.state'
import { push } from 'react-router-redux'

export default connect(
  state => ({
    signInState: state.signInState
  }),
  dispatch => ({
    signInAPI: bindActionCreators(signInAPI, dispatch),
    push: bindActionCreators(push, dispatch)
  })
)(SignInView)
