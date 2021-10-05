import React, {useEffect, useState} from 'react'
import Title from './elements/Title'
import ContentsWrapper from './ContentWrapper';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IOT from '../asset/image/IoT.jpg'
const MenuBar = styled.div`
    border-top: 3px solid ${({ theme }) => theme.color.secondary};
    width:100%;
    display:flex;
    border-collapse: collapse;
    border-bottom: 3px solid ${({ theme }) => theme.color.secondary};
    padding: 20px 0;
`
const MenuTitle = styled.div`
width:10%;
text-align: center;
`
const MenuDate = styled.div`
width:10%;
text-align: center;
`
const MenuPic = styled.div`
width:15%;
text-align: center;
`
const MenuExplain = styled.div`
width:75%;
text-align: center;
`


const Content = styled.div`
    width:100%;
    display:flex;
    border-bottom: 1.5px solid ${({ theme }) => theme.color.secondary};
    padding: 15px 0;
    word-break:break-all;
    align-items:center;
`
const Date =styled.div`
width:10%;
text-align: center;
`
const ContentTitle = styled.div`
width:10%;
text-align: center;
`
const Pic =styled.div`
width:15%;
text-align: center;
`
const Explain =styled.div`
width:75%;
text-align: center;
`



const PageUl = styled.div`
text-align:center;
font-size:20px;
`;

const PageLi = styled.div`
display:inline-block;
`;

const PageSpan = styled.p`
cursor: pointer;
margin-left:12px;
`;
const TimeLineContents = () => {
    const [timelines, setTimelines] = useState([
        {title:'8/30세미나', year: '2011', month: '4', date: '12', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: ' 삶이 있는 한 희망은 있다  -키케로'},
        {title:'8/2세미나', year: '2010', month: '12', date: '22', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '산다는것 그것은 치열한 전투이다.'},
        {title:'8/1세미나', year: '2008', month: '1', date: '2', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.'},
        {title:'8/24세미나', year: '2011', month: '4', date: '12', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: ' 언제나 현재에 집중할수 있다면 행복할것이다.'},
        {title:'8/16세미나', year: '2010', month: '12', date: '22', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해'},
        {title:'8/5세미나', year: '2008', month: '1', date: '2', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다 '},
        {title:'8/11세미나', year: '2011', month: '4', date: '12', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '신은 용기있는자를 결코 버리지 않는다 '},
        {title:'8/22세미나', year: '2010', month: '12', date: '22', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다'},
        {title:'8/23세미나', year: '2008', month: '1', date: '2', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '피할수 없으면 즐겨라 '},
        {title:'8/26세미나', year: '2011', month: '4', date: '12', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?-'},
        {title:'8/18세미나', year: '2010', month: '12', date: '22', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에'},
        {title:'8/10세미나', year: '2008', month: '1', date: '2', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다'},
        {title:'8/5세미나', year: '2011', month: '4', date: '12', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '행복한 삶을 살기위해 필요한 것은 거의 없다. '},
        {title:'8/30세미나', year: '2010', month: '12', date: '22', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다 L.론허바드'},
        {title:'8/30세미나', year: '2008', month: '1', date: '2', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다  -제임스 오펜하임'},
        {title:'8/30세미나', year: '2011', month: '4', date: '12', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다'},
        {title:'8/30세미나', year: '2010', month: '12', date: '22', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '한번의 실패와 영원한 실패를 혼동하지 마라 '},
        {title:'8/30세미나', year: '2008', month: '1', date: '2', pic: 'http://localhost:3000/static/media/IoT.1180aead.jpg', content: '계단을 밟아야 계단 위에 올라설수 있다'}
    ])
    const [posts, setPosts] = useState([]);
    const [maxPage, setMaxPage] = useState(0);
    const pageNumbers = [];
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(()=>{
      setPosts(timelines.slice(0,10));
      setCurrentPage(1);
      if(timelines.length%10==0){
       setMaxPage(timelines.length/10);
      }
      else{
        setMaxPage(timelines.length/10+1)
      }
    },[])
    for(let i = 1; i<=maxPage;i++){
      pageNumbers.push(i);
    }
    function cutString(str){
      var string = str.substring(0,20);
      string += "....";
      return string;
    }
    function onChangePage(num){
      setPosts(timelines.slice((num-1)*10,num*10))
      setCurrentPage(num)
    }
    function onChangePageColor(num) {
      if (currentPage == num) {
        return { color: '#82ccdd'}
      }
      else {
        return { color: '#000000' }
      }
    }
    return (
        <ContentsWrapper>
        <Title>
            TimeLine
        </Title>
        <MenuBar>
        <MenuTitle>제목</MenuTitle>
        <MenuPic>사진</MenuPic>
        <MenuExplain>내용</MenuExplain>
        <MenuDate>날짜</MenuDate>
        </MenuBar>
      
        {posts.map((timeline)=>(
            <Content>
                <ContentTitle>{timeline.title}</ContentTitle>
                <Pic><Link to={{
                  pathname: '/timeline-board',
                  state: {
                    title:timeline.title,
                    text: timeline.content, pic: timeline.pic
                  }
                }}><img style={{width:'80%'}} src={timeline.pic}/></Link></Pic>
                <Explain>{ 
                timeline.content.length >= 20 ?
                cutString(timeline.content)
                :
                <>
                {timeline.content}
                </>
                }</Explain>
                <Date>{timeline.year}/{timeline.month}/{timeline.date}</Date>
            </Content>    
            ))}
        
        <PageUl>
        <PageLi>
              <PageSpan onClick={()=>{onChangePage(1)}}>
                first
              </PageSpan>
            </PageLi>
          {pageNumbers.map(number => (
            <PageLi>
              <PageSpan onClick={()=>{onChangePage(number)}} style={onChangePageColor(number)}>
                {number}
              </PageSpan>
            </PageLi>
          ))}
           <PageLi>
              <PageSpan onClick={()=>{onChangePage(parseInt(maxPage))}}>
                  last
              </PageSpan>
            </PageLi>
        </PageUl>
        </ContentsWrapper>
        
    );
};
export default TimeLineContents;