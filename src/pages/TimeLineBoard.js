import React from 'react'
import styled from 'styled-components'
import TimeLineBoardContents from '../components/TimeLineBoardContents';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 218px;
`

const TimeLineBoard = () => {
    return (
        <Wrapper>
            <TimeLineBoardContents />
        </Wrapper>
    );
};
export default TimeLineBoard;