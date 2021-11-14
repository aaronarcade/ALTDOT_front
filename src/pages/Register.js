import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter, Link, useHistory } from "react-router-dom"
const Wrapper = styled.div`
    display: flex;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 14vh;
    text-align:center;
`
const Content = styled.div`
width:50%;
display:flex;
margin-bottom:4vh;
height:5vh;
@media screen and (max-width:950px) {
    width:80%;
}
`
const Theme = styled.div`
width: 25%;
border-top: 1px solid black;
border-left:1px solid black;
border-bottom: 1px solid black;
text-align:left;
padding-left:1vw;
font-size:2vh;
padding-top:1vh;
@media screen and (max-width:950px) {
    padding-top:0.5vh;
    font-size:1.5vh;
}
`
const Input = styled.input`
width:75%;
border: 1px solid black;
font-size:2vh;
outline:none;
padding-left:1vw;
`
const Register = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [organization, setOrganization] = useState('ATLDOT');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name || !organization ||
            !email || !username ||
            !password || !passwordCheck
            ) {
          alert("Required Field is Empty.");
          
        }
        else {
            if(password!=passwordCheck){
                alert("Password Doesn't Match.");
            }
            else{
                const { data: response } = await axios.post('http://ec2-3-141-41-167.us-east-2.compute.amazonaws.com:8001/api/signup', {
                    id: username,
                    pw: password,
                    name: name,
                    email: email,
                    organization: organization
                  })
                  if (response.result < 0) {
                    alert(response.message)
                   
                  }
                  else if (response.result > 0) {
                    alert('Register is Complete.')
                    history.push('/')
                  }
            }
        }
      }
    const onChangeName = (e) =>{
        setName(e.target.value)
    }
    const onChangeOrganization = (e) =>{
        setOrganization(e.target.value)
    }
    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const onChangeUsername = (e) =>{
        setUsername(e.target.value)
    }
    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }
    const onChangePasswordCheck = (e) =>{
        setPasswordCheck(e.target.value)
    }
    return (
        <Wrapper>
            <Content>
                <Theme>Name</Theme>
                <Input type="text"
                onChange={onChangeName}/>
            </Content>
            <Content>
                <Theme>Organization</Theme>
                <select style={{
                    width: '77%', outline: 'none'
                    , fontSize: '2vh', paddingLeft: '1vw'
                    , border:'1px solid black'
                }}
                onChange={onChangeOrganization} value={organization}>
                    <option>ATLDOT</option>
                    <option>MARTA</option>
                </select>
            </Content>
            <Content>
                <Theme>Email</Theme>
                <Input type="text"

                onChange={onChangeEmail}/>
            </Content>
            <Content>
                <Theme>Username</Theme>
                <Input type="text"
                onChange={onChangeUsername}/>
            </Content>
            <Content>
                <Theme>Password</Theme>
                <Input type="password"
                onChange={onChangePassword}/>
            </Content>
            <Content style={{marginBottom:'6vh'}}>
                <Theme>Password Check</Theme>
                <Input type="password"
                onChange={onChangePasswordCheck}/>
            </Content>
            <div style={{width:'55%',textAlign:'end'}}>
                <button style={{width:'14vh',background:'#F6B60F'
                               ,border:'1px solid black',color:'black',height:'3.5vh',
                               fontSize:'1.8vh',fontWeight:'bold',
                               cursor:'pointer'}}
                               onClick={handleSubmit}>
                    Register
                </button>
            </div>
        </Wrapper>
    );
};
export default Register;