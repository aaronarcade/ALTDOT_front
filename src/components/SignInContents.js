import React, {useState} from 'react'
import styled from "styled-components";
import Title from './elements/Title'

const Button = styled.button`
width: 164px;
height: 48px;
color: white;
background: ${(props) => props.theme.color[props.background] || props.theme.color.secondary};
border: none;
border-radius: 32px;
margin-top:15px;
margin-bottom:5px;
font-size: 20px;
font-family: ${({ theme }) => theme.font.light};
cursor: ${({ background }) => background === 'disabled' ? 'arrow' : 'pointer'};
&:focus {
  outline: none;
}
@media screen and (max-width:1050px) {
  width: 123px;
  height: 36px;
  font-size: 15px;
}
`


const ContentsWrapper = styled.nav`
  width:100%;
  
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 8px 12px;

  
  border-radius: 32px;
  background: white;
    
`

const Input = styled.input`
    position: relative;

    width: 70%;
    height: 48px;
    margin-bottom:5px; 

    border: solid 1px ${({ theme }) => theme.color.primary};
    background: white;
    font-size: 20px;
    font-family: ${({ theme }) => theme.font.light};
   
`
const Content = styled.div`
    display: flex;
    padding-left: 0;
    flex-direction: column;
    align-items: center;
    width:100%;
`
const SignInContents = () => {
  
  
    return (
        
        <ContentsWrapper>
       
        
        <Content>
        <Title>Sign In</Title>
        </Content>
        <Content>
        <Input placeholder="ID"/>
        </Content>
        <Content>
        <Input placeholder="PW"/>
        </Content>
        <Content>
        <Button>로그인</Button>
        </Content>
        
        </ContentsWrapper>
        
    );
};
export default SignInContents;