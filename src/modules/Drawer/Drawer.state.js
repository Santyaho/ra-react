import createReducer from '../../utils/createReducer'

export const DrawerState = {
  opened: false,
  disabled: false,
  showedHiddenBlock: false
}

const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
const TOGGLE_DISABLE_DRAWER = 'TOGGLE_DISABLE_DRAWER'
const TOGGLE_HIDDEN_BLOCK = 'TOGGLE_HIDDEN_BLOCK'

const drawerReducer = {
  [TOGGLE_DRAWER]: state => ({ ...state, opened: !state.opened }),
  [TOGGLE_DISABLE_DRAWER]: state => ({ ...state, disabled: !state.disabled }),
  [TOGGLE_HIDDEN_BLOCK]: state => ({
    ...state,
    showedHiddenBlock: !state.showedHiddenBlock
  })
}

const toggleDisableDrawer = () => ({
  type: TOGGLE_DISABLE_DRAWER
})

export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER
})

const toggleHiddenBlock = () => ({
  type: TOGGLE_HIDDEN_BLOCK
})

export const drawerActions = {
  toggleDrawer,
  toggleDisableDrawer,
  toggleHiddenBlock
}

export const drawerState = createReducer(drawerReducer, DrawerState)
