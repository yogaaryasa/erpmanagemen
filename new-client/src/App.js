import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Tittle from './views/view-components/Tittle'
import Home from './views/Home'
import Login from './views/Login'
import Topics from './views/Topics'

const App = () => (
  <div>
    <header>
      <Tittle />
      <nav>
        <ul>
          <li><Link to='/' replace >Home</Link></li>
          <li><Link to='/login' replace >Login</Link></li>
          <li><Link to='/topics' replace>Topics</Link></li>
        </ul>
      </nav>
    </header>

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/topics' component={Topics}/>
    </Switch>

  </div>
)

export default App
