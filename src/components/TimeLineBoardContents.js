import React, {useState, useEffect} from 'react'
import Title from './elements/Title'
import ContentsWrapper from './ContentWrapper';
import styled from 'styled-components';
import Lines from './elements/Lines';
import { useLocation } from 'react-router';
import Button from "./elements/Button"
import { Link } from 'react-router-dom';
import IOT from '../asset/image/IoT.jpg'
const Content = styled.div`
display: flex;
width:90%;
flex-direction:column;
align-items: center;
margin-bottom: 2vw;
`
const ContentTitle = styled.h2`
width: 70%;
`
const ContentPic = styled.div`
margin-bottom: 2vw;
border: 0.2vw solid  #82ccdd;
width: 70%;
height:24vw;
`
const ContentText = styled.div`
margin-bottom: 2vw;
width: 70%;
`
const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
width: 70%;
`
const TimeLineBoardContents = () => {
    
    const [title, setTitle] = useState("");
    const [picture, setPicture] = useState("");
    const [text,  setText] = useState("")
    const location = useLocation();
    useEffect(()=>{
        if(typeof location.state != "undefine"){
            setPicture(location.state.pic)
            setText(location.state.text)
            setTitle(location.state.title)
        }
    },[])
    
    return (
        <ContentsWrapper>
        <Title>
            TimeLine
        </Title>
        <Lines/>
        <Content>
        <ContentTitle>{title}</ContentTitle>
        <ContentPic><img style={{width:'100%',height:'100%'}} src={picture}/></ContentPic>
        <ContentText>{text}</ContentText>
        <ButtonContainer>
        <div></div>
        <Link to="/timeline"><Button>뒤로가기</Button></Link>
        </ButtonContainer>
        </Content>
        </ContentsWrapper>
        
    );
};
export default TimeLineBoardContents;