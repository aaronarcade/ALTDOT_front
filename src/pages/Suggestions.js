import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { withRouter, Link, useHistory } from "react-router-dom"
import axios from 'axios';
import imagesrc from '../assets/images/FileUpload.png'
import Bigarrow from '../assets/images/BigArrow.png'
const Wrapper = styled.div`
    display: flex;
    width:100%;
    padding-top:2vh;
    justify-content: space-between;
    min-width:600px;
`
const Board = styled.div`
width:45%;

`
const Img = styled.img`
width:1vw;
height:1.3vw;
`
const SearchBar = styled.input`
width:80%;
border:1px solid black;
outline:none;
`
const Table = styled.table`
width:100%;
border-collapse : collapse;
border-spacing : 0;
`
const Tr = styled.tr`
width:100%;
height:5vh;
border-bottom: 1px solid black;
word-break: break-all;
`
const SID = styled.td`
width:10%;
text-align:center;
border-left: 1px solid black;
font-size:1vw;
`
const Tier = styled.td`
width:13%;
text-align:center;
font-size:1vw;
`
const RidershipQuintile = styled.td`
width:17%;
text-align:center;
font-size:1vw;
`
const StopName = styled.td`
width:20%;
text-align:center;
font-size:1vw;
`
const Suggestions = styled.td`
width:23%;
text-align:center;
font-size:1vw;
`
const Modify = styled.td`
width:17%;
text-align:center;
border-left: 1px solid black;
border-right: 1px solid black;
font-size:1vw;
`
const Button = styled.button`
border-radius: 0.5vw;
border:none;
width:4vw;
height:3vh;
font-weight:bold;
font-size:0.8vw;
cursor:pointer;
@media screen and (max-width:950px) {
    width:6vw;
}
@media screen and (max-width:650px) {
    width:10vw;
}
`
const BigArrow = styled.img`
width:80%;
margin:16vh 0 10vh 0;
`
const SuggestionsPage = () => {
    const history = useHistory();
    const [display, setDisplay] = useState('flex');
    // const isAdmin = async () => {

    //     const { data: response } = await axios.get('/api/auth')
    //     if (!response.pk) {
    //         history.push('/')
    //     }
    // }

    // useEffect(() => {
    //     isAdmin()
    // }, [])
    return (
        <Wrapper>
            <Board style={{ marginLeft: '2vw' }}>
                <div style={{
                    width: '100%', display: 'flex'
                    , justifyContent: 'space-between', paddingBottom: '0.5vh'
                }}>
                    <Img src={imagesrc}/>
                    <div style={{
                        width: '60%'
                        , display: 'flex', justifyContent: 'space-between'
                    }}>
                        <div style={{ fontSize: '1vw' }}>Search</div>
                        <SearchBar />
                    </div>
                </div>
                <Table>
                    <Tr style={{ height: '6vh', fontWeight: 'bold' }}>
                        <SID style={{ border: '1px solid black' }}>SID</SID>
                        <Tier style={{ border: '1px solid black' }}>Tier</Tier>
                        <RidershipQuintile style={{ border: '1px solid black' }}>
                            Ridership<br />Quintile
                        </RidershipQuintile>
                        <StopName style={{ border: '1px solid black' }}>Stop Name</StopName>
                        <Suggestions style={{ border: '1px solid black' }}>Suggestions</Suggestions>
                        <Modify style={{ border: '1px solid black' }}>Modify</Modify>
                    </Tr>
                    <Tr>
                        <SID>168901</SID>
                        <Tier>3</Tier>
                        <RidershipQuintile>5</RidershipQuintile>
                        <StopName>Godby Rd</StopName>
                        <Suggestions>n/a</Suggestions>
                        <Modify>
                            <Button style={{color:'black',background:'#F6B60F'}}
                            >Add</Button>
                        </Modify>
                    </Tr>
                </Table>
            </Board>
            <div style={{ width: '5%',display:'flex',
                          flexDirection:'column',alignItems:'center'}}>
                    <BigArrow src={Bigarrow}/>
                    <BigArrow src={Bigarrow}/>
            </div>
            <Board style={{ marginRight: '2vw' }}>
                <div style={{
                    width: '100%', display: 'flex'
                    , justifyContent: 'space-between', paddingBottom: '0.5vh'
                }}>
                    <Img />
                    <div style={{
                        width: '60%'
                        , display: 'flex', justifyContent: 'space-between'
                    }}>
                        <div style={{ fontSize: '1vw' }}>Search</div>
                        <SearchBar />
                    </div>
                </div>
                <Table>
                    <Tr style={{ height: '6vh', fontWeight: 'bold' }}>
                        <SID style={{ border: '1px solid black' }}>SID</SID>
                        <Tier style={{ border: '1px solid black' }}>Tier</Tier>
                        <RidershipQuintile style={{ border: '1px solid black' }}>
                            Ridership<br />Quintile
                        </RidershipQuintile>
                        <StopName style={{ border: '1px solid black' }}>Stop Name</StopName>
                        <Suggestions style={{ border: '1px solid black' }}>Suggestions</Suggestions>
                        <Modify style={{ border: '1px solid black' }}>Modify</Modify>
                    </Tr>
                    <Tr>
                        <SID>168904</SID>
                        <Tier>2</Tier>
                        <RidershipQuintile>4</RidershipQuintile>
                        <StopName>Virgina Ave.</StopName>
                        <Suggestions>
                        <Button style={{color:'white',background:'#107E7D',marginRight:'0.1vw'}}
                            >Shelter</Button>
                            <Button style={{color:'white',background:'#107E7D',marginLeft:'0.1vw'}}
                            >Bench</Button>
                        </Suggestions>
                        <Modify>
                            <Button style={{color:'black',background:'#F6B60F'}}
                            > {'>'} </Button>
                        </Modify>
                    </Tr>
                </Table>
            </Board>
        </Wrapper>
    );
};
export default SuggestionsPage;