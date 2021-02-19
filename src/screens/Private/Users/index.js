import {Switch, Route} from 'react-router-dom';

const Users = () => {
    return (
        <Switch>
            <Route path="/tasks/add" component={Add} />
            <Route path="/tasks/list" component={List} />
            <Route path="/tasks/edit/:id" component={Add} />
        </Switch>
    )
}

export {Users};