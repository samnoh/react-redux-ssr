import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUsers } from 'store/actions/users';
import useActions from 'hooks/useActions';
import Users from 'components/Users';
import { usePreloader } from 'utils/preloaderContext';

const UsersContainer = () => {
    const { users } = useSelector(({ user }) => ({ users: user.users }));
    const [_getUsers] = useActions([getUsers], []);

    usePreloader(() => _getUsers());

    useEffect(
        () => {
            if (users) return;
            _getUsers();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [users]
    );

    if (!users) return null;

    return <Users users={users} />;
};

export default UsersContainer;
