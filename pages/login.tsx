import React, { FunctionComponent } from 'react';
import LoginTemplate from 'components/templates/Login';
import LoginForm from 'components/organisms/LoginForm';

const Login: FunctionComponent = () => {
    return (
        <LoginTemplate footer={'2021 created by OP.GG hackathon Web D Team'}>
            <LoginForm />
        </LoginTemplate>
    );
};

export default Login;
