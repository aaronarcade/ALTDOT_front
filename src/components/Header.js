import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter, Link, useHistory } from "react-router-dom"
const Wrapper = styled.div`
    width:100%;
    display: flex;
    align-item:center;
    background:#3960AA;
    justify-content:space-between;
`
const PageName = styled.div`
    height:7vh;
    padding: 2vh 0 0 2vw;
    text-align:left;
    vertical-align:middle;
    color:#ffffff;
    font-size:3vh;
    font-weight:bold;
    font-family:${({ theme }) => theme.font.title};  
`

const LogoutButton = styled.button`
    font-size:0.9vw;
    background:#C4C4C4;
    height: 5vh;
    width:9vw;
    text-align:center;
    cursor:pointer;
    
    align-items:center;
    margin: 2vh 3vw 0 0;
    border:none;
    @media screen and (max-width:950px) {
        width:12vw;
    }
`
const MenuContainer = styled.div`
width: 32vw;
display:flex;
margin: 2.4vh 0 0 0;
justify-content:space-between;
`
const MenuContent = styled.div`
color:white;
font-family:${({ theme }) => theme.font.title};  
font-size:2.2vh;
`
const Header = () => {
    const history = useHistory();
    const [display, setDisplay] = useState('flex');
    const [pageName, setPageName] = useState('City of Atlanta');
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
        await axios.post('/api/logout')
        history.push('/')
        window.location.reload();
    }
    return (
        <Wrapper>
            <PageName>{pageName}</PageName>
           
            {
                haveAdmin ?
                    <>
                        <MenuContainer>
                        <Link to='/problems'style={{textDecoration:'none'}}>
                            <MenuContent>Issues</MenuContent>
                        </Link>
                        <Link to='/suggestions' style={{textDecoration:'none'}}>
                            <MenuContent>Request</MenuContent>
                        </Link>
                        <Link to='/help' style={{textDecoration:'none'}}>
                            <MenuContent>Help</MenuContent>
                        </Link>
                        </MenuContainer>
                        <LogoutButton onClick={onLogout}>
                            Log Out
                        </LogoutButton>
                    </>
                    :
                    <>
                        <div />
                    </>
            }
        </Wrapper>
    );
};
export default Header;