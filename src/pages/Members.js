import React from 'react'
import styled from 'styled-components'
import MembersContents from '../components/MembersContents';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 218px;
`

const Members = () => {
    return (
        <Wrapper>
            <MembersContents />
        </Wrapper>
    );
};
export default Members;