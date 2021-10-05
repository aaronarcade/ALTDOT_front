import React, {useState, useCallback} from 'react'
import styled from 'styled-components'
import Logo from '../asset/image/Ice Lab Logo_var1.png'
import { Link } from "react-router-dom"
import { HamburgerButton } from 'react-hamburger-button'
import SignInContents from './SignInContents'


const Container = styled.nav`
position: fixed;

z-index: 999;
justify-content: space-between;
display: flex;
align-items: center;
padding-top:15px;
padding-bottom:15px;
left:10%;
right:10%;

  background: #ffffff;
  box-shadow: 0px 10px 40px #00000029;
  border-radius: 32px;

  @media screen and (max-width:950px) {
    flex-direction:column;
    left:0;
    right:0;
    top:0;
    border-radius: 0;
    align-items: flex-start;
    padding: 8px 24px;
  }
`


const Categories = styled.div`
  
  display:flex;
  padding-left: 0;

  @media screen and (max-width:950px) {
    flex-direction:column;
    align-items:center;
    width:100%;
    display: ${props => props.display};
  }
`

const Category = styled.button`

font-size: 100%;
font-family: ${({ theme }) => theme.font.medium};
  text-decoration: none;
  color: black;
  border: none;
  background: none;
  cursor: pointer;
  outline: 0;
  &:hover {
    color: #4a69bd;
  }

  padding: 8px 32px;

  @media screen and (max-width:950px) {

    
  }
`

const LogCategories = styled.div`
 display: flex;
  padding-right: 24px;

  @media screen and (max-width:950px) {
    flex-direction:column;
    align-items:center;
    width:100%;
    display: ${props => props.display};
  }
`
const LogCategory = styled.button`
padding: 8px 12px;

font-family: ${({ theme }) => theme.font.medium};
  text-decoration: none;
  color: black;
  border: none;
  background: none;
  cursor: pointer;
  
outline: 0;
&:hover {
  color: #4a69bd;
}

@media screen and (max-width:950px) {

    
}
`

const Img = styled.img`
  width: 66.3px;
  height: 43.9px;
  padding-left: 48px;
  
  @media screen and (max-width:950px) {

    
  }
`
const Menubutton = styled.button`
border: none;
background: none;
cursor: pointer;
position: absolute;
right:32px;
display: none;
padding-top:12px;
@media screen and (max-width:950px) {
  display: block;
  
}
`



const ModalContainer = styled.div`

    position: fixed;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    display: ${props => props.modal};
    justify-content: center;
    align-items: center;
    
`
const ModalOverlay = styled.div`
    background-color: black;
    width:100%;
    height: 100%;
    position: absolute;
    opacity: 0.2;
`
const ModalContent = styled.div`
box-shadow: 0px 10px 40px #00000029;
background-color:white;

position: relative;
border-radius: 32px;
width:30%;

top: 0;
align-items: center;
@media screen and (max-width:950px) {
  width:40%;
  
}
`

const XButton = styled.button`
width: 36px;
height: 36px;
color: ${(props) => props.theme.color[props.background] || props.theme.color.secondary};
background: white;
border: none;
border-radius: 32px;
font-size: 20px;
right: 0;
top: 2px;
position: absolute;
font-family: ${({ theme }) => theme.font.thin};
cursor: ${({ background }) => background === 'disabled' ? 'arrow' : 'pointer'};
&:focus {
  outline: none;
}
@media screen and (max-width:950px) {
  width: 36px;
  height: 36px;
  font-size: 15px;
}
`

const Header = () => {
    const [display, setDisplay] = useState("none");
    const [modal, setModal] = useState("none");

    const handleDisplay = () => {
      if(display=="none"){
          setDisplay("flex")
      }
      else{
          setDisplay("none")
      }
    };
    
    const btnDisplay = () => {
        if(display=="flex"){
          setDisplay("none");
        }
    };



   const handleModal = () => {
      if(modal=="none"){
          setModal("flex");
      }
      else{
        setModal("none");
      }
    };

    return (
        
      
      <Container>
        
        <Img src= {Logo} /> 
            <Categories display={display}>
              <Link to="/" ><Category onClick={btnDisplay}>Home</Category></Link>
              <Link to="/research"><Category onClick={btnDisplay}>Research</Category></Link>
              <Link to="/member"><Category onClick={btnDisplay}>Members</Category></Link>
              <Link to="/paper"><Category onClick={btnDisplay}>Paper</Category></Link>
              <Link to="/timeline"><Category onClick={btnDisplay}>TimeLine</Category></Link>
            </Categories>
            <LogCategories display={display}>
            <LogCategory onClick={handleModal}>Sign in</LogCategory>

            </LogCategories>
            <Menubutton onClick={handleDisplay}>
            <HamburgerButton 
            width={23}
            height={15}
            color= '#4a69bd'
            strokeWidth={3}
            />
            </Menubutton> 


            <ModalContainer modal={modal}>
            <ModalOverlay onClick={handleModal}/>
            <ModalContent>
            <XButton onClick={handleModal}>
                ×
            </XButton>
                <SignInContents/>
                  
             
            </ModalContent>
         </ModalContainer>






        </Container>  
         
    )
  }
  
  export default Header
 