import React from "react";
import styled from "styled-components";


const Container = styled.div`
position: absolute;
left: 50%;
top: 0;
width: 100%;
transform: translateX(-50%);

`
const Img = styled.img`
width: 100%;
height:420px;

`
const Page = ({ image }) => {
  return (
    <Container>
        <Img src={image}/>
    </Container>
      
  );
};

export default Page;