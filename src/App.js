import React from 'react';
import {AddTask, Private, Public, Tasks} from './screens';

function App() {
  const isAuthenticated = true;
  return isAuthenticated? <Private/>: <Public/>
}

export default App;
