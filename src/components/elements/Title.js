import styled from 'styled-components'

const Title = styled.h2`
  font-size: 54px;
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.color.secondary};
  cursor: default;
  @media screen and (max-width:1050px) {
    font-size: 34px;
    
  }
`

export default Title