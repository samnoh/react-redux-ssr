import React from 'react';
import Red from 'components/Red';
import { Helmet } from 'react-helmet';

const RedPage = () => {
    return (
        <>
            <Helmet title="Red" />
            <Red />
        </>
    );
};

export default RedPage;
