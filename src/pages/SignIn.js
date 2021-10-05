import React from 'react'
import styled from 'styled-components'

import SignInContents from '../components/SignInContents';
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 218px;
`

const SignIn = () => {
    return (   
        <Wrapper>
            
            <SignInContents />
        </Wrapper>
    );
};
export default SignIn;