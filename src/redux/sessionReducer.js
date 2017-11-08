const initialSessionState = {}

const sessionReducers = {
  SESSION_STATE: (state, payload) => ({
    ...state,
    ...payload,
    isReady: true
  })
}

export const sessionRootReducer = (state = initialSessionState, action) => {
  let reducer = sessionReducers[action.type]
  return reducer ? reducer(state, action.payload) : state
}
