import React, {useState, useEffect} from 'react'
import Title from './elements/Title'
import ContentsWrapper from '../components/ContentWrapper'
import styled from 'styled-components'
import Lines from './elements/Lines'
import axios from 'axios'


const SideTitle = styled.h3`
    font-family: ${({ theme }) => theme.font.medium};
    font-size:32px;
    padding-left:24px;
    padding-top:32px;
`
const Papers = styled.ul`
    padding-top:0px;
    padding-bottom:64px;
    word-break:break-all;
`
const Paper = styled.li`
word-break:break-all;
    padding-top:24px;
`
const Text = styled.div`
  font-size: 18px;
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
const PaperContents = () => {

    const [papers, setPapers] = useState([
        { id: 1, content:'[J06] D. Kim, D. Kwon, L. Park, J. Kim, and S. Cho, "Multi-Scale LSTM-based Deep Learning for Very-Short-Term Photovoltaic Power Generation Forecasting in Smart City Energy Management," IEEE Systems Journal, vol. 15, no. 1, pp.346-354, March 2021.'},
        { id: 2, content: '[J05] Y. Lee, S. Jeong, A. Masood, L. Park, N.-N. Dao, and S. Cho, "Trustful Resource Management for Service Allocation in Fog-Enabled Intelligent Transportation Systems," IEEE Access, vol. 8, 147313-147322, August 2020.'},
        { id: 3, content: '[J04] L. Park, Y. Yoon, S. Cho, and S. Choi, "Prosumer Energy Management Considering Contract with Consumers under Progressive Pricing Policy," IEEE Access, vol. 8, pp. 115789 - 115799, June 2020.'},
        { id: 4, content: '[J03] L. Park, C. Lee, W. Na, S. Choi, and S. Cho, "Two-Stage Computation Offloading Scheduling Algorithm for Energy-Harvesting Mobile Edge Computing," Energies, vol. 12, November 2019.'},
        { id: 5, content: '[J02] L. Park, C. Lee, J. Kim, A. Mohaisen, and S. Cho, "Two-Stage IoT Device Scheduling with Dynamic Programming for Energy Internet Systems," IEEE Internet of Things Journal, vol. 6, no, 5, pp. 8782-8791, October 2019.'},
        { id: 6, content: '[J01] W. Na, S. Jang, Y. Lee, L. Park, N.-N. Dao, and S. Cho, "Frequency Resource Allocation and Interference Management in Mobile Edge Computing for an Internet of Things System," IEEE Internet of Things Journal, vol. 6, no. 3, pp. 4910-4920, June 2019.'},
        { id: 7, content: '[J01] W. Na, S. Jang, Y. Lee, L. Park, N.-N. Dao, and S. Cho, "Frequency Resource Allocation and Interference Management in Mobile Edge Computing for an Internet of Things System," IEEE Internet of Things Journal, vol. 6, no. 3, pp. 4910-4920, June 2019.'},
        { id: 8, content: '[J01] W. Na, S. Jang, Y. Lee, L. Park, N.-N. Dao, and S. Cho, "Frequency Resource Allocation and Interference Management in Mobile Edge Computing for an Internet of Things System," IEEE Internet of Things Journal, vol. 6, no. 3, pp. 4910-4920, June 2019.'},
        { id: 9, content: '[J01] W. Na, S. Jang, Y. Lee, L. Park, N.-N. Dao, and S. Cho, "Frequency Resource Allocation and Interference Management in Mobile Edge Computing for an Internet of Things System," IEEE Internet of Things Journal, vol. 6, no. 3, pp. 4910-4920, June 2019.'},
        { id: 10, content: '[J01] W. Na, S. Jang, Y. Lee, L. Park, N.-N. Dao, and S. Cho, "Frequency Resource Allocation and Interference Management in Mobile Edge Computing for an Internet of Things System," IEEE Internet of Things Journal, vol. 6, no. 3, pp. 4910-4920, June 2019.'},
        { id: 11, content: '[J01] W. Na, S. Jang, Y. Lee, L. Park, N.-N. Dao, and S. Cho, "Frequency Resource Allocation and Interference Management in Mobile Edge Computing for an Internet of Things System," IEEE Internet of Things Journal, vol. 6, no. 3, pp. 4910-4920, June 2019.'},
        { id: 12, content: '[J01] W. Na, S. Jang, Y. Lee, L. Park, N.-N. Dao, and S. Cho, "Frequency Resource Allocation and Interference Management in Mobile Edge Computing for an Internet of Things System," IEEE Internet of Things Journal, vol. 6, no. 3, pp. 4910-4920, June 2019.'},
        
    ])
    console.log(papers)
    
    
    
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    console.log(currentPage)

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;


    function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
    }   

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(papers.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }


    return (
        
        <ContentsWrapper> 
            <Title>
            Paper
            </Title>
            <Lines />
            <SideTitle>
            International Journal
            </SideTitle>
            
            
            <Papers >
                    
            {currentPosts(papers).map (paper=>(
                <Paper>
                    <Text>{paper.content}</Text>
                </Paper>
            ))}

           </Papers>
                   
            <PageUl>
          {pageNumbers.map(number => (
            <PageLi key={number}>
              <PageSpan onClick={() => setCurrentPage(number)}>
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
        

        </ContentsWrapper>
        
    );
};
export default PaperContents;