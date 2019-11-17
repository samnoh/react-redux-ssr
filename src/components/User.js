import React from 'react';
import { Helmet } from 'react-helmet';

const User = ({ user }) => {
    const { email, name, username } = user;

    return (
        <>
            <Helmet title={`${name} | User`} />
            <div>
                <h1>
                    {username} ({name})
                </h1>
                <p>{email}</p>
            </div>
        </>
    );
};

export default User;
