import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUser } from 'store/actions/users';
import useActions from 'hooks/useActions';
import User from 'components/User';
import { usePreloader } from 'utils/preloaderContext';

const UserContainer = ({ id }) => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const [_getUser] = useActions([getUser], []);

    usePreloader(() => _getUser(id));

    useEffect(
        () => {
            if (user && user.id === parseInt(id, 10)) return;
            _getUser(id);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [id]
    );

    if (!user) return null;

    return <User user={user} />;
};

export default UserContainer;
