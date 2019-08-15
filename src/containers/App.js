import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";

function App() {
  return (
      <main className={undefined}>
        <Switch>
          <Route path="/" exact strict component={undefined} />
          <Route path="/favorite" component={undefined} />
          <Route path="/profile" component={undefined} />
        </Switch>
      </main>
  );
}

export default App;
