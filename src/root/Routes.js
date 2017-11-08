import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import FuelSavingsPage from './../modules/FuelSavingsPage'
import AboutPage from './../components/AboutPage'
import NotFoundPage from './../components/NotFoundPage'
import DialogPage from './../modules/Dialog'
import SignIn from './../modules/SignIn'

export default class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path='/fuel-savings' component={FuelSavingsPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/dialog' component={DialogPage} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}
