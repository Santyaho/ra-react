import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT
} from '../../redux/actionTypes'

/* i decided to store signed in indicator here because that reducer knows about sign and sign out */
const initialSignInState = {
  name: '',
  id: '',
  signedIn: false
}

/* todo - lot of boilerplate code, maybe there is a way to reduce amount of it */

/* SIGN IN */

const signInStart = payload => ({
  type: SIGN_IN,
  payload
})

const customUser = {
  name: 'John Doe',
  id: 1
}

const signInSuccess = payload => ({
  type: SIGN_IN_SUCCESS,
  payload
})

const signInFailure = payload => ({
  type: SIGN_IN_FAILURE,
  payload
})

export const signInAPI = ({ email, password }) => dispatch => {
  console.log(`Sign in with email ${email} and password ${password}`)
  dispatch(signInStart({ email, password }))
  Promise.resolve(customUser)
    .then(data => dispatch(signInSuccess(data)))
    .catch(error => dispatch(signInFailure(error)))
}

/* SIGN OUT */

export const signOut = () => dispatch =>
  dispatch({
    type: SIGN_OUT
  })

const signInReducers = {
  SIGN_IN: state => ({
    ...state,
    inProgress: true
  }),
  SIGN_IN_SUCCESS: (state, data) => {
    const { name, id } = data
    return {
      ...state,
      inProgress: false,
      name,
      id,
      signedIn: true
    }
  },
  SIGN_IN_FAILURE: (state, data) => ({
    ...state,
    inProgress: false,
    data
  }),
  SIGN_OUT: state => ({
    ...state,
    signedIn: false,
    id: 0,
    name: ''
  })
}

export const signInRootReducer = (state = initialSignInState, action) => {
  let reducer = signInReducers[action.type]
  return reducer ? reducer(state, action.payload) : state
}
