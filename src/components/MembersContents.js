import React, {useState} from 'react'
import styled from 'styled-components'
import ContentsWrapper from '../components/ContentWrapper'
import Title from './elements/Title'
import Lines from './elements/Lines'
import Directorpic from '../asset/image/Laihyuk.png'
import HeejaePic from '../asset/image/박희재.jpeg'
import WeePic from '../asset/image/위성률.jpg'
import JuanPic from '../asset/image/juanpic.jpg'
const SideTitle = styled.h3`
    font-family: ${({ theme }) => theme.font.medium};
    font-size:32px;
    padding-left:24px;
    padding-top:32px;
`
const Lines2 = styled.hr`
margin-top:39px;

background-color: #82ccdd;
height:0.5px;
`

const Contents = styled.nav`
    padding-top:30px;
    margin-bottom: 52px;
    display: flex;
    padding 8px 12px;
    @media screen and (max-width:768px) {
        flex-direction: column;
        
    }
`
const MemberPic = styled.img`
    width: 241.8px;
    height:318.6px;
`
const MemberName = styled.h2`
padding-bottom: 10px;
font-family: ${({ theme }) => theme.font.light};
`

const MemberExplain = styled.div`
    padding-left: 24px;
    
`
const MemberJob = styled.h5`
    
    font-size:18px;
    font-family: ${({ theme }) => theme.font.thin};
`
const MemberDegree = styled.div`
padding-bottom: 10px;
font-size:18px;
@media screen and (max-width:768px) {
    font-size:12px;
    
}
`
const MemberMajor = styled.div`
padding-bottom: 10px;
font-size:18px;
@media screen and (max-width:768px) {
    font-size:12px;
    
}
`
const MemberAddress = styled.div`
padding-bottom: 10px;
font-size:18px;
@media screen and (max-width:768px) {
    font-size:12px;
    
}
`
const MemberTel = styled.div`
padding-bottom: 10px;
font-size:18px;
@media screen and (max-width:768px) {
    font-size:12px;
    
}
`
const MemberEmail = styled.div`
padding-bottom: 10px;
font-size:18px;
@media screen and (max-width:768px) {
    font-size:12px;
    
}
`
const MembersContents = () => {
    const [directors, setDirectors] = useState([
        {
        image: {Directorpic},
        name:'Laihyuk Park, Ph. D', job: 'Assistant Professor',
        major: 'Department of Computer Science and Engineering',
        school: 'Seoul National University of Science and Technology (Seoultech)',
        address: '232 Gongneung-ro, Nowon-gu, Seoul, 139-743, Korea',
        tel: '+82-2-970-6703',
        email: 'lhpark at seoultech.ac.kr'}
    ]);

    const [students,setStudents] = useState([
        {
            image:{HeejaePic},
            name:'Heejae Park', job: 'B.S student',
            major: 'Department of Computer Science and Engineering',
            school: 'Seoul National University of Science and Technology (Seoultech)',
            office: 'Room 306, Mirae Hall',
            email: 'prkhj98@naver.com'
        },
        {
            
            image:{WeePic},
            name:'Seongryool Wee', job: 'B.S student',
            major: 'Department of Industrial and Information Systems Engineering<br>Department of Computer Science and Engineering',
            school: 'Seoul National University of Science and Technology (Seoultech)',
            office: 'Room 306, Mirae Hall',
            email: 'fbfbf1@naver.com'
            
        },
        {
            image: {JuanPic},
            name:'Ju-an Kim', job: 'B.S student',
            major: 'Department of Computer Science and Engineering',
            school: 'Seoul National University of Science and Technology (Seoultech)',
            office: 'Room 306, Mirae Hall',
            email: 'rlawndks0423@naver.com'
        },
        {
            image:'../image/juanpic.jpg',
            name:'Ju-an Kim', job: 'B.S student',
            major: 'Department of Computer Science and Engineering',
            school: 'Seoul National University of Science and Technology (Seoultech)',
            office: 'Room 306, Mirae Hall',
            email: 'rlawndks0423@naver.com'
        }
    ])

    return (
        <ContentsWrapper>
            <Title>Members</Title>
            <Lines/>
            <SideTitle>Director</SideTitle>
            {directors.map((director)=>(
            <Contents>
                <MemberPic src ={director.pic} >{director.pic}</MemberPic>
                <MemberExplain>
                <MemberName>{director.name}</MemberName>
                    <MemberJob>{director.job}</MemberJob>
                    <MemberDegree>{director.school}</MemberDegree>
                    <MemberMajor>{director.major}</MemberMajor>
                    <MemberAddress>{director.address}</MemberAddress>
                    <MemberTel>Tel: {director.tel}</MemberTel>
                    <MemberEmail>Email: {director.email}</MemberEmail>
                </MemberExplain>
            </Contents>    
            ))}
            

            <Lines2/>

            <SideTitle>B.S Students</SideTitle>
            {students.map((student) =>( 
                <Contents>
                    <MemberPic></MemberPic>
                    <MemberExplain>
                    <MemberName>{student.name}</MemberName>
                    <MemberJob>{student.job}</MemberJob>
                    <MemberDegree>{student.school}</MemberDegree>
                    <MemberMajor>{student.major}</MemberMajor>
                    <MemberAddress>Office: {student.office}</MemberAddress>
                    <MemberEmail>Email: {student.email}</MemberEmail>
                    </MemberExplain>
                </Contents>
            ))}
        </ContentsWrapper>
        
    );
};
export default MembersContents;