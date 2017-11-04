import { combineReducers } from 'redux'
import { fuelSavingsReducer } from '../modules/FuelSavingsPage'
import { dialogReducer } from '../modules/Dialog'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  fuelSavings: fuelSavingsReducer,
  dialog: dialogReducer,
  routing: routerReducer
})

export default rootReducer
