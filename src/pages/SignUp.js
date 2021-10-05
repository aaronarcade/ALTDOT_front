import React from 'react'
import styled from 'styled-components'
import SignUpContents from '../components/SignUpContents';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 218px;
`

const SignUp = () => {
    return ( 
        <Wrapper>
            <SignUpContents />
        </Wrapper>
    );
};
export default SignUp;