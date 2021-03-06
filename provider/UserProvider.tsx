import React, { FunctionComponent, useState } from 'react';
import UserContext from 'context/user';
import { UserInfo } from 'types/responseInterface';

const UserProvider: FunctionComponent = (props) => {
    const { children } = props;
    const [user, setUser] = useState<UserInfo>();
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
