import React from 'react'
import styled from 'styled-components'
import HomeContents from '../components/HomeContents';
import { useEffect, useState } from 'react';
import IceLab from '../asset/image/WelcomeIceLabPic.png'
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 218px;
    
`
const Img = styled.img`
z-index:999;
position:absolute;
width:100%;
height:100%;
top:0;
transition: all 0.5s ease-in;
display: none
`

const Home = () => {
    
    const [display, setDisplay] = useState('flex');
    
    return (
              <Wrapper>
                  <Img src={IceLab}/>
                  <HomeContents/>
              </Wrapper> 
    );
};
export default Home;