import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './authHelper'

/* Components to be rendered in this PrivateRoute will only load 
    when the user is authenticated, otherwise the user will be 
    redirected to the Signin component.*/

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute