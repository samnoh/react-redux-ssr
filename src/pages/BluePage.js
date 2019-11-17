import React from 'react';
import Blue from 'components/Blue';
import { Helmet } from 'react-helmet';

const BluePage = () => {
    return (
        <>
            <Helmet title="Blue" />
            <Blue />
        </>
    );
};

export default BluePage;
