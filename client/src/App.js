import React from 'react';
import Home from './pages/Home'
import Squad from "./pages/Squad"
import Intern from './pages/Intern'
import Body from './components/Layout'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <>
        <Body >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pokemon/:id' component={Intern} />
            <Route exact path='/squad' component={Squad} />
          </Switch>
        </Body>
      </>
    </Router>
  );
}

export default App;
