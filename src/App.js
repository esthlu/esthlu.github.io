import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Portfolio from './views/Portfolio';
import Experience from './views/Experience';
import './styles/layout.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/portfolio">
          <Portfolio />
        </Route>

        <Route path="/experience">
          <Experience />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
