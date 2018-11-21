// EXTERNAL IMPORTS //
import React from 'react'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'

// CSS STYLING //
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
`

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 240px;
  background: rgba(238, 238, 238, 1);
  opacity: 0.01;
  z-index: 501;
  transition: opacity 0.15s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.07;
  }
`

const Navigation = props => {
  return (
    <Wrapper>
      <Nav onClick={props.prevImage}>
        <ChevronLeft style={{ fontSize: 80 }} />
      </Nav>
      <Nav onClick={props.nextImage}>
        <ChevronRight style={{ fontSize: 80 }} />
      </Nav>
    </Wrapper>
  )
}

export default Navigation
