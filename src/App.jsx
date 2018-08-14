import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Galery } from './components/Galery/Galery.jsx';
import { Blog } from './components/Blog/Blog.jsx';
import { Cover } from './components/Cover/Cover.jsx';
import { Header } from './components/Header/Header';

import UserStore from './store/store.jsx';

const App = () => {
  return (
    <Router>
      <UserStore>
        <Header />
        <Switch>
          <Route path="/galery" component={Galery} />
          <Route path="/contacts" component={Blog} />
          <Route path="/" component={Cover} />
        </Switch>
      </UserStore>
    </Router>
  );
};

export default App;
