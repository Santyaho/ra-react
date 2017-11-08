import { combineReducers } from 'redux'
import { fuelSavingsReducer } from '../modules/FuelSavingsPage'
import { dialogReducer } from '../modules/Dialog'
import { drawerReducer } from '../modules/Drawer'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  fuelSavings: fuelSavingsReducer,
  dialog: dialogReducer,
  drawer: drawerReducer,
  routing: routerReducer
})

export default rootReducer
