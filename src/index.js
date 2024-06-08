import React from 'react'
import ReactDOM from 'react-dom'
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import './style.css'
import About from './views/about'
import Challenges from './views/challenges'
import Connect from './views/connect'
import Future from './views/future'
import Home from './views/home'
import List from './views/list'
import NotFound from './views/not-found'
import Sorting from './views/sorting'
import Tandc from './views/tandc'

import RedirectToVittalyes from './components/RedirectToVittalyes'
import ScrollToTop from './components/scrolltotop'

const App = () => {
  return (
    <Router>

<ScrollToTop />
      <Switch>
        <Route component={Connect} exact path="/connect" />
        <Route component={Challenges} exact path="/challenges" />
        <Route component={List} exact path="/list" />
        <Route component={Sorting} exact path="/sorting" />
        <Route component={About} exact path="/about" />
        <Route component={Future} exact path="/future" />
        <Route component={Tandc} exact path="/tandc" />
        <Route component={Home} exact path="/" />
        {/* <Route component={Blog} exact path="/blog" /> */}
        <Route component={RedirectToVittalyes} exact path="/path" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
