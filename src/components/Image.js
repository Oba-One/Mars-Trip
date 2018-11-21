// EXTERNAL IMPORTS //
import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'

// CSS STYLING //
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`

const Img = styled(CardMedia)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const Image = props => {
  return (
    <Wrapper>
      <Img image={props.image} />
    </Wrapper>
  )
}

export default Image
