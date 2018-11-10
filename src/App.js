import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Home from './pages/Home'
import Board from './pages/Board'
import Answers from './pages/Answers'
import Login from './pages/Login'
import NotFound from './components/NotFound'
import PrivateRoute from './components/PrivateRoute'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={Board.components.Board}
            title="asd"
          />
          <PrivateRoute path="/messenger" component={Home.components.Home} />
          <PrivateRoute
            path="/answers"
            component={Answers.components.Answers}
          />
          <Route exact path="/login" component={Login.components.Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
