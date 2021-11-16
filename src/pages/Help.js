import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { withRouter, Link, useHistory } from "react-router-dom"
import axios from 'axios';
import GithubDocs from '../assets/images/GithubDocs.PNG'
import '../styles/style.css'
import $ from 'jquery'
import pic1 from '../assets/images/그림1.png'
import pic2 from '../assets/images/그림2.png'
import pic3 from '../assets/images/그림3.png'
import pic4 from '../assets/images/그림4.png'
import pic5 from '../assets/images/그림5.png'
import pic6 from '../assets/images/그림6.png'
import pic7 from '../assets/images/그림7.png'
import pic8 from '../assets/images/그림8.png'
import pic9 from '../assets/images/그림9.png'
import pic10 from '../assets/images/그림10.png'
import pic11 from '../assets/images/그림11.png'
import pic12 from '../assets/images/그림12.png'
import pic13 from '../assets/images/그림13.png'
import pic14 from '../assets/images/그림14.png'
import pic15 from '../assets/images/그림15.png'
import pic16 from '../assets/images/그림16.png'
import upload from '../assets/images/FileUpload.png'
const Wrapper = styled.div`
    display: flex;
    sidth:100%;
    align-items: center;
    
`

const Sidebar = styled.div`
width:30%;
background:#161b22;
color:white;
`
const SidebarContent = styled.div`
font-size:1.4vw;
font-family:${({ theme }) => theme.font.subtitle}; 
padding-top:2vh;
height:5vh;
cursor:pointer;
padding-left:2vw;
&:hover {
    background: #1b2c43;
}
`
const SidebarSubContent = styled.div`
font-size:1.1vw;
font-family:${({ theme }) => theme.font.subtitle}; 
cursor:pointer;
padding-left:4vw;
padding-top:1vh;
height:4vh;
&:hover {
    background: #1b2c43;
}
`
const SidebarSubSubContent = styled.div`
font-size:0.8vw;
cursor:pointer;
margin-left:4.5vw;
padding-left:2vw;
border-left:1px solid white;
padding-bottom:1vh;
padding-top:1vh;
font-family:${({ theme }) => theme.font.subtitle}; 
&:hover {
    background: #1b2c43;
}

`
const Container = styled.div`
width:70%;
background:#000000;
color:white;
font-family:${({ theme }) => theme.font.subtitle}; 
`
const Title = styled.div`
font-size:1.6vw;
margin-bottom:5vh;
padding:2vh 0 0 3vw;
`
const Content = styled.div`
font-size:1vw;
word-break:break-all;
padding:0 5vw 0 5vw;
margin-top:2vh;
margin-bottom:2vh;
`
const SubContent = styled.div`
font-size:0.8vw;
word-break:break-all;
padding:0 5vw 0 7vw;
margin-top:0.5vh;
`
const Img = styled.img`
width:60%;
margin:0 5vw 0 5vw;
`
//#080a0d

//#0d1117
const Help = () => {
    const history = useHistory();
    const [display, setDisplay] = useState('flex');
    const [colorList, setColorList] = useState([])
    const [displayCount, setDisplayCount] = useState(1)//14까지 있음
    
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
    useEffect(()=>{
        $('.b2').css('display','none');
        $('.c2').css('display','none');
        $('.c3').css('display','none');
        $('.c4').css('display','none');
        $('.c5').css('display','none');
        let arr = [];
        for(var i = 0;i<=15;i++){
            if(i==1){
                arr.push('#1b2c43')
            }
            else{
                arr.push('#161b22')  
            }
        }
        setColorList(arr)
    },[])
    function changeDisplay(str, num){
        if(str=='b'){
            if($('.b2').css('display')=='none'){
                $('.b2').css('display','');
            }
            else{
                $('.b2').css('display','none');
            }
        }
        else if(str=='c'){
            if(num==1){
                if($('.c2').css('display')=='none'){
                    $('.c2').css('display','');

                }
                else{
                    $('.c2').css('display','none');
                    $('.c3').css('display','none');
                    $('.c4').css('display','none');
                    $('.c5').css('display','none');
                }
            }
            else{
                if($(`.${str}${num}`).css('display')=='none'){
                    $(`.${str}${num}`).css('display','')
                }
                else{
                    $(`.${str}${num}`).css('display','none')
                }
            }
        }
    }
    function disPlayMenu(num){
        setDisplayCount(num);
        let arr = [];
        for(var i = 0;i<=15;i++){
            if(i==num){
                arr.push('#1b2c43')
            }
            else{
                arr.push('#161b22')
            }
        }
        setColorList(arr)
    }
    return (
        <Wrapper>
            <Sidebar  style={{ height: '91vh', overflowY: 'scroll' }} className='box'>
                <img style={{width:'80%'}} src={GithubDocs} />
                <SidebarContent className="a1"style={{background:`${colorList[1]}`}} onClick={()=>{disPlayMenu(1)}}>
                Purpose and Description
                </SidebarContent>

                <SidebarContent className="b1"onClick={()=>{changeDisplay('b',1)}}>
                    Interface Description
                </SidebarContent>
                    <SidebarSubContent className="b2"style={{background:`${colorList[2]}`}} onClick={()=>{disPlayMenu(2)}}>Issues Page</SidebarSubContent>
                    <SidebarSubContent className="b2"style={{background:`${colorList[3]}`}} onClick={()=>{disPlayMenu(3)}}>Requests Page</SidebarSubContent>
                    <SidebarSubContent className="b2"style={{background:`${colorList[4]}`}} onClick={()=>{disPlayMenu(4)}}>Help Page</SidebarSubContent>
                    <SidebarSubContent className="b2"style={{background:`${colorList[5]}`}} onClick={()=>{disPlayMenu(5)}}>Non-Conformance/Suggestion Edit Page</SidebarSubContent>
                <SidebarContent className="c1"onClick={()=>{changeDisplay('c',1)}}>
                Use Cases
                </SidebarContent>
                <SidebarSubContent className="c2"onClick={()=>{changeDisplay('c',3)}}>
                All Users
                </SidebarSubContent>
                <SidebarSubSubContent style={{background:`${colorList[6]}`}} className="c3" onClick={()=>{disPlayMenu(6)}}>Registration</SidebarSubSubContent>
                <SidebarSubSubContent style={{background:`${colorList[7]}`}} className="c3" onClick={()=>{disPlayMenu(7)}}>Login</SidebarSubSubContent>
                <SidebarSubContent className="c2"onClick={()=>{changeDisplay('c',4)}}>
                ATLDOT Users
                    </SidebarSubContent>
                <SidebarSubSubContent style={{background:`${colorList[8]}`}} className="c4" onClick={()=>{disPlayMenu(8)}}>Create an Amenity Request</SidebarSubSubContent>
                <SidebarSubSubContent style={{background:`${colorList[9]}`}} className="c4" onClick={()=>{disPlayMenu(9)}}>View All Issues</SidebarSubSubContent>
                <SidebarSubSubContent style={{background:`${colorList[10]}`}} className="c4" onClick={()=>{disPlayMenu(10)}}>Update Status of Issues</SidebarSubSubContent>
                <SidebarSubSubContent style={{background:`${colorList[11]}`}} className="c4" onClick={()=>{disPlayMenu(11)}}>Add Comments, Pictures, and Documents to Amenity Requests (Non-Status Changes)</SidebarSubSubContent>
                <SidebarSubContent className="c2"onClick={()=>{changeDisplay('c',5)}}>
                MARTA Users
                    </SidebarSubContent>
                <SidebarSubSubContent style={{background:`${colorList[12]}`}} className="c5" onClick={()=>{disPlayMenu(12)}}>Create an Issue Case</SidebarSubSubContent>
                <SidebarSubSubContent style={{background:`${colorList[13]}`}} className="c5" onClick={()=>{disPlayMenu(13)}}>View All Amenity Requests</SidebarSubSubContent>
                <SidebarSubSubContent style={{background:`${colorList[14]}`}} className="c5" onClick={()=>{disPlayMenu(14)}}>Update Status on Amenity Requests</SidebarSubSubContent>
                <SidebarSubSubContent style={{background:`${colorList[15]}`}} className="c5" onClick={()=>{disPlayMenu(15)}}>Add Comments, Pictures, and Documents to Issue Cases (Non-Status Changes)</SidebarSubSubContent>
            </Sidebar>
            <Container  style={{ height: '91vh', overflowY: 'scroll' }} className='box'>
                {
                    displayCount == 1 ?
                    <>
                    <Title>Purpose and Description</Title>
                    <Content>
                    · The web tool is made to help the communication between ATLDOT 
                    and MARTA in regard to improving the conditions of MARTA bus stops in the
                     Atlanta area. There are three main pages – Issues, Requests, and Help. Issues
                      page allows MARTA to make a case regarding the issues at bus stops that require 
                      the help of ATLDOT such as sidewalk improvement and Right of Way (ROW) acquisition. 
                      ATLDOT can view the details of issues on the Non-Conformance Edit page. This page is 
                      where issue-case creation, issue specification, status update, and related-document 
                      update and image updates take place.  Requests page allows ATLDOT to create a case 
                      requesting amenities on a bus stop. Similarly, MARTA can view the details of the requests 
                      on the Suggestion Edit page. This page is currently titled Non-Conformance Edit page but 
                      will be updated for the final delivery. This page is similar, but it handles request cases. 
                      Help page will contain descriptions of each page and how-to-use the features. This page is 
                      currently not available but will be for the final delivery. The web tool can be accessed here: <Link style={{color:'white'}} to="/">http://atlantabusstops.com</Link> .
                    </Content>

                    </>
                    :
                    <>
                    </>
                }
                {
                    displayCount == 2 ?
                    <>
                    <Title>Issues Page</Title>
                    <Img src={pic1} />
                    <Content>1)	Filter ( ): Filter by Top 200 Bus Stops, Amenity Score, Ridership Quantile and ADA Access</Content>
                    <Content>2)	Search: Search by Stop Name</Content>
                    <Content>3)	Column Titles</Content>
                    <SubContent>a.	SID: Stop ID</SubContent>
                    <SubContent>b.	Amenity score: Based on the type of amenities and conditions of the stop</SubContent>
                    <SubContent>c.	Ridership Quintile: Divided into equal sized, scale 0-5, 0 represents a low ridership rate and 5 represents a high ridership rate.</SubContent>
                    <SubContent>d.	Stop Name: Address of the Bus Stop</SubContent>
                    <SubContent>e.	Facing Dir: Facing Direction of the Bus Stop</SubContent>
                    <SubContent>f.	Position: Location of the bus stop related to the nearest intersection</SubContent>
                    <SubContent>g.	ADA Access: Accessibility to the bus for the disabled</SubContent>
                    <Content>4)	Modify (Left): Adding the bus stop to the right table to make an issue case</Content>
                    <Content>5)	Issues: List of Issues the Bus Stop that needs help of City of Atlanta</Content>
                    <Content>6)	Modify (Right): Go to the Non-Conformance Edit pages to view the details of the issues </Content>
                    <Content>7)	Delete: Move back the bus stop row to the right table if it was added accidentally</Content>
                    </>
                    :
                    <>
                    </>
                }
                {
                    displayCount == 3 ?
                    <>
                     <Title>Requests Page</Title>
                     <Img src={pic2} />
                    <Content>1)	Modify: Adding the bus stop to the right table to make a request case</Content>
                    <Content>2)	Requests: List of Amenities ATLDOT requests MARTA to install in a Bus Stop</Content>
                    <Content>3)	Modify: Go to the Suggestions Edit pages to view the details of the requests </Content>
                    <Content>Other features are the same as the Issues Page.</Content>
                    </>
                    :
                    <>
                    </>
                }
                {
                    displayCount == 4 ?
                    <>
                    <Title>Help Page</Title>
                    <Content>The Help page is currently not accessible. Documentation similar to this user guide will be included on this page. </Content>
                    </>
                    :
                    <>
                    </>
                }
                {
                    displayCount == 5 ?
                    <>
                    <Title>Non-Conformance/Suggestion Edit Page</Title>
                    <Img src={pic3} />
                    <Content>1)	Stop Name: Address of Bus Stops</Content>
                    <Content>2)	SID: Stop ID</Content>
                    <Content>3)	Created By: Creator</Content>
                    <Content>4)	Non-Conformance/Suggestion: Current Issue Cases</Content>
                    <SubContent>a.	Date: Data case is created</SubContent>
                    <SubContent>b.	Initiated By: Person who created the case</SubContent>
                    <SubContent>c.	Org: Organization the creator belongs to</SubContent>
                    <SubContent>d.	Type: Type of Issue</SubContent>
                    <SubContent>e.	Status: Status of Issue (Requested, Accepted, In Progress, Complete, Flagged, On Hold)</SubContent>
                    <SubContent>f.	Notes: Any notes related to the </SubContent>
                    <Content>5)	Non-Conformance/Suggestion History: Completed Issue Cases</Content>
                    <Content>6)	Upload Photo: Image of current bus stop</Content>
                    <Content>7)	Attached Files:</Content>
                    <SubContent>a.	Date: Date the file is uploaded </SubContent>
                    <SubContent>b.	Uploader: Person who uploaded the file</SubContent>
                    <SubContent>c.	Notes: Any notes related to the file</SubContent>
                    </>
                    :
                    <>
                    </>
                }
                {
                    displayCount == 6 ?
                    <>
                    <Title>Registration</Title>
                    <Content>If you have not used the web tool before, you must first register. </Content>
                    <SubContent>1)	Navigate to the web tool at <Link style={{color:'white'}} to="/">http://atlantabusstops.com</Link>, and select “Register.”</SubContent>
                    <Img style={{margin:'0 0 2vh 7vw'}} src={pic4} />
                    <SubContent>2)	Enter your information and be sure to select the correct organization (ATLDOT or MARTA). When done, click “Register.” </SubContent>
                    <Img style={{margin:'0 0 2vh 7vw'}} src={pic5} />
                    </>
                    :
                    <>
                    </>
                }
                {
                    displayCount == 7 ?
                    <>
                    <Title>Login</Title>
                    <Content>If you have already registered as a user and need to use the web tool, you must first log in. </Content>
                    <SubContent>1)	Navigate to the web tool at <Link style={{color:'white'}} to="/">http://atlantabusstops.com</Link></SubContent>
                    <SubContent>2)	Enter your login information, select the correct organization, and click “Login.” </SubContent>
                    <Img style={{margin:'0 0 2vh 7vw'}} src={pic6} />
                    </>
                    :
                    <>
                    </>
                }
                {
                    displayCount == 8 ?
                    <>
                    <Title>Create an Amenity Request</Title>
                    <Content>1)	Click on “Requests” on the top pane.</Content>
                    <Content>2)	Click on the   button on the left table in the row for the bus stop where you would like to make a request. The bus stop row will move to the right table.</Content>
                    <Content>3)	Click on the   button on the right table. The Suggestion Edit page will pop up.</Content>
                    <Img src={pic7} />
                    <Content>4)	Click “Add New Request” to add a case to current Amenity Suggestions. The “Date,” “Initiated By,” and “Org” will be automatically generated according to the user and current date.</Content>
                    <Content>5)	“Type” and “Status” will be a drop-down list. Select the appropriate type and status of the Amenity Suggestion. </Content>
                    <SubContent>a.	Types available: </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>i.	Simme seat</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>ii.	Bench</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>iii.Shelter</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>iv.	Trashcan</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>v.	Pad</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>vi.	Other – You can add a type that isn’t in the list</SubContent>
                    <SubContent>b.	Status:</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>i.	Requested</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>ii.	Accepted </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>iii.In Progress</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>iv.	Complete</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>v.	Flagged </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>vi.	On Hold </SubContent>
                    <Content>6)	Set status to Requested.</Content>
                    <Content>7)	Add text under “Notes” to provide context to and information about the issue.</Content>
                    <Content>8)	Press   . </Content>
                    </>
                    :
                    <>
                    </>
                }
                {
                    displayCount == 9 ?
                    <>
                    <Title>View All Issues</Title>
                    <Content>1)	Click on “Issues” on the top pane.</Content>
                    <Content>2)	Issues are listed on the right pane. Issues are listed on the right pane. </Content>
                    <Img src={pic8} />
                    
                    </>
                    :
                    <>
                    </>
                }
                {
                    displayCount == 10 ?
                    <>
                    <Title>Update Status of Issues</Title>
                    <Content>1)	Click on “Issues” on the top pane.</Content>
                    <Content>2)	Click on the   button on the right table in the row for the bus stop where you would like to edit the issue. The Non-Conformance Edit page will pop up.</Content>
                    <Img src={pic9} />
                    <Content>3)	Update Status. </Content>
                    <SubContent>a.	Requested to Accepted: If ATLDOT has decided to accept an Issue case, then click “Add New Request,” set the Type, and set Status to “Started.” Click on the empty Notes box and type in the current date and related comments. </SubContent>
                    <SubContent>b.	Accepted to In Progress: Once any form of progress has been made on the issue, click “Add New Request,” set the Type, and set Status to “In Progress.” Click on the Notes box, and on a new line, type in the current date and related comments.</SubContent>
                    <SubContent>c.	Accepted/In Progress to Flagged: If an Issue faces an issue that requires another user’s attention, set Status to “Flagged.” Click on the Notes box, and on a new line, type in the current date and related comments pertaining to action items for the other party to resolve the Flagged status.</SubContent>
                    <SubContent>d.	Accepted/In Progress to On Hold:  If an Issue faces a problem outside either organization’s control, set Status to “On Hold.”  Click on the Notes box, and on a new line, type in the current date and related comments pertaining to reasons for the On Hold status for later reactivation of the case.</SubContent>
                    <SubContent style={{marginBottom:'2vh'}}>e.	In Progress to Complete: Once the issue is resolved, click “Add New Request,” set the Type, and set Status to “Complete.” Click on the Notes box, and on a new line, type in the current date and related comments.</SubContent>
                    <Img style={{margin:'0 0 2vh 7vw'}} src={pic10} />
                    <Content>4)	Click   and the Status change will be validated with a popup alert. If the Status change was from In Progress to Complete, the Status will be updated and the case will be moved to “Suggestions History.”</Content>
                   
                    </>
                    :
                    <>
                    </>
                }
                {
                    displayCount == 11 ?
                    <>
                    <Title>Add Comments, Pictures, and Documents to Amenity Requests (Non-Status Changes)</Title>
                    <Content>1)	Click on “Requests” on the top pane.</Content>
                    <Content>2)	Click on the   button on the right table in the row for the bus stop where you would like to add the picture. The Suggestion Edit page will pop up.</Content>
                    
                    <SubContent style={{marginBottom:'2vh'}}>a.	Add Image of Bus Stop</SubContent>
                    <Img  style={{margin:'0 0 2vh 7vw'}} src={upload} />
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>i.	Click “Upload Photo.”</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>ii.	Select the Image file from your computer and click “Submit”</SubContent>

                    <SubContent style={{marginBottom:'2vh'}}>b.	Add Documents and Images</SubContent>
                    <Img style={{margin:'0 0 2vh 7vw'}} src={pic11} />
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>i.	Click “Add New File” – The text on the interface currently shows “Add New Request” but will be updated before the final delivery. </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>ii.	Select the file from your computer and click “Submit.”</SubContent>
                    <SubContent>c.	Add comments</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6'}}>i.	Click on the “Notes” textbox on the request of interest. </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>ii.	Add the date and date and comment. </SubContent>
                    <Content>3)	Click   . </Content>
                    
                    </>
                    :
                    <>
                    </>
                }
                {
                    displayCount == 12 ?
                    <>
                    <Title>Create an Issue Case</Title>
                    <Img src={pic12} />
                    <Content>1)	Click on “Issues” on the top pane.</Content>
                    <Content>2)	Click on the   button on the left table in the row for the bus stop where you would like request assistance with an issue. The bus stop row will move to the right table.</Content>
                    <Content>3)	Click on the   button on the right table. The Non-Conformance Edit page will pop up.</Content>
                    <Content>4)	Click “Add New Request” to add a case to current Non-Conformance. The “Date,” “Initiated By,” and “Org” will be automatically generated according to the user and current date.</Content>
                    <Content>5)	“Type” and “Status” will be a drop-down list. You will be able to select the appropriate type and status of the Non-Conformance. </Content>
                    <SubContent>a.	Types available: </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>i.	Remove on-street parking </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>ii.	Sidewalk improvement </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>iii.	Sidewalk connection</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>iv.	ADA pad </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>v.	ROW </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>vi.	Streetlight</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>vii.	Safer Crossing </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>viii.	Vegetation control </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>ix.	Construction coordination </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>x.	Trash </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>xi.	Homelessness </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>xii.	Other – You can add a type that isn’t in the list</SubContent>
                    <SubContent>b.	Status:</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>i.	Requested</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>ii.	Accepted </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>iii.	In Progress</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>iv.	Complete</SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>v.	Flagged </SubContent>
                    <SubContent style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>vi.	On Hold </SubContent>
                    <Content>6)	Set status to Requested. </Content>
                    <Content>7)	Add text under “Notes” to provide context to and information about the issue. </Content>
                    <Content>8)	Click   . </Content>
                    </>
                    :
                    <>
                    </>
                }
                {
                    displayCount == 13 ?
                    <>
                    <Title>View All Amenity Requests</Title>
                    <Content>1)	Click on “Requests” on the top pane. Amenity requests are listed on the right pane.</Content>
                    <Img src={pic13} />
                    </>
                    :
                    <>
                    </>
                }
                {
                    displayCount == 14 ?
                    <>
                    <Title>Update Status on Amenity Requests</Title>
                    <Content>1)	Click on “Requests” on the top pane. Amenity requests are listed on the right pane.</Content>
                    <Content>2)	Click on the   button of the amenity request of interest. The Suggestion Edit page will pop up.</Content>
                    <Img src={pic14} />
                    <Content>3)	Update Status. </Content>
                    <SubContent>a.	Requested to Accepted: If MARTA has decided to “accept” an amenity request and initiate the installation process, then click “Add New Request,” set Type, and set Status to “Started.” Click on the empty Notes box and type in the current date and related comments. </SubContent>
                    <SubContent>b.	Accepted to In Progress: Once installation has started, click “Add New Request,” set the Type of installation, set Status to “In Progress,” Click on the Notes box, and on a new line, type in the current date and related comments.</SubContent>
                    <SubContent>c.	Accepted/In Progress to Flagged: If a request faces an issue that requires another user’s attention, set Status to “Flagged.” Click on the Notes box, and on a new line, type in the current date and related comments pertaining to action items for the other party to resolve the Flagged status.</SubContent>
                    <SubContent>d.	Accepted/In Progress to On Hold: If a request faces a problem outside either organization’s control, set Status to “On Hold.”  Click on the Notes box, and on a new line, type in the current date and related comments pertaining to reasons for the On Hold status for later reactivation of the case.</SubContent>
                    <SubContent style={{marginBottom:'2vh'}}>e.	In Progress to Complete: Once installation is complete, click “Add New Request,” set the Type, and set Status to “Complete.” Click on the Notes box, and on a new line, type in the current date and related comments. Mark all previous Statuses to “Complete,” and the case will be moved to “Suggestions History.”</SubContent>
                    <Img style={{margin:'0 0 2vh 7vw'}} src={pic15} />
                    <Content>4)	Click   . </Content>
                    </>
                    :
                    <>
                    </>
                }
                 {
                    displayCount == 15 ?
                    <>
                    <Title>Add Comments, Pictures, and Documents to Issue Cases (Non-Status Changes)</Title>  
                    <Content>1)	Click on “Issues” on the top pane.</Content>
                    <Content>2)	Click on the   button on the right table in the row for the bus stop where you would like to add the picture. The Suggestion Edit page will pop up.</Content>
                    <SubContent style={{marginBottom:'2vh'}}>a.	Add Image of Bus Stop</SubContent>
                    <Img style={{margin:'0 0 2vh 7vw'}} src={upload} />
                    
                    <SubContent  style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>i.	 Click “Upload Photo”</SubContent>
                    <SubContent  style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>ii. Select the Image file from your computer and click “Submit”</SubContent>
                    <SubContent style={{marginBottom:'2vh'}}>b.	Add Documents and Images</SubContent>
                    <Img style={{margin:'0 0 2vh 7vw'}} src={pic16} />
                    <SubContent  style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>i.	 Click “Add New File” – The text on the interface currently shows “Add New Request” but will be updated before the final delivery. </SubContent>
                    <SubContent  style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>ii. Select the file from your computer and click “Submit.”</SubContent>
                    <SubContent>c.	Add comments</SubContent>
                    <SubContent  style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>i.	 Click on the “Notes” textbox on the request of interest. </SubContent>
                    <SubContent  style={{marginLeft:'5vw',paddingLeft:'3vw',fontSize:'0.6vw'}}>ii. Add the date and date and comment. </SubContent>
                    <Content>3)	Click   .</Content>
                    
                    </>
                    :
                    <>
                    </>
                }
            </Container>
        </Wrapper>
    );
};
export default Help;