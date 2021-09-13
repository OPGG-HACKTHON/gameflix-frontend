import { createContext } from 'react';
import { UserInfo } from 'types/responseInterface';

type User = {
    user?: UserInfo;
    setUser?: (user: UserInfo) => void;
};
const UserContext = createContext<User>({});

export default UserContext;
