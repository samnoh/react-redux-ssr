import React from 'react';
import { Route } from 'react-router-dom';

import Menu from 'components/Menu';
import RedPage from 'pages/RedPage';
import BluePage from 'pages/BluePage';
import UsersPage from 'pages/UsersPage';
import 'App.scss';

const App = () => {
    return (
        <>
            <Menu />
            <hr />
            <Route path="/red" component={RedPage} />
            <Route path="/blue" component={BluePage} />
            <Route path="/users" component={UsersPage} />
        </>
    );
};

export default App;
