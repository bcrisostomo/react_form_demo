import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 50vw;
  margin: auto;
  text-align: center;
`

const HeaderTitle = styled.h1`
  font-family: Sans-Serif;
  font-size: 2em;
`

const SubHeader = styled.h2`
  font-family: Sans-Serif;
  font-size: 1.5em;
`

const Header = ({ header, subHeader }) => (
  <HeaderContainer>
    <HeaderTitle>{header}</HeaderTitle>
    <SubHeader>{subHeader}</SubHeader>
  </HeaderContainer>
)

export default Header
