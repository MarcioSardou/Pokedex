import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import StartPage from './pages/Start'
import Home from './pages/Home'
import Intern from './pages/Intern'


export default function Routes() {
  return (
    <BrowserRouter>
     <Switch>
      <Route path='/' exact component={StartPage} />
      <Route path='/home' exact component={Home} />
      <Route path='/Inter' exact component={Intern} />
     </Switch>
    </BrowserRouter>
  );
}