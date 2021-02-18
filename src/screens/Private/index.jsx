import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Main } from '../../components';
import { Tasks } from './Tasks';

const Private = () => {
    return (
        <Router>
            <Layout>
                <Main>
                    <Switch>
                        <Route path="/tasks" component={Tasks} />
                    </Switch>
                </Main>
            </Layout>
        </Router>
    )
}

export { Private };
