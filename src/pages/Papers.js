import React from 'react'
import styled from 'styled-components'
import PaperContents from '../components/PaperContents';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 218px;
`
const Container = styled.nav`

`

const Papers = () => {
    return (
        
        <Wrapper>
            <PaperContents />
        </Wrapper>
        
    );
};
export default Papers;
