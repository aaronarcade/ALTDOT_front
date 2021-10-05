import React, { useEffect, useState, useContext } from 'react';
import Lines from './elements/Lines';
import Title from './elements/Title'
import Button from './elements/Button'

import styled from 'styled-components'


const ContentsWrapper = styled.div`
  width: 50%;
  padding: 64px 64px 0;
  margin-bottom: 98px;
  
  left:5%;
  right:5%;
  
  box-shadow: 0px 10px 40px #00000029;
  border-radius: 32px;
  background: #FDFDFD;
`

const Input = styled.input`
  position: relative;
  width: 300px;
  height: 48px;
  border: solid 1px ${({ theme }) => theme.color.primary};
  background: white;
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.light};
  padding-left: 8px;
  &:focus {
    outline: none;
  }
  
`;

const Form = styled.div`
    & > * {
        margin-top: 32px;
    }
    & > *:last-child {
        margin-bottom: 64px;
    }
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
   

`

const Content = styled.div`
    width:100%;
    
`
const SignUpContents = () => {

    const [id,setId] = useState('');
    const [checkId, setCheckId] = useState('') //id 중복확인
    const [checkEmail, setCheckEmail] = useState('') //email 중복확인
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [passwordError,setPasswordError] = useState(false); //pw 확인과 같은지
    const [passwordViolate, setPasswordViolate] = useState('') //pw reg
    const [email,setEmail] = useState('');
    const [emailViolate, setEmailViolate] = useState('') //email reg
    const [checkSignUp, setCheckSignUp] = useState(false) //회원가입 가능한지
    const [name, setName] = useState('')

    

    

    useEffect(() => {
        setPasswordError(password !== passwordCheck)
    }, [password, passwordCheck])

    useEffect(() => {
        if (
            id.length === 0 ||
            password.length === 0 ||
            passwordCheck.length === 0 ||
            name.length === 0 ||
            email.length === 0 ||
            checkId !== '사용 가능한 ID입니다.' ||
            checkEmail !== '사용 가능한 E-MAIL입니다.' ||
            passwordError ||
            passwordViolate.length !== 0 ||
            emailViolate.length !== 0
        ) {
            setCheckSignUp(false)
        } else {
            setCheckSignUp(true)
        }
    })

    // Coustom Hook 이전
    const onChangeId = (e) => {
        setId(e.target.value)
        setCheckId('')
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
        checkEmailViolate(e.target.value)
        setCheckEmail('')
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value)
        checkViolate(e.target.value)
    };
    const onChangePasswordChk = (e) => {
        setPasswordCheck(e.target.value)
    };
    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const checkViolate = pw => {
        const reg = /^(?=.*?[\w])(?=.*?[\d])(?=.*?[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]).{8,20}$/
        if (pw.length === 0) {
            setPasswordViolate('')
        } else if (!reg.test(pw)) {
            setPasswordViolate('비밀번호 생성 규칙에 맞지 않습니다.')
        } else {
            setPasswordViolate('')
        }
    }

    const checkEmailViolate = em => {
        const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
        if (em.length === 0) {
            setEmailViolate('')
        } else if (!reg.test(em)) {
            setEmailViolate('이메일 규칙에 맞지 않습니다.')
        } else {
            setEmailViolate('')
        }
    }

  

    
    
    return (
        <ContentsWrapper>
            <Title>
            SIGN UP
            </Title>
            <Lines/>
            <Form>
                <Content>
                    <label htmlFor="user-id">ID*</label><br/>
                    <Input name="user-id" value={id} placeholder="ID" required onChange={onChangeId} />
                    <Button  style={{marginLeft: '16px'}}>중복 확인</Button>
                    <div>{checkId}&nbsp;</div>
                </Content>
                <Content>
                    <label htmlFor="user-password">PW (영문 대소문자/숫자/특수문자 혼용 8자 이상, 20자 이하여야 합니다.)*</label><br/>
                    <Input name="user-password" type="password" value={password} placeholder="PW" required onChange={onChangePassword} />
                    <div style={{color : 'red'}}>{passwordViolate}&nbsp;</div>
                </Content>
                <Content>
                    <label htmlFor="user-password-check">RE-ENTER PW*</label><br/>
                    <Input name="user-password-check" type="password" value={passwordCheck} placeholder="PW" required onChange={onChangePasswordChk} />
                    {passwordError ? <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div> : <div>&nbsp;</div>}
                </Content>
                <Content>
                    <label htmlFor="user-name">이름*</label><br/>
                    <Input name="user-name" value={name} placeholder="이름" required onChange={onChangeName} /><br /><br />
                </Content>
                <Content>
                    <label htmlFor="user-email">E-MAIL*</label><br/>
                    <Input name="user-email" value={email} placeholder="EMAIL@GMAIL.COM" required onChange={onChangeEmail} />
                    <Button  style={{marginLeft: '16px'}}>중복 확인</Button>
                    <div>{emailViolate}&nbsp;</div>
                    <div>{checkEmail}&nbsp;</div>
                </Content>
                <br />
                <Content>
                    <Button type="primary" htmlType="submit" background={checkSignUp ? 'primary' : 'disabled'} >가입하기</Button>
                </Content>
            </Form>
        </ContentsWrapper>
    );
}

export default SignUpContents;