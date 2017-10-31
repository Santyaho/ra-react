/* eslint-disable import/no-named-as-default */
import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Routes from './Routes'
import AppBar from './AppBar'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render () {
    const activeStyle = { color: 'blue' }
    return (
      <div>
        <AppBar />
        <div id='mainContainer'>
          <div>
            <NavLink exact to='/' activeStyle={activeStyle}>
              Home
            </NavLink>
            {' | '}
            <NavLink to='/fuel-savings' activeStyle={activeStyle}>
              Demo App
            </NavLink>
            {' | '}
            <NavLink to='/about' activeStyle={activeStyle}>
              About
            </NavLink>
          </div>
          <Routes />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default App
