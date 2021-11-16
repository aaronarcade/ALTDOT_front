import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { withRouter, Link, useHistory } from "react-router-dom"
import axios from 'axios';
import imagesrc from '../assets/images/filter.PNG'
import Bigarrow from '../assets/images/BigArrow.png'
import '../styles/style.css'
import DeletePic from '../assets/images/delete.png'
const Wrapper = styled.div`
    display: flex;
    width:100%;
    padding-top:2vh;
    justify-content: space-between;
    @media screen and (max-width:650px) {
        flex-direction:column;
    }
`
const Board = styled.div`
width:45%;
@media screen and (max-width:650px) {
    width: 95%;
}
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
font-size:0.5vw;

`
const Tier = styled.td`
width:10%;
text-align:center;
font-size:0.5vw;
`
const RidershipQuintile = styled.td`
width:10%;
text-align:center;
font-size:0.5vw;
`
const StopName = styled.td`
width:20%;
text-align:center;
font-size:0.5vw;
`
const Suggestion = styled.td`
width:20%;
text-align:center;
font-size:0.5vw;
`
const FacingDir = styled.td`
width:15%;
text-align:center;
font-size:0.5vw;
`
const Position = styled.td`
width:15%;
text-align:center;
font-size:0.5vw;
`
const Modify = styled.td`
width:10%;
text-align:center;
border-left: 1px solid black;
border-right: 1px solid black;
font-size:0.5vw;
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
const ArrowContainer = styled.div`
width:5%; 
display:flex;
flex-direction: column;
align-items: center;
@media screen and (max-width:950px) {
    display:none;
}
`
const BigArrow = styled.img`
width:80%;
margin:16vh 0 10vh 0;
`
const SuggestionPage = () => {
    const history = useHistory();
    const [posts, setPosts] = useState([]);
    const [modifyPosts, setModifyPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [colorArr, setColorArr] = useState([]);
    const [search1, setSearch1] = useState('');
    const [search2, setSearch2] = useState('');
    const [page1, setPage1] = useState(1)
    const [page2, setPage2] = useState(1)

    const [filterDisplay, setFilterDisplay] = useState('none')
    const [filterTop200, setFilterTop200] = useState(false);
    const [filterTier, setFilterTier] = useState(6);
    const [filterRQ, setFilterRQ] = useState(6);
    const [filterIssue, setFilterIssue] = useState('');
    const [filterADA, setFilterADA] = useState('')

    const [filterModifyDisplay, setFilterModifyDisplay] = useState('none')
    const [filterTop200Modify, setFilterTop200Modify] = useState(false);
    const [filterTierModify, setFilterTierModify] = useState(6);
    const [filterRQModify, setFilterRQModify] = useState(6);
    const [filterIssueModify, setFilterIssueModify] = useState('');
    const [filterADAModify, setFilterADAModify] = useState('')

    const [maxPage1, setMaxPage1] = useState(5)
    const [maxPage2, setMaxPage2] = useState(5)
    const [pagination1,setPagenation1] = useState([])
    const [pagination2,setPagenation2] = useState([])
    const isAdmin = async () => {

        const { data: response } = await axios.get('/api/auth')
        console.log(response)
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
            const { data: response } = await axios.get(`/api/stations/ATLDOT/0?keyword=${search1}&page=${page1}&top200=${filterTop200}&tier=${filterTier}&rq=${filterRQ}&issue=${filterIssue}&ada=${filterADA}`);
            setPosts(response.data);
            console.log(response.data)
            const { data: res } = await axios.get(`/api/stations/ATLDOT/1?keyword=${search2}&page=${page2}&top200=${filterTop200Modify}&tier=${filterTierModify}&rq=${filterRQModify}&issue=${filterIssueModify}&ada=${filterADAModify}`);
            setModifyPosts(res.data)
            const { data: res1} = await axios.get(`/api/maxpage/ATLDOT/0?keyword=${search1}&page=${page1}&top200=${filterTop200}&tier=${filterTier}&rq=${filterRQ}&issue=${filterIssue}&ada=${filterADA}`);
            
            const { data: res2 } = await axios.get(`/api/maxpage/ATLDOT/1?keyword=${search2}&page=${page2}&top200=${filterTop200Modify}&tier=${filterTierModify}&rq=${filterRQModify}&issue=${filterIssueModify}&ada=${filterADAModify}`);
            
            let arr = [];
                for(var i =0;i<res1.data;i++){
                    arr.push({
                        id:i,
                        num:i+1
                    })
                }
                setPagenation1(arr)
                arr = [];
                for(var i =0;i<res2.data;i++){
                    arr.push({
                        id:i,
                        num:i+1
                    })
                }
                setPagenation2(arr)
                console.log(posts)
                console.log(res1)
                console.log(res2)
            setLoading(false);
        }
        fetchPosts()
    }, []);
    function onChangeModify(pk) {

        axios.post('/api/addmodify', {
            pk: pk,
            org: 'ATLDOT'
        }).then(() => {
            async function fetchPosts() {
                setLoading2(true);
                const { data: response } = await axios.get(`/api/stations/ATLDOT/0?keyword=${search1}&page=${page1}&top200=${filterTop200}&tier=${filterTier}&rq=${filterRQ}&issue=${filterIssue}&ada=${filterADA}`);
                setPosts(response.data);
                const { data: res } = await axios.get(`/api/stations/ATLDOT/1?keyword=${search2}&page=${page2}&top200=${filterTop200Modify}&tier=${filterTierModify}&rq=${filterRQModify}&issue=${filterIssueModify}&ada=${filterADAModify}`);
                setModifyPosts(res.data)
                const { data: res1} = await axios.get(`/api/maxpage/ATLDOT/0?keyword=${search1}&page=${page1}&top200=${filterTop200}&tier=${filterTier}&rq=${filterRQ}&issue=${filterIssue}&ada=${filterADA}`);
                setMaxPage1(res1.data)
                const { data: res2 } = await axios.get(`/api/maxpage/ATLDOT/1?keyword=${search2}&page=${page2}&top200=${filterTop200Modify}&tier=${filterTierModify}&rq=${filterRQModify}&issue=${filterIssueModify}&ada=${filterADAModify}`);
                setMaxPage2(res2.data)
                let arr = [];
                for(var i =0;i<res1.data;i++){
                    arr.push({
                        id:i,
                        num:i+1
                    })
                }
                setPagenation1(arr)
                arr = [];
                for(var i =0;i<res2.data;i++){
                    arr.push({
                        id:i,
                        num:i+1
                    })
                }
                setPagenation2(arr)
                console.log(posts)
                setLoading2(false);
            }
            fetchPosts()
        })
    }
    function stopModify(pk){
        axios.post('/api/stopmodify', {
            pk: pk,
            org: 'ATLDOT'
        }).then(() => {
            async function fetchPosts() {
                setLoading1(true);
                const { data: response } = await axios.get(`/api/stations/ATLDOT/0?keyword=${search1}&page=${page1}&top200=${filterTop200}&tier=${filterTier}&rq=${filterRQ}&issue=${filterIssue}&ada=${filterADA}`);
                setPosts(response.data);
                const { data: res } = await axios.get(`/api/stations/ATLDOT/1?keyword=${search2}&page=${page2}&top200=${filterTop200Modify}&tier=${filterTierModify}&rq=${filterRQModify}&issue=${filterIssueModify}&ada=${filterADAModify}`);
                setModifyPosts(res.data)
                const { data: res1} = await axios.get(`/api/maxpage/ATLDOT/0?keyword=${search1}&page=${page1}&top200=${filterTop200}&tier=${filterTier}&rq=${filterRQ}&issue=${filterIssue}&ada=${filterADA}`);
                setMaxPage1(res1.data)
                const { data: res2 } = await axios.get(`/api/maxpage/ATLDOT/1?keyword=${search2}&page=${page2}&top200=${filterTop200Modify}&tier=${filterTierModify}&rq=${filterRQModify}&issue=${filterIssueModify}&ada=${filterADAModify}`);
                setMaxPage2(res2.data)
                let arr = [];
                for(var i =0;i<res1.data;i++){
                    arr.push({
                        id:i,
                        num:i+1
                    })
                }
                setPagenation1(arr)
                arr = [];
                for(var i =0;i<res2.data;i++){
                    arr.push({
                        id:i,
                        num:i+1
                    })
                }
                setPagenation2(arr)
                console.log(posts)
                setLoading1(false);
            }
            fetchPosts()
        })
    }
    function goEditPage(pk) {
        history.push(`/suggestionsedit/${pk}`)
    }
    const onChangeSearch1 = (e) => {
        setSearch1(e.target.value)
    }
    const onChangeSearch2 = (e) => {
        setSearch2(e.target.value)
    }
    function onChangePage1(num) {
        async function fetchPosts() {
            setPage1(num)
            setLoading1(true);
            let string = ``
            const { data: response } = await axios.get(`/api/stations/ATLDOT/0?keyword=${search1}&page=${num}&top200=${filterTop200}&tier=${filterTier}&rq=${filterRQ}&issue=${filterIssue}&ada=${filterADA}`);
            setPosts(response.data);
            const { data: res1} = await axios.get(`/api/maxpage/ATLDOT/0?keyword=${search1}&page=${num}&top200=${filterTop200}&tier=${filterTier}&rq=${filterRQ}&issue=${filterIssue}&ada=${filterADA}`);
            setMaxPage1(res1.data)
            if(num==1){
                let arr = [];
                for(var i =0;i<res1.data;i++){
                    arr.push({
                        id:i,
                        num:i+1
                    })
                }
                setPagenation1(arr)
            }
            setLoading1(false);
        }
        fetchPosts()
    };
    function onChangePage2(num) {
        async function fetchPosts() {
            setPage2(num)
            setLoading2(true);
            
            const { data: res } = await axios.get(`/api/stations/ATLDOT/1?keyword=${search2}&page=${num}&top200=${filterTop200Modify}&tier=${filterTierModify}&rq=${filterRQModify}&issue=${filterIssueModify}&ada=${filterADAModify}`);
            setModifyPosts(res.data)
            if(num==1){
                const { data: res2 } = await axios.get(`/api/maxpage/ATLDOT/1?keyword=${search2}&page=${num}&top200=${filterTop200Modify}&tier=${filterTierModify}&rq=${filterRQModify}&issue=${filterIssueModify}&ada=${filterADAModify}`);
                setMaxPage2(res2.data)
                let arr = [];
                for(var i =0;i<res2.data;i++){
                    arr.push({
                        id:i,
                        num:i+1
                    })
                }
                setPagenation2(arr)
            }
            setLoading2(false);

        }
        fetchPosts()
    };

    return (
        <Wrapper>
            {
                loading ?
                    <div style={{ width: '100%', textAlign: 'center' }}>loading...</div>
                    :
                    <>

                        <Board style={{ marginLeft: '2vw' }}>
                            <div style={{
                                width: '100%', display: 'flex'
                                , justifyContent: 'space-between', paddingBottom: '0.5vh'
                            }}>
                                <Img src={imagesrc} onClick={() => {
                                    if (filterDisplay == 'none') {
                                        setFilterDisplay('flex')
                                    }
                                    else {
                                        setFilterDisplay('none')
                                    }
                                }} style={{ width: '4vh', height: 'auto', cursor: 'pointer' }} />
                                <div style={{
                                    width: '60%'
                                    , display: 'flex', justifyContent: 'space-between'
                                }}>

                                    <SearchBar onChange={onChangeSearch1}
                                        value={search1} />
                                    <button style={{ fontSize: '1vw', cursor: 'pointer', border: 'none', width: '4.5vw' }} onClick={() => { onChangePage1(1) }}>Search</button>

                                </div>
                            </div>
                            <div style={{ display: `${filterDisplay}`, width: '100%', flexDirection: 'column' }}>
                                <div>
                                    <div>Top 200</div>
                                    <input type="radio" name="top200" onChange={() => { setFilterTop200(true) }} /> applied &nbsp;
                                    <input type="radio" name="top200" onChange={() => { setFilterTop200(false) }} /> not applied
                                </div>
                                <div>
                                    <div>Amenity Score</div>
                                    <input type="radio" name="AS" onChange={(e) => { setFilterTier(0) }} />0 &nbsp;
                                    <input type="radio" name="AS" onChange={(e) => { setFilterTier(1) }} />1 &nbsp;
                                    <input type="radio" name="AS" onChange={(e) => { setFilterTier(2) }} />2 &nbsp;
                                    <input type="radio" name="AS" onChange={(e) => { setFilterTier(3) }} />3 &nbsp;
                                    <input type="radio" name="AS" onChange={(e) => { setFilterTier(4) }} />4 &nbsp;
                                    <input type="radio" name="AS" onChange={(e) => { setFilterTier(5) }} />5 &nbsp;
                                </div>
                                <div>
                                    <div>Ridership Quintile</div>
                                    <input type="radio" name="RQ" onChange={(e) => { setFilterRQ(0) }} />0 &nbsp;
                                    <input type="radio" name="RQ" onChange={(e) => { setFilterRQ(1) }} />1 &nbsp;
                                    <input type="radio" name="RQ" onChange={(e) => { setFilterRQ(2) }} />2 &nbsp;
                                    <input type="radio" name="RQ" onChange={(e) => { setFilterRQ(3) }} />3 &nbsp;
                                    <input type="radio" name="RQ" onChange={(e) => { setFilterRQ(4) }} />4 &nbsp;
                                    <input type="radio" name="RQ" onChange={(e) => { setFilterRQ(5) }} />5 &nbsp;
                                </div>
                                <div>
                                    <div>ADA Access</div>
                                    <input type="radio" name="issue" onChange={(e) => { setFilterADA('Y') }} />Y &nbsp;
                                    <input type="radio" name="issue" onChange={(e) => { setFilterADA('N') }} />N &nbsp;
                                </div>
                            </div>
                            <Table>
                                <Tr style={{ height: '6vh', fontWeight: 'bold' }}>
                                    <SID style={{ border: '1px solid black',width:'15%' }}>SID</SID>
                                    <Tier style={{ border: '1px solid black',width:'10%' }}>Amenity<br />Score</Tier>
                                    <RidershipQuintile style={{ border: '1px solid black',width:'10%' }}>
                                        Ridership<br />Quintile
                                    </RidershipQuintile>
                                    <StopName style={{ border: '1px solid black',width:'20%' }}>Stop Name</StopName>
                                    <FacingDir style={{ border: '1px solid black',width:'10%'}}>FacingDir</FacingDir>
                                    <Position style={{ border: '1px solid black',width:'10%' }}>Position</Position>
                                    <Position style={{ border: '1px solid black',width:'10%' }}>ADA Access</Position>
                                    <Modify style={{ border: '1px solid black',width:'15%' }}>Modify</Modify>
                                    
                                </Tr>
                            </Table>
                            {loading1 ?
                                <div style={{ width: '100%', textAlign: 'center' }}>loading...</div>
                                :
                                <>

                                    <div style={{ height: '72vh', overflowY: 'scroll' }} className='box'>
                                        <Table>

                                            {posts && posts.map(post => (
                                                <Tr key={post.pk} style={{ background: `${post.color}` }}>
                                                    <SID style={{width:'15%'}}>{post.stop_id}</SID>
                                                    <Tier style={{width:'10%'}}>{post.tier}</Tier>
                                                    <RidershipQuintile style={{width:'10%'}}>{post.ridership_quintile}</RidershipQuintile>
                                                    <StopName style={{width:'20%'}}>{post.stop_name}</StopName>
                                                    <FacingDir style={{width:'10%'}}>{post.facing_dir}</FacingDir>
                                                    <Position style={{width:'10%'}}>{post.position}</Position>
                                                    <Position style={{width:'10%'}}>{post.ada_access}</Position>
                                                    <Modify style={{width:'15%'}}>
                                                        <Button style={{ color: 'black', background: '#F6B60F' }}
                                                            onClick={() => { onChangeModify(post.pk) }}>Add</Button>
                                                    </Modify>
                                                   
                                                </Tr>
                                            ))}


                                        </Table>
                                    </div>
                                    <div style={{width:'100%',display:'flex',justifyContent:'space-between',marginTop:'1vh'}}>
                                        <div/>
                                        <div style={{display:'flex'}}>
                                        {
                                            pagination1.map(num=>(

                                                
                                                <button style={{width:'4vh',height:'4vh',background:'#3960AA',border:'1px solid black',color:'white'}}
                                                onClick={()=>{onChangePage1(num.num)}}>
                                                    {num.num}
                                                </button>
                                            ))
                                        }
                                        </div>
                                        <div/>
                                    
                                    </div>
                                </>
                            }
                        </Board>
                        <ArrowContainer>
                            <BigArrow src={Bigarrow} />
                            <BigArrow src={Bigarrow} />
                        </ArrowContainer>
                        <Board style={{ marginRight: '2vw' }}>
                            <div style={{
                                width: '100%', display: 'flex'
                                , justifyContent: 'space-between', paddingBottom: '0.5vh'
                            }}>
                                <Img src={imagesrc} onClick={() => {
                                    if (filterModifyDisplay == 'none') {
                                        setFilterModifyDisplay('flex')
                                    }
                                    else {
                                        setFilterModifyDisplay('none')
                                    }
                                }} style={{ width: '4vh', height: 'auto', cursor: 'pointer' }} />
                                <div style={{
                                    width: '60%'
                                    , display: 'flex', justifyContent: 'space-between'
                                }}>
                                    <SearchBar onChange={onChangeSearch2}
                                        value={search2} />
                                    <button style={{ fontSize: '1vw', cursor: 'pointer', border: 'none', width: '4.5vw' }}
                                        onClick={() => { onChangePage2(1) }}>Search</button>


                                </div>
                            </div>
                            <div style={{ display: `${filterModifyDisplay}`, width: '100%', flexDirection: 'column' }}>
                                <div>
                                    <div>Top 200</div>
                                    <input type="radio" name="top200" onChange={() => { setFilterTop200Modify(true) }} /> applied &nbsp;
                                    <input type="radio" name="top200" onChange={() => { setFilterTop200Modify(false) }} /> not applied
                                </div>
                                <div>
                                    <div>Amenity Score</div>
                                    <input type="radio" name="AS" onChange={(e) => { setFilterTierModify(0) }} />0 &nbsp;
                                    <input type="radio" name="AS" onChange={(e) => { setFilterTierModify(1) }} />1 &nbsp;
                                    <input type="radio" name="AS" onChange={(e) => { setFilterTierModify(2) }} />2 &nbsp;
                                    <input type="radio" name="AS" onChange={(e) => { setFilterTierModify(3) }} />3 &nbsp;
                                    <input type="radio" name="AS" onChange={(e) => { setFilterTierModify(4) }} />4 &nbsp;
                                    <input type="radio" name="AS" onChange={(e) => { setFilterTierModify(5) }} />5
                                </div>
                                <div>
                                    <div>Ridership Quintile</div>
                                    <input type="radio" name="RQ" onChange={(e) => { setFilterRQModify(0) }} />0 &nbsp;
                                    <input type="radio" name="RQ" onChange={(e) => { setFilterRQModify(1) }} />1 &nbsp;
                                    <input type="radio" name="RQ" onChange={(e) => { setFilterRQModify(2) }} />2 &nbsp;
                                    <input type="radio" name="RQ" onChange={(e) => { setFilterRQModify(3) }} />3 &nbsp;
                                    <input type="radio" name="RQ" onChange={(e) => { setFilterRQModify(4) }} />4 &nbsp;
                                    <input type="radio" name="RQ" onChange={(e) => { setFilterRQModify(5) }} />5
                                </div>
                                <div>
                                    <div>Requests</div>
                                    <input type="radio" name="issue" onChange={(e) => { setFilterIssueModify('Bench') }} />Bench &nbsp;
                                    <input type="radio" name="issue" onChange={(e) => { setFilterIssueModify('Simme Seat') }} />Simme Seat &nbsp;
                                    <input type="radio" name="issue" onChange={(e) => { setFilterIssueModify('Shelter') }} />Shelter &nbsp;
                                    <input type="radio" name="issue" onChange={(e) => { setFilterIssueModify('Pad') }} />Pad &nbsp;
                                    <input type="radio" name="issue" onChange={(e) => { setFilterIssueModify('Trash Can') }} />Trash Can
                                </div>
                                <div>
                                    <div>ADA Access</div>
                                    <input type="radio" name="issue" onChange={(e) => { setFilterADAModify('Y') }} />Y &nbsp;
                                    <input type="radio" name="issue" onChange={(e) => { setFilterADAModify('N') }} />N &nbsp;
                                </div>
                            </div>
                            <Table>
                                <Tr style={{ height: '6vh', fontWeight: 'bold' }}>
                                    <SID style={{ border: '1px solid black',width:'8%' }}>SID</SID>
                                    <Tier style={{ border: '1px solid black',width:'8%' }}>Amenity<br />Score </Tier>
                                    <RidershipQuintile style={{ border: '1px solid black',width:'10%' }}>
                                        Ridership<br />Quintile
                                    </RidershipQuintile>
                                    <StopName style={{ border: '1px solid black',width:'15%' }}>Stop Name</StopName>
                                    <FacingDir style={{ border: '1px solid black',width:'8%' }}>FacingDir</FacingDir>
                                    <Position style={{ border: '1px solid black',width:'8%' }}>Position</Position>
                                    <Position style={{ border: '1px solid black',width:'8%' }}>ADA<br/>Access</Position>
                                    <Suggestion style={{ border: '1px solid black',width:'18%' }}>Requests</Suggestion>
                                    <Modify style={{ border: '1px solid black',width:'10%' }}>Modify</Modify>
                                    <td style={{ border: '1px solid black',width:'7%',fontSize:'0.5vw',textAlign:'center',fontWeight:'bold' }}>delete</td>
                                </Tr>


                            </Table>
                            <Table>
                            {loading2 ?
                                    <div style={{ width: '100%', textAlign: 'center' }}>loading...</div>
                                    :
                                    <>
                                    <div style={{ height: '72vh', overflowY: 'scroll' }} className='box'>
                                    <Table>
                                        {modifyPosts && modifyPosts.map(post => (
                                            <Tr key={post.pk} style={{ background: `${post.color}` }}>
                                                <SID style={{width:'8%' }}>{post.stop_id}</SID>
                                                <Tier style={{width:'8%' }}>{post.tier}</Tier>
                                                <RidershipQuintile style={{width:'10%' }}>{post.ridership_quintile}</RidershipQuintile>
                                                <StopName style={{width:'15%' }}>{post.stop_name}</StopName>
                                                <FacingDir style={{width:'8%' }}>{post.facing_dir}</FacingDir>
                                                <Position style={{width:'8%' }}>{post.position}</Position>
                                                <Position style={{width:'8%' }}>{post.ada_access}</Position>
                                                <Suggestion style={{width:'18%' }}>
                                                    <Button style={{ color: 'white', background: '#107E7D', width: '80%',fontSize:'0.5vw' }}
                                                    >{post.suggestions}</Button>

                                                </Suggestion>
                                                <Modify style={{width:'10%' }}>
                                                    <Button style={{ color: 'black', background: '#F6B60F' }}
                                                        onClick={() => { goEditPage(post.pk) }}> {'>'} </Button>
                                                </Modify>
                                                <td style={{ border: '1px solid black',width:'7%',fontSize:'0.5vw',textAlign:'center' }}>
                                                    <img src={DeletePic}
                                                    style={{width:'80%',cursor:'pointer'}} 
                                                    onClick={()=>{stopModify(post.pk)}}/>
                                                    </td>
                                            </Tr>
                                        ))}
                                        </Table>
                                        </div>
                                        <div style={{width:'100%',display:'flex',justifyContent:'space-between',marginTop:'1vh'}}>
                                        <div/>
                                        <div style={{display:'flex'}}>
                                        {
                                            pagination2.map(num=>(

                                                
                                                <button style={{width:'4vh',height:'4vh',background:'#3960AA',border:'1px solid black',color:'white'}}
                                                onClick={()=>{onChangePage2(num.num)}}>
                                                    {num.num}
                                                </button>
                                            ))
                                        }
                                        </div>
                                        <div/>
                                    
                                    </div>
                                    </>
                                }

                            </Table>
                        </Board>
                    </>
            }
        </Wrapper>
    );
};
export default SuggestionPage;