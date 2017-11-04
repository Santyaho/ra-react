import * as dialogActionTypes from '../../../redux/dialogActionTypes'
import { dialogState } from '../../../redux/initialState'

const dialog = (state = dialogState, action) => {
  const { list } = state
  switch (action.type) {
    case dialogActionTypes.SHOW_DIALOG:
      return {
        list: [
          ...list,
          {
            dialogType: action.dialogType,
            dialogProps: action.dialogProps
          }
        ]
      }

    case dialogActionTypes.SAVE_DIALOG:
      const lastDialog = list[list.length - 1]
      const newDialogProps = Object.assign(
        {},
        lastDialog.dialogProps,
        action.dialogProps
      )
      return {
        list: [
          ...list.slice(0, -1),
          Object.assign({}, lastDialog, {
            dialogProps: newDialogProps
          })
        ]
      }

    case dialogActionTypes.HIDE_DIALOG:
      return {
        list: list.slice(0, -1)
      }
    default:
      return state
  }
}

const saveDialog = dialogProps => ({
  type: dialogActionTypes.SAVE_DIALOG,
  dialogProps
})

export const hideDialog = () => ({
  type: dialogActionTypes.HIDE_DIALOG
})

export const showDialog = (
  dialogType,
  dialogProps,
  propsToSave = null
) => dispatch => {
  // propsToSave - optional. Used only when calling dialog inside another dialog
  // and to save state of the old one
  if (propsToSave) {
    dispatch(saveDialog(propsToSave))
  }

  return dispatch({
    type: dialogActionTypes.SHOW_DIALOG,
    dialogType,
    dialogProps
  })
}

export const actions = {
  hideDialog,
  showDialog
}

export default dialog
