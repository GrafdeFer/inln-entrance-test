import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Home from './pages/Home'
import Board from './pages/Board'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home.components.Home} />
          <Route exact path="/board" component={Board.components.Board} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
