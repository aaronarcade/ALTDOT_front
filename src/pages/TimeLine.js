import React from 'react'
import styled from 'styled-components'
import TimeLineContents from '../components/TimeLineContents';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 218px;
`

const TimeLine = () => {
    return (
        <Wrapper>
            <TimeLineContents />
        </Wrapper>
    );
};
export default TimeLine;