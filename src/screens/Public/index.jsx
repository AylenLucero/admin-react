import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {SignUp} from './SignUp';

const Public = () => {
    return (    
    <Router>
        <Switch>
            <Route path="/signUp" component={SignUp} />
        </Switch>        
    </Router>
    
    )
}

export {Public};