import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { withRouter, Link, useHistory } from "react-router-dom"
import axios from 'axios';
const Wrapper = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    padding-top: 18vh;
    text-align:center;
    justify-content: space-between;
`
const Container = styled.form`
    width:24vw;
    display:flex;
    flex-direction:column;
    background:#C4C4C4;
    text-align:center;
    @media screen and (max-width:950px) {
        width:48vw;
    }
`
const Content = styled.div`
    width: 100%;
    display: flex;
    padding-bottom:2vh;
    @media screen and (max-width:950px) {
        flex-direction:column;
        align-items: center;
    }
`
const Theme = styled.div`
    width:30%;
    font-weight:bold;
`
const Input = styled.input`
    width: 60%;
    text-align:center;
    border:none;
    outline:none;
`

const Login = () => {
    const history = useHistory()
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const isAdmin = async () => {

        const { data: response } = await axios.get('/api/auth')
        if (response.pk) {
            history.push('/home')
            window.location.reload();
        }

    }

    useEffect(() => {
        isAdmin()
    }, [])

    const onLogin = async (e) => {
        e.preventDefault()
        const { data: response } = await axios.post('/api/login', {
            id: id,
            pw: pw
        })
        if (response.result == 200) {
            alert(response.message)
            const { data: res } = await axios.get('/api/auth')
            console.log(res.pk)
            if (res.pk) {
                history.push('/home')
                window.location.reload();
            }
        } else {
            alert(response.message)
        }
    };
    const handleIDChange = e => {
        setId(e.target.value)
    }

    const handlePWChange = e => {
        setPw(e.target.value)
    }
    return (
        <Wrapper>
            <div />
            <Container onSubmit={onLogin}>
                <div style={{ padding: '2vh 0 2vh 0', fontWeight: 'bold' }}>
                    Welcome
                </div>
                <Content>
                    <Theme>Username</Theme>
                    <Input
                        type="text"
                        onChange={handleIDChange}
                        placeholder="input your username" />
                </Content>

                <Content>
                    <Theme>Password</Theme>
                    <Input
                        type="password"
                        onChange={handlePWChange}
                        placeholder="input your password" />
                </Content>
                <Content>
                    <Theme>Organization</Theme>
                    <select style={{ border: 'none', width: '61%'
                                   , textAlign: 'center', outline:'none'}}>
                        <option>ALTDOT</option>
                        <option>ALTDOT</option>
                    </select>
                </Content>
                <Content>
                    <Link to='/register' style={{
                        width: '40%', textDecoration: 'none'
                        , color: 'black', border: '0.5px solid black'
                        , background: '#DADADA', height: '3vh'
                        , alignItems: 'center', paddingTop: '0.5vh'
                        , marginLeft: '1.8vw', fontWeight: 'bold', marginBottom: '1vh'
                    }}>

                        Register

                    </Link>
                    <div style={{
                        width: '40%', textDecoration: 'none'
                        , color: 'black', border: '0.5px solid black'
                        , background: '#DADADA', height: '3vh'
                        , alignItems: 'center', paddingTop: '0.5vh'
                        , marginLeft: '1vw', cursor: 'pointer'
                        , fontWeight: 'bold'
                    }}
                        onClick={onLogin}>
                        Login
                    </div>
                </Content>
            </Container>
            <div />
        </Wrapper>
    );
};
export default Login;