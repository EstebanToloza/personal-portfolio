import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {

  //console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  //console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/personal-portfolio/" exact component={Main} />
          <Route path="/personal-portfolio/blog" exact component={BlogPage} />
          <Route path="/personal-portfolio/projects" exact component={ProjectPage} />
          <Redirect to="/personal-portfolio/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
