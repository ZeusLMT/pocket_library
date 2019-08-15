import React from 'react';
import styles from './App.module.css';
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import Profile from "./Profile";

function App() {
  return (
      <main className={styles.layout}>
        <Switch>
          <Route path="/" exact strict component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </main>
  );
}

export default withRouter(App);
