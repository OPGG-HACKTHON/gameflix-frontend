import React, { createContext } from 'react';
import { UserInfo } from 'types/responseInterface';

type User = {
    user?: UserInfo;
    setUser?: React.Dispatch<React.SetStateAction<UserInfo | undefined>>;
};
const UserContext = createContext<User>({});

export default UserContext;
