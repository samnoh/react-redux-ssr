import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import Menu from 'components/Menu';
import 'App.scss';

const RedPage = loadable(() => import('pages/RedPage'));
const BluePage = loadable(() => import('pages/BluePage'));
const UsersPage = loadable(() => import('pages/UsersPage'));
const NotFoundPage = loadable(() => import('pages/NotFoundPage'));

const App = () => {
    return (
        <>
            <Menu />
            <hr />
            <Switch>
                <Route exact path={['/', '/red']} component={RedPage} />
                <Route path="/blue" component={BluePage} />
                <Route path="/users" component={UsersPage} />
                <Route
                    render={({ staticContext }) => {
                        if (staticContext) staticContext.statusCode = 404;
                        return <NotFoundPage />;
                    }}
                />
            </Switch>
        </>
    );
};

export default App;
