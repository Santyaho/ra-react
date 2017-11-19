import { combineReducers } from 'redux'
import { fuelSavingsReducer } from '../modules/FuelSavingsPage'
import { dialogReducer } from '../modules/Dialog'
import { drawerReducer } from '../modules/Drawer'
import { routerReducer } from 'react-router-redux'
import { signInRootReducer } from '../modules/SignIn/SignIn.state'
import { snackRootReducer } from './snackReducer'
import { spinnerRootReducer } from './spinnerState'

const rootReducer = combineReducers({
  fuelSavings: fuelSavingsReducer,
  routing: routerReducer,
  signInState: signInRootReducer,
  dialog: dialogReducer,
  drawer: drawerReducer,
  spinner: spinnerRootReducer,
  snack: snackRootReducer
})

export default rootReducer
