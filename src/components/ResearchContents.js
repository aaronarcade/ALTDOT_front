import React from 'react'
import Title from './elements/Title'

import Lines from './elements/Lines';
import styled from 'styled-components';
import Iot from '../asset/image/IoT.jpg'
import SG from '../asset/image/smartgrid.jpg'
import NGN from '../asset/image/ngn.jpg'
import Lines2 from './elements/Lines2';

const ContentsWrapper = styled.div`
  width: 70%;
  padding: 64px 64px 0;
  margin-bottom: 98px;
  margin-top: 278px;
 
  
  box-shadow: 0px 10px 40px #00000029;
  border-radius: 32px;
  background: #FDFDFD;
`

const Container = styled.nav`
padding-top:30px;
margin-bottom: 52px;
display: flex;
padding 8px 12px;
width:90%;
@media screen and (max-width:1050px) {
    flex-direction: column;
    
}
`
const IotPic = styled.img`
width:400px;
height:250px;
@media screen and (max-width:512px) {
    width:240px;
    height:123.33px;
}
`
const SmartGridPic = styled.img`
width:400px;
height:320px;
@media screen and (max-width:512px) {
    width:240px;
    height: 192px;
}
`
const NGNPic = styled.img`
width:400px;
height:266.5625px;
@media screen and (max-width:512px) {
    width:240px;
    height: 159.9375px;
}
`

const Contents = styled.div`
padding-left: 24px;
`
const ResearchName = styled.div`

font-family: ${({ theme }) => theme.font.Medium};
font-size: 32px;
padding-bottom: 14px;
`
const ResearchExplain = styled.div`
font-size: 20px;
`

const ResearchContents = () => {
    return (

        <ContentsWrapper>
            
        <Title>Research</Title>
        <Lines />

        <Container>
        <IotPic src = {Iot}/>
        <Contents>
            
        <ResearchName>Internet of Things</ResearchName>
        
        <ResearchExplain>
        The Internet of Things(IoT) describes the network of physical objects—“things”—that are embedded with sensors, 
        software, and other technologies for the purpose of connecting and exchanging data with other devices and systems 
        over the Internet. The IoT presents new opportunities and challenges due to its scale and dynamic nature. 
        </ResearchExplain>
        </Contents>
        </Container>

        <Lines2/>

        <Container>
            <SmartGridPic src = {SG}/>
            <Contents>
            <ResearchName>Smart Grid</ResearchName>
        <ResearchExplain>
        The smart grid is an intelligent power grid system 
        that incorporates information and communication technology 
        into the production, transportation and consumption processes of 
        electricity and increases efficiency through interaction between suppliers and consumers.
        </ResearchExplain>
        </Contents>
        </Container>

        <Lines2/>

        <Container style={{marginBottom: '54px'}}>
            <NGNPic src = {NGN}/>
            <Contents>
            <ResearchName>Next Generation Network</ResearchName>
        <ResearchExplain>
        In recent years, we have experienced a tremendous evolution 
        of information and communication technology with major innovations 
        in mobile networks. The wireless data rates have doubled every 18 
        months over the last three decades and the wireless terabit-per-second
         (Tbps) links will become a reality soon. To support current and emerging 
         mobile services, we need to move to next generation network (beyond 5G) .


        </ResearchExplain>
        </Contents>
        </Container>

        </ContentsWrapper>
    );
};
export default ResearchContents;