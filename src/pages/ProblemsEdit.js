import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import '../styles/style.css'
import axios from 'axios';
import { withRouter, Link, useHistory, useParams } from "react-router-dom"
import ImageUpload from '../assets/images/ImageUpload.png'
import $ from 'jquery'
import DeletePic from '../assets/images/delete.png'
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
const BusInfor = styled.div`
border:1px solid black;
width:67%;
background: #C9C9C9;
padding-left:2vw;
outline:none;
font-size:2vh;
padding-top:0.7vh;
align-items:center;
@media screen and (max-width:950px) {
    font-size:1vh;
}
`
const Input = styled.input`
border:1px solid black;
width:67%;
background: #C9C9C9;
outline:none;
font-size:2vh;
@media screen and (max-width:950px) {
    font-size:1vh;
}
`
const ProblemsEdit = () => {
    const history = useHistory();
    const params = useParams();
    const [content, setContent] = useState(undefined)
    const [img, setImg] = useState(undefined)
    const [url, setUrl] = useState('')

    const [saveImg, setSaveImg] = useState('');

    const [notComList, setNotComList] = useState([])//?????? ?????????
    const [notComCount, setNotComCount] = useState(0)
    const [comList, setComList] = useState([]);//?????? ?????????
    const [loading, setLoading] = useState(false);
    const [stopName, setStopName] = useState('')
    const [stopId, setStopId] = useState('')
    const [createBy, setCreateBy] = useState('');


    const [date, setDate] = useState('')
    const [initiated, setInitiated] = useState('')
    const [org, setOrg] = useState('')
    const [formData] = useState(new FormData())

    const [pushCom, setPushCom] = useState([]);//???????????? ?????? ?????????

    const isAdmin = async () => {

        const { data: response } = await axios.get('/api/auth')
        if (!response.pk) {
            history.push('/')
        }
    }

    useEffect(() => {
        isAdmin()
    }, [])
    useEffect(() => {
        async function fetchPosts() {
            setLoading(true);
            const { data: response } = await axios.get(`/api/onestation/${params.id}/MARTA`);
            if (response.data.modify == 0) {
                history.push('/problems')
                setLoading(false);
            }
            else {
                setStopName(response.data.stop_name);
                setStopId(response.data.stop_id)
                setCreateBy(response.data.create_by)
                let today = new Date();
                let month = today.getMonth() + 1;
                let date = today.getDate();
                const { data: res } = await axios.get('/api/auth')
                setDate(month + '/' + date)
                setInitiated(res.name)
                setOrg(res.organization)

                //on hold??? in progress
                const { data: reslistnotcom } = await axios.get(`/api/problems/${params.id}?status=NotCom`)

                let arr = [];
                arr = reslistnotcom.data;
                console.log(arr)
                for (var i = 0; i < reslistnotcom.data.length; i++) {
                    arr[i].count = i;
                    if (arr[i].firsttype == 'Other') {
                        arr[i].display = ''
                    }
                    else {
                        arr[i].display = 'none'
                    }
                }
                console.log(arr)
                setNotComList(arr)
                //complete
                const { data: reslistcom } = await axios.get(`/api/problems/${params.id}?status=Complete`)
                setComList(reslistcom.data);
                console.log(comList)
                const { data: resimg } = await axios.get(`/api/image/${params.id}/MARTA`)
                if (resimg.data) {
                    setSaveImg(resimg.data.image_src)
                }
                setLoading(false);
            }
        }
        fetchPosts()
    }, [])

    const addFile = (e) => {
        setContent(e.target.files[0]);
        setUrl(URL.createObjectURL(e.target.files[0]))
    };
    const onChangeCreateBy = (e) => {
        setCreateBy(e.target.value)
    }

    const upLoad = async (e) => {
        e.preventDefault()
        let count = 0;
        if (!createBy && !notComList.length && !url && !saveImg) {
            axios.post('/api/stopmodify', {
                pk: params.id,
                org: 'MARTA'
            })
        }
        else {
            if (url !== '') {
                let currentFile = content
                setImg(currentFile)
                formData.append("image", currentFile)
                formData.append("pk", params.id)
                formData.append("org", 'MARTA')
                const config = {
                    header: {
                        'Content-type': 'multipart/form-data; charset=UTF-8',
                        'Accept': '*/*'
                    }
                }
                const response = await axios.post('/api/addimage', formData, config)
            }

            if (notComList.length) {
                for (var i = 0; i < notComList.length; i++) {
                    if (notComList[i].status != 'Complete') {
                        break;
                    }
                }
                let string = JSON.stringify(notComList);

                console.log(notComList)
                const response = await axios.post('/api/addproblem', {
                    pk: params.id,
                    list: string
                })
                if (i == notComList.length) {

                    const { data: response } = await axios.post('/api/stopmodify', {
                        pk: params.id,
                        org: 'MARTA'
                    })
                }
            }
            else {
                const { data: response } = await axios.post('/api/stopmodify', {
                    pk: params.id,
                    org: 'MARTA'
                })
            }
            const response = await axios.post('/api/updatecreate', {
                create: createBy,
                pk: params.id,
                org: 'MARTA'
            })
            alert('Complete save.')
        }

        history.push('/problems')
    }

    const onChange = (e) => {
        let { value, name } = e.target;
        console.log(value)
        console.log(name)
        let count;
        if (name.substring(0, 4) == 'type' || name.substring(0, 4) == 'note' || name.substring(0, 4) == 'inpu') {
            count = parseInt(name.substring(4, name.length))
            let arr = notComList
            console.log(notComList)
            console.log(arr)
            if ($(`select[name=type${count}]`).val() == 'Other') {
                $(`input[name=inpu${count}]`).css("display", "");
                arr[count].type = $(`input[name=inpu${count}]`).val()
                arr[count].status = $(`select[name=status${count}]`).val()
                arr[count].notes = $(`textarea[name=note${count}]`).val()
            }
            else {
                $(`input[name=inpu${count}]`).css("display", "none");
                arr[count].type = $(`select[name=type${count}]`).val()
                arr[count].status = $(`select[name=status${count}]`).val()
                arr[count].notes = $(`textarea[name=note${count}]`).val()
            }
            console.log($(`select[name=type${count}]`).val())
            console.log(arr)
        }
        else {
            count = parseInt(name.substring(6, name.length))
            if (value == 'On Hold' || value == 'In Progress' || value == 'Requested') {
                let arr = notComList
                if ($(`select[name=type${count}]`).val() == 'Other') {
                    arr[count].type = $(`input[name=inpu${count}]`).val()
                    arr[count].status = $(`select[name=status${count}]`).val()
                    arr[count].notes = $(`textarea[name=note${count}]`).val()
                }
                else {
                    arr[count].type = $(`select[name=type${count}]`).val()
                    arr[count].status = $(`select[name=status${count}]`).val()
                    arr[count].notes = $(`textarea[name=note${count}]`).val()
                }
                console.log(arr)
            }
            else if (value == 'Complete') {
                if (!$(`textarea[name=note${count}]`).val()) {
                    alert('Do not leave spaces')
                    $(`select[name=status${count}]`).val('Requested')
                }
                else {
                    let arr = notComList
                    if ($(`select[name=type${count}]`).val() == 'Other') {
                        arr[count].type = $(`input[name=inpu${count}]`).val()
                        arr[count].status = $(`select[name=status${count}]`).val()
                        arr[count].notes = $(`textarea[name=note${count}]`).val()
                    }
                    else {
                        arr[count].type = $(`select[name=type${count}]`).val()
                        arr[count].status = $(`select[name=status${count}]`).val()
                        arr[count].notes = $(`textarea[name=note${count}]`).val()
                    }
                    console.log(arr)
                }
            }
            else {
                alert('status error')
            }
        }

    }
    function deleteNote(num) {
        axios.post('/api/deleteproblem', {
            pk: num
        })
        window.location.reload()
    }


    return (
        <Wrapper>
            {loading ?
                <div style={{ width: '100%', textAlign: 'center' }}>loading...</div>
                :
                <>
                    <Board style={{ width: '60%', marginLeft: '3vw', marginBottom: '3vh' }}>



                        <InputBox>
                            <InputContent>
                                <InputName>
                                    Stop Name
                                </InputName>
                                <BusInfor>
                                    {stopName}
                                </BusInfor>

                            </InputContent>
                            <InputContent>
                                <InputName>
                                    SID
                                </InputName>
                                <BusInfor>
                                    {stopId}
                                </BusInfor>

                            </InputContent>
                        </InputBox>

                        <InputBox style={{ marginBottom: '5vh' }}>
                            <InputContent>
                                <InputName>
                                    Created By
                                </InputName>
                                <Input value={createBy} onChange={onChangeCreateBy} style={{ paddingLeft: '2vw' }} />

                            </InputContent>

                        </InputBox>
                        <div style={{ fontSize: '3vh' }}>
                            Issues
                        </div>
                        <Table>
                            <Tr style={{ fontWeight: 'bold' }}>
                                <Td style={{ borderLeft: '1px solid black' }}>Date</Td>
                                <Td>Initiated By</Td>
                                <Td>Org</Td>
                                <Td>Type</Td>
                                <Td>Status</Td>
                                <Td style={{ width: '40%', textAlign: 'left', borderRight: '1px solid black' }}>
                                    Notes
                                </Td>
                            </Tr>

                            {notComList && notComList.map(post => (
                                <Tr style={{ background: '#E6E6E6' }}>
                                    <Td2>{post.date ?
                                        post.date
                                        :
                                        <>
                                            {date}
                                        </>
                                    }</Td2>
                                    <Td2>{post.name ?

                                        post.name
                                        :
                                        <>
                                            {initiated}
                                        </>
                                    }</Td2>
                                    <Td2>{
                                        post.organization ?

                                            post.organization
                                            :
                                            <>
                                                {org}
                                            </>
                                    }</Td2>
                                    <Td2>
                                        <select style={{
                                            width: '100%', fontSize: '1vw',
                                            background: '#E6E6E6', border: 'none',
                                            outline: 'none'
                                        }}
                                            name={`type${post.count}`}
                                            onChange={onChange} defaultValue={`${post.firsttype}`}>

                                            <option>Curb Conflict</option>
                                            <option>Sidewalk Improv</option>
                                            <option>Sidewalk Conn</option>
                                            <option>ADA</option>
                                            <option>ROW</option>
                                            <option>Streetlight</option>
                                            <option>Crossing</option>
                                            <option>Vegetation</option>
                                            <option>Construction</option>
                                            <option>Trash</option>
                                            <option>Homeless</option>
                                            <option>Other</option>

                                        </select>
                                        <input onChange={onChange} defaultValue={`${post.type}`} name={`inpu${post.count}`} style={{ display: `${notComList[post.count].display}`, width: '85%' }} />
                                    </Td2>
                                    <Td2>
                                        <select style={{
                                            width: '100%', fontSize: '1vw',
                                            background: '#E6E6E6', border: 'none',
                                            outline: 'none'
                                        }} name={`status${post.count}`}
                                            onChange={onChange}>
                                            {
                                                notComList[post.count].firststatus == 'On Hold' ?
                                                    <>
                                                        <option>Requested</option>
                                                        <option selected>On Hold</option>
                                                        <option>In Progress</option>
                                                        <option>Complete</option>
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            notComList[post.count].firststatus == 'In Progress' ?
                                                                <>
                                                                    <option>Requested</option>
                                                                    <option>On Hold</option>
                                                                    <option selected>In Progress</option>
                                                                    <option>Complete</option>
                                                                </>
                                                                :
                                                                <>

                                                                    <option selected>Requested</option>
                                                                    <option>On Hold</option>
                                                                    <option>In Progress</option>
                                                                    <option>Complete</option>

                                                                </>
                                                        }
                                                    </>
                                            }

                                        </select>
                                    </Td2>
                                    <Td2 style={{ width: '40%' }}>
                                        <textarea className="box" style={{ background: '#E6E6E6', border: 'none', width: '90%', outline: 'none' }}
                                            name={`note${post.count}`} type="text" onChange={onChange} defaultValue={post.notes} />
                                    </Td2>
                                </Tr>
                            ))}
                        </Table>

                        <button style={{
                            marginBottom: '6vh', width: '100%', height: '5vh'
                            , border: '1px solid black', background: '#C4C4C4',
                            fontWeight: 'bold', fontSize: '1vw', cursor: 'pointer',
                            display: ``
                        }}
                            onClick={() => {
                                let arr = [];
                                for (var i = 0; i < notComList.length; i++) {
                                    arr[i] = notComList[i];
                                }
                                arr[notComList.length] = {
                                    date: date,
                                    name: initiated,
                                    organization: org,
                                    firsttype: 'Curb Conflict',
                                    type: 'Curb Conflict',
                                    firststatus: 'Requested',
                                    display: 'none',
                                    status: 'Requested',
                                    notes: '',
                                    count: notComList.length
                                }
                                setNotComList(arr)
                                setNotComCount(notComList.length)
                                console.log(arr)
                                //createHtml(tagCount)
                            }}>
                            + Add New Request</button>

                        <div style={{ fontSize: '3vh' }}>
                            Issues History
                        </div>
                        <Table>
                            <Tr style={{ fontWeight: 'bold' }}>
                                <Td style={{ borderLeft: '1px solid black' }}>Date</Td>
                                <Td>Name</Td>
                                <Td>Org</Td>
                                <Td>Type</Td>
                                <Td>Status</Td>
                                <Td style={{ width: '35%', textAlign: 'left', }}>
                                    Notes
                                </Td>
                                <Td style={{ width: '5%', textAlign: 'center', fontSize: '0.5vw', borderRight: '1px solid black' }}>
                                    Delete
                                </Td>
                            </Tr>
                            {comList && comList.map(post => (
                                <Tr style={{ background: '#E6E6E6' }} key={post.pk}>
                                    <Td2>{post.date}</Td2>
                                    <Td2>{post.name}</Td2>
                                    <Td2>{post.organization}</Td2>
                                    <Td2>{post.type}</Td2>
                                    <Td2>{post.status}</Td2>
                                    <Td2 style={{ width: '35%' }}>{post.notes}</Td2>
                                    <Td2 style={{ width: '5%' }}>
                                        <img src={DeletePic} style={{ width: '80%', cursor: 'pointer' }}
                                            onClick={() => {
                                                if (window.confirm('Are you sure?')) {
                                                    // They clicked Yes
                                                    deleteNote(post.pk)
                                                }
                                                else {
                                                    // They clicked no
                                                }

                                            }} />

                                    </Td2>
                                </Tr>
                            ))}
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
                            saveImg ?
                                <label for="file">
                                    <img src={'http://3.19.184.59:8001' + saveImg}
                                        style={{
                                            width: '100%', height: '42vh',
                                            marginBottom: '6vh'
                                        }} />
                                </label>
                                :
                                <>
                                    <label for="file">
                                        <img src={ImageUpload}
                                            style={{
                                                width: '100%', height: '42vh',
                                                marginBottom: '6vh'
                                            }} />
                                    </label>

                                </>

                        )}
                        <div>
                            <input type="file" id="file" onChange={addFile} style={{ display: 'none' }} />
                        </div>
                        <div style={{ fontSize: '3vh' }}>
                            Attached Files
                        </div>
                        <Table>
                            <Tr style={{ fontWeight: 'bold' }}>
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
                        }}>+ Add New Files</button>

                        <div style={{ width: '100%', textAlign: 'end', marginBottom: '5vh' }}>
                            <button style={{
                                width: '60%', height: '5vh',
                                fontSize: '3vh', border: '1px solid black',
                                background: '#F6B60F', fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                                onClick={upLoad}>
                                Save
                            </button>
                        </div>

                    </Board>
                </>
            }
        </Wrapper>
    );
};
export default ProblemsEdit;
