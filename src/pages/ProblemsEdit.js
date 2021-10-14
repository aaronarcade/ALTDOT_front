import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter, Link, useHistory } from "react-router-dom"
import ImageUpload from '../assets/images/ImageUpload.png'
const Wrapper = styled.div`
width:100%;
display:flex;
padding-top:4vh;
@media screen and (max-width:650px) {
    flex-direction:column;
}
`
const Board = styled.div`
display:flex;
flex-direction:column;
@media screen and (max-width:650px) {
    width:93% !important;
}
`
const Table = styled.table`
width:100%;
border-collapse : collapse;
border-spacing : 0;
`
const Tr = styled.tr`
width:100%;
height:5vh;
border-top: 1px solid black;
border-bottom: 1px solid black;
word-break: break-all;
`
const Td = styled.td`
text-align:center;
width:12%;
`
const Td2 = styled.td`
text-align:center;
width:12%;
border-left: 1px solid black;
border-right: 1px solid black;
`
const InputBox = styled.div`
display: flex;
width:100%;
justify-content:space-between;
margin-bottom:2vh;
`
const InputContent = styled.div`
width:45%;
display: flex;
border-collapse : collapse;
border-spacing : 0;
height: 5vh;
background: #C9C9C9;
`
const InputName = styled.div`
border:1px solid black;
width:33%;
text-align:center;
font-size:2vh;
padding-top:0.5vh;
font-weight:bold;
@media screen and (max-width:950px) {
    font-size:1vh;
}
`
const Input = styled.input`
border:1px solid black;
width:67%;
background: #C9C9C9;
padding-left:2vw;
outline:none;
font-size:2vh;
@media screen and (max-width:950px) {
    font-size:1vh;
}
`
const ProblemsEdit = () => {
    const history = useHistory();
    const [content, setContent] = useState(undefined)
    const [img, setImg] = useState(undefined)
    const [url, setUrl] = useState('')
    const addFile = (e) => {
        setContent(e.target.files[0]);
        setUrl(URL.createObjectURL(e.target.files[0]))
    };
    return (
        <Wrapper>

            <Board style={{ width: '60%', marginLeft: '3vw', marginBottom: '3vh' }}>

                <InputBox>
                    <InputContent>
                        <InputName>
                            Stop Name
                        </InputName>
                        <Input />

                    </InputContent>
                    <InputContent>
                        <InputName>
                            SID
                        </InputName>
                        <Input />

                    </InputContent>
                </InputBox>

                <InputBox style={{marginBottom:'5vh'}}>
                    <InputContent>
                        <InputName>
                            Created By
                        </InputName>
                        <Input />

                    </InputContent>
                    <InputContent>
                        <InputName>
                            Address
                        </InputName>
                        <Input />

                    </InputContent>
                </InputBox>
                <div style={{ fontSize: '3vh' }}>
                    Non-Conformance
                </div>
                <Table>
                    <Tr style={{fontWeight:'bold'}}>
                        <Td style={{ borderLeft: '1px solid black' }}>Date</Td>
                        <Td>Initiated By</Td>
                        <Td>Org</Td>
                        <Td>Type</Td>
                        <Td>Status</Td>
                        <Td style={{ width: '40%', textAlign: 'left', borderRight: '1px solid black' }}>
                            Notes
                        </Td>
                    </Tr>
                    <Tr style={{ background: '#E6E6E6' }}>
                        <Td2>Date</Td2>
                        <Td2>Initiated By</Td2>
                        <Td2>Org</Td2>
                        <Td2>Type</Td2>
                        <Td2>Status</Td2>
                        <Td2 style={{ width: '40%' }}>Notes</Td2>
                    </Tr>

                </Table>
                <button style={{
                    marginBottom: '6vh', width: '100%', height: '5vh'
                    , border: '1px solid black', background: '#C4C4C4',
                    fontWeight: 'bold', fontSize: '1vw', cursor: 'pointer'
                }}>+ Add New Request</button>

                <div style={{ fontSize: '3vh' }}>
                    Non-Conformance History
                </div>
                <Table>
                    <Tr style={{fontWeight:'bold'}}>
                        <Td style={{ borderLeft: '1px solid black' }}>Date</Td>
                        <Td>Name</Td>
                        <Td>Org</Td>
                        <Td>Type</Td>
                        <Td>Status</Td>
                        <Td style={{ width: '40%', textAlign: 'left', borderRight: '1px solid black' }}>
                            Notes
                        </Td>
                    </Tr>
                    <Tr style={{ background: '#E6E6E6' }}>
                        <Td2>Date</Td2>
                        <Td2>Initiated By</Td2>
                        <Td2>Org</Td2>
                        <Td2>Type</Td2>
                        <Td2>Status</Td2>
                        <Td2 style={{ width: '40%' }}>Notes</Td2>
                    </Tr>
                </Table>
            </Board>
            <Board style={{ width: '30%', marginLeft: '3vw' }}>
                {url ? (
                    <>
                        <img src={url} alt="#"
                            style={{
                                width: '100%', height: '42vh',
                                marginBottom: '6vh'
                            }} />
                    </>
                ) : (
                    <label for="file">
                        <img src={ImageUpload}
                            style={{
                                width: '100%', height: '42vh',
                                marginBottom: '6vh'
                            }} />
                    </label>
                )}
                <div>
                    <input type="file" id="file" onChange={addFile} style={{ display: 'none' }} />
                </div>
                <div style={{ fontSize: '3vh' }}>
                    Attached Files
                </div>
                <Table>
                    <Tr style={{fontWeight:'bold'}}>
                        <Td style={{ borderLeft: '1px solid black' }}>Date</Td>
                        <Td style={{ width: '15%' }}>Uploader</Td>
                        <Td style={{ width: '40%', textAlign: 'left', borderRight: '1px solid black' }}>
                            Notes
                        </Td>
                    </Tr>
                    <Tr style={{ background: '#E6E6E6' }}>
                        <Td2>Date</Td2>
                        <Td2 style={{ width: '15%' }}>Initiated By</Td2>
                        <Td2 style={{ width: '24%' }}>Notes</Td2>
                    </Tr>

                </Table>
                <button style={{
                    marginBottom: '6vh', width: '100%', height: '5vh'
                    , border: '1px solid black', background: '#C4C4C4',
                    fontWeight: 'bold', fontSize: '1vw', cursor: 'pointer'
                }}>+ Add New Request</button>

                <div style={{width:'100%',textAlign:'end',marginBottom:'5vh'}}>
                <button style={{width:'60%',height:'5vh',
                                fontSize:'3vh',border:'1px solid black',
                                background:'#F6B60F',fontWeight:'bold'}}>
                    Complete
                </button>
                </div>
            </Board>
        </Wrapper>
    );
};
export default ProblemsEdit;