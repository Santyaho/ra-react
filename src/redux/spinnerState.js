import {SPINNER, SIGN_IN} from './actionTypes'
const initialState = {
  SignIn: false
}
export const showSpinner = payload => ({SPINNER, payload})

const spinnerReducers = {
  [SPINNER]: (state, payload) => {
    return {
      ...state,
      ...payload
    }
  },
  [SIGN_IN]: (state) => {
    return {
      ...state,
      SignIn: true
    }
  }
}

export const spinnerRootReducer = (state = initialState, action) => {
  let reducer = spinnerReducers[action.type]
  return reducer ? reducer(state, action.payload) : state
}
