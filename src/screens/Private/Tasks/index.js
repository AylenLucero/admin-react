import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Add } from './Add';
import {List} from './List';

const Tasks = () => {
    return (
        <Switch>
            <Route path="/tasks/add" component={Add} />
            <Route path="/tasks/list" component={List} />
        </Switch>
    )
}

export {Tasks};
