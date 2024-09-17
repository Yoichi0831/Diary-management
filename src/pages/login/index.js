import react, { Component } from 'react';

import { LoginWrapper, LoginBox, EmailInput, LoginButton } from './style';

class Login extends Component {
    render() {

        return (
        <LoginWrapper>

            <LoginBox>
                <EmailInput placeholder='Email address'></EmailInput>
                login
                <LoginButton>Register</LoginButton>
            </LoginBox>

        </LoginWrapper>
        )
    }
}



export default Login;