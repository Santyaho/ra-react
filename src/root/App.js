/* eslint-disable import/no-named-as-default */
import React from 'react'
import PropTypes from 'prop-types'
import { Switch, NavLink, Route } from 'react-router-dom'
import HomePage from './../components/HomePage'
import FuelSavingsPage from './../modules/FuelSavingsPage'
import AboutPage from './../components/AboutPage'
import NotFoundPage from './../components/NotFoundPage'

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
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/fuel-savings' component={FuelSavingsPage} />
            <Route path='/about' component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default App
