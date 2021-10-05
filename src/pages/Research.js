import React from 'react'
import styled from 'styled-components'
import ResearchContents from '../components/ResearchContents';
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 218px;
`

const Research = () => {
    return ( 
        <Wrapper>
            <ResearchContents />
        </Wrapper>    
    );
};
export default Research;