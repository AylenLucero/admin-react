import React from 'react';
import {AddTask, Tasks} from './screens';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>        
        <Route path="/add-task" component={AddTask} />
        <Route path="/tasks" component={Tasks} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
