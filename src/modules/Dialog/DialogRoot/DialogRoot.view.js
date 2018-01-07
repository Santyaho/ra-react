import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FormDialog from '../../../components/Dialog/Types/FormDialog'
import SigninDialog from '../../../components/Dialog/Types/SigninDialog'

const DIALOG_COMPONENTS = {
  FormDialog,
  SigninDialog
}

export default class DialogRoot extends Component {
  render () {
    const {  dialogState: { list }, actions } = this.props
    const dialog = list[list.length - 1]
    if (!dialog) return <Dialog open={false} />

    const { dialogType, dialogProps } = dialog
    const Specificdialog = DIALOG_COMPONENTS[dialogType]

    return (
      <Dialog 
        onRequestClose={actions.hideDialog} 
        open
      >
        <Specificdialog 
        actions={actions} 
        dialogProps={dialogProps} />
      </Dialog>
    )
  }
}
