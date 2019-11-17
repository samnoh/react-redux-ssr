import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import UsersContainer from 'containers/UsersContainer';
import UserContainer from 'containers/UserContainer';

const UsersPage = () => {
    return (
        <>
            <Helmet title="Users" />
            <UsersContainer />
            <Route
                path="/users/:id"
                render={({ match }) => <UserContainer id={match.params.id} />}
            />
        </>
    );
};

export default UsersPage;
