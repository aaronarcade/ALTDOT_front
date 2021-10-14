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
`
const PageName = styled.div`
    width:100%;
    height:7vh;
    padding: 2vh 0 0 2vw;
    text-align:left;
    display:table-cell;
    vertical-align:middle;
    background:#3960AA;
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
    position:absolute;
    align-items:center;
    top:2vh;
    right:3vw;
    border:none;
    @media screen and (max-width:950px) {
        width:12vw;
    }
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