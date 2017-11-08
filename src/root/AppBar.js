import React, { Component } from 'react'
import { connect } from 'react-redux'
import { drawerActions } from '../modules/Drawer/Drawer.state'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Hidden from 'material-ui/Hidden'
import Drawer from './../modules/Drawer/Drawer.container'
import { appBar as styles } from './theme'
import { bindActionCreators } from 'redux'

class AppBarComponent extends Component {
  constructor (props) {
    super(props)
    this.signOut = this.signOut.bind(this)
  }

  signOut () {
    const { signOut, push } = this.props
    push('/')
    signOut()
  }

  render () {
    const { classes, disabled, drawerActions } = this.props
    const { toggleDisableDrawer, toggleDrawer } = drawerActions
    const icon = disabled ? null : (
      <Hidden mdUp>
        <IconButton
          color='contrast'
          aria-label='open drawer'
          onClick={toggleDrawer}
          className={classes.navIconHide}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    )
    return (
      <div>
        <AppBar className={disabled ? classes.appBarFull : classes.appBar}>
          <Toolbar>
            {icon}
            <Typography type='title' color='inherit' className={classes.flex}>
              Title
            </Typography>
            <Button onClick={this.signOut} color='inherit'>
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer />
      </div>
    )
  }
}

export default withStyles(styles)(
  connect(
    ({ drawer }) => ({
      disabled: drawer.disabled
    }),
    dispatch => ({
      drawerActions: bindActionCreators(drawerActions, dispatch)
    })
  )(AppBarComponent)
)
