import React from 'react'
import styled from 'styled-components'
import Spinner from 'react-spinkit'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Pacman = styled(Spinner)`
  margin-left: 10vw;
`

const Loading = props => {
  return (
    <Wrapper>
      <Pacman name="pacman" color="rgba(150, 40, 27, 1)" />
    </Wrapper>
  )
}

export default Loading
