import { push as pushRoute } from 'react-router-redux'

export default function rootReducer (state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}

export const push = path => pushRoute(path)

export const rootActions = {
  push
}
