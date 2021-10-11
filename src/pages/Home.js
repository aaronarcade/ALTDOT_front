import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { withRouter, Link, useHistory } from "react-router-dom"
import axios from 'axios';

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
    const history = useHistory();
    const [display, setDisplay] = useState('flex');
    const isAdmin = async () => {

        const { data: response } = await axios.get('/api/auth')
        if (!response.pk) {
            history.push('/')
        }
    }

    useEffect(() => {
        isAdmin()
    }, [])
    return (
        <Wrapper>
            home
        </Wrapper>
    );
};
export default Home;