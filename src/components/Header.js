import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import NasaLogo from '../assets/nasaLogo.png'
import GithubLogo from '../assets/githubLogo.svg'

const HeaderWrapper = styled.header`
  height: 69px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  background: rgba(46, 49, 49, 1);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  z-index: 1100;
  padding: 0 69px;
`

const Nav = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  padding: 0 7px;
  color: #f9f9f9;
  transition: color 0.15s ease-in-out;
  &:hover {
    color: rgba(150, 40, 27, 1);
  }
`

const Img = styled.img`
  height: 54px;
  width: 65px;
`

const Links = styled.div``

const Link = styled.i``

const Div = styled.div``

const Header = () => {
  return (
    <HeaderWrapper>
      <Img src={NasaLogo} />
      <Div>
        <Nav to="/">Home</Nav>
        <Nav to="/about">About</Nav>
      </Div>
      <Links />
    </HeaderWrapper>
  )
}

export default Header
