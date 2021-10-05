import React from 'react'
import styled from 'styled-components'
import Welcome from "../asset/image/WelcomeIceLabPic.png"

const Title = styled.h2`
  font-size: 34px;
  font-family: ${({ theme }) => theme.font.regular};
  color: black;
  cursor: default;
  @media screen and (max-width:1050px) {
    font-size: 24px;
  }
  @media screen and (max-width:512px) {
    font-size:18px;
    
}
`

const ContentsWrapper = styled.div`
  width: 80%;
  padding: 64px 64px 0;
  margin-bottom: 98px;
  margin-top: 258px;
  left:5%;
  right:5%;
  
  box-shadow: 0px 10px 10px #00000020;
  background: #ffffff;
`
const Content = styled.nav`
padding-top:30px;
    margin-bottom: 52px;
    display: flex;
    padding 8px 12px;
    @media screen and (max-width:1100px) {
        flex-direction: column;
        
    }
`
const WelcomePic = styled.img`
    width: 640px;
    height:360px;
    @media screen and (max-width:768px) {
        width: 426px;
        height:240px;
        
    }
    @media screen and (max-width:512px) {
        width: 320px;
        height:180px;
        
    }
`

const Strong = styled.strong`
color: ${({ theme }) => theme.color.background};
`

const WelcomeExplain = styled.div`

`
const WelcomeLooking = styled.h4`
font-size:25px;
`
const WelcomeJoin = styled.div`
font-size:21px;
padding-bottom:20px;
`
const WelcomeContact = styled.div`
font-size:18px;
`
const HomeContents = () => {
   
    return (
       <ContentsWrapper>
           <Title><Strong>I</Strong>ntelligent <Strong>C</Strong>ommunication, 
           <Strong> C</Strong>omputing and <Strong>E</Strong>nergy Lab.</Title>
            <Content>

            <WelcomePic src={Welcome}/>

            <WelcomeExplain>
            <WelcomeLooking>
            ICE lab is looking for awesome
             undergraduate and graduate students.
            </WelcomeLooking>
            <WelcomeJoin>
            If you are interested in intelligent computing, 
            communications, IoT and smart grid networks, please 
            join our lab as soon as possible! 
            </WelcomeJoin>
            <WelcomeContact>
            (contact: lhpark at seoultech.ac.kr)
            </WelcomeContact>
            </WelcomeExplain>

            </Content>
       </ContentsWrapper>
       
        
    );
};
export default HomeContents;