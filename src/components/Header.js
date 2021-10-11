import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter, Link, useHistory } from "react-router-dom"
const Wrapper = styled.div`
    width:100%;
    display: flex;
    align-item:center;
    background:#CAD9CE;
`
const PageName = styled.div`
    width:100%;
    height:5vh;
    text-align:center;
    display:table-cell;
    vertical-align:middle;
    background:#CAD9CE;
    font-size:3vh;
    font-weight:bold;  
`
const MenuName = styled.div`
    
`
const LogoutButton = styled.div`
    font-size:0.9vw;
    background:#E9AF85;
    height: 3vh;
    width:6vw;
    text-align:center;
    cursor:pointer;
    position:absolute;
    top:1vh;
    right:2vw;
    @media screen and (max-width:950px) {
        width:12vw;
    }
`
const Header = () => {
    const history = useHistory();
    const [display, setDisplay] = useState('flex');
    const [pageName, setPageName] = useState('ALTDOT');
    const [haveAdmin, setHaveAdmin] = useState(0);
    const isAdmin = async () => {

        const { data: response } = await axios.get('/api/auth')
        if (response.pk) {
            setHaveAdmin(1)
        }
    }

    useEffect(() => {
        isAdmin()
    }, [])
    const onLogout = async () => {
        axios.post('/api/logout')
        history.push('/')
        window.location.reload();
    }
    return (
        <Wrapper>
            <PageName>{pageName}</PageName>
            {
                haveAdmin ?
                    <LogoutButton onClick={onLogout}>
                        Log Out
                    </LogoutButton>
                    :
                    <>
                        <div />
                    </>
            }
        </Wrapper>
    );
};
export default Header;