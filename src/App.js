import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from 'components/Menu';
import RedPage from 'pages/RedPage';
import BluePage from 'pages/BluePage';
import UsersPage from 'pages/UsersPage';
import NotFoundPage from 'pages/NotFoundPage';
import 'App.scss';

const App = () => {
    return (
        <>
            <Menu />
            <hr />
            <Switch>
                <Route path="/red" component={RedPage} />
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
