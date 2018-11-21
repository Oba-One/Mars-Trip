import React, { Component } from 'react'
import styled from 'styled-components'
import Bio from '../components/Bio'

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: rgba(46, 49, 49, 1);;
  color: white;
`

class About extends Component {
  render() {
    return (
      <Container>
        <Bio />
      </Container>
    )
  }
}

export default About
