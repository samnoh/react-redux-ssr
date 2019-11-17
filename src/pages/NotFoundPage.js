import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
    return (
        <>
            <Helmet title="Page Not Found" />
            <h1>404 - Page Not Found</h1>
        </>
    );
};

export default NotFoundPage;
