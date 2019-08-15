import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import Profile from "./Profile";

function App() {
  return (
      <main className={undefined}>
        <Switch>
          <Route path="/" exact strict component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </main>
  );
}

export default App;
