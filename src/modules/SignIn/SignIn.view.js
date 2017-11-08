import SignInForm from '../../components/SignInForm'
import React, { Component } from 'react'

export default class SignIn extends Component {
  render () {
    return (<SignInForm {...this.props} />)
  }
};
