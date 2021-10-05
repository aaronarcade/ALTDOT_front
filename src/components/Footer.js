import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top: auto;
height: 70px;
padding: 32px 64px;
align-items: center;
  background: #000000;
  
`
const Text = styled.div`
color: white;
`

const By = styled.div`
margin:-8.3px;
`
const Footer = () => {
    return (
      <By>
          <Container>
          
          <Text>Room 326, Mirae Hall, SeoulTech, 232 Gongreung-ro, Nowon-gu, Seoul, Korea. </Text>
          </Container>
      </By>
        
      
    )
  }
  
  export default Footer