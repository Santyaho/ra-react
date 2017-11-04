import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './../components/HomePage'
import FuelSavingsPage from './../modules/FuelSavingsPage'
import AboutPage from './../components/AboutPage'
import NotFoundPage from './../components/NotFoundPage'
import DialogPage from './../modules/Dialog'

export default class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/fuel-savings' component={FuelSavingsPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/dialog' component={DialogPage} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}
