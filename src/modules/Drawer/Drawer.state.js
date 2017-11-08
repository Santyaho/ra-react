import * as drawerActionTypes from '../../redux/drawerActionTypes'
import { drawerState } from '../../redux/initialState'

const drawer = (state = drawerState, action) => {
  switch (action.type) {
    case drawerActionTypes.TOGGLE_DRAWER:
      return {
        ...state,
        opened: !state.opened
      }
    case drawerActionTypes.TOGGLE_DISABLE_DRAWER:
      return {
        ...state,
        disabled: !state.disabled
      }
    case drawerActionTypes.TOGGLE_HIDDEN_BLOCK:
      console.log('toggleHiddenBlock', state.showedHiddenBlock)
      return {
        ...state,
        showedHiddenBlock: !state.showedHiddenBlock
      }
    default:
      return state
  }
}

const toggleDisableDrawer = () => ({
  type: drawerActionTypes.TOGGLE_DISABLE_DRAWER
})

export const toggleDrawer = () => ({
  type: drawerActionTypes.TOGGLE_DRAWER
})

const toggleHiddenBlock = () => ({
  type: drawerActionTypes.TOGGLE_HIDDEN_BLOCK
})

export const drawerActions = {
  toggleDrawer,
  toggleDisableDrawer,
  toggleHiddenBlock
}

export default drawer
