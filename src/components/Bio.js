import React from 'react'
import styled from 'styled-components'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import marsSurface from '../assets/marsSurface.png'

const Wrapper = styled.section`
  display: flex
  width: 100%
  height: 100%;
  justify-content: center;
  align-items: center;
  background: url(${marsSurface});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const Card = styled.div`
  margin-top: 10vh;
  opacity: 0.9;
  height: 500px;
  width: 700px;
  background: rgba(46, 49, 49, 1);
  border-radius: 5px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 3px rgba(0, 0, 0, 0.3),
    0px 1px 10px 4px rgba(0, 0, 0, 0.2);
`

const Content = styled(CardContent)`
  margin: 20px 15px;
  margin-bottom: 0;
  padding: 0 25px;
`

const Actions = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 30px;
  margin-bottom: 20px;
`

const Bio = props => {
  return (
    <Wrapper>
      <Card>
        <Content>
          <Typography style={{ color: 'rgba(150, 40, 27, 1)' }} variant="h3" component="h3">
            The Red Planet
          </Typography>
          <Typography style={{ padding: '15px 30px' }} variant="h5" component="h3">
            As we prepare to go to Mars to explore and build colonies. I thought it would be fun to make an app to view
            some of the few images we have of the planet. Nasa provides a great API for viewing photos of their 3 Mars
            rovers from Curiosity, Opportunity, and Spirit. So for anyone looking to be the first astronauts to colonize
            Mars or learn more about our solar system. This app is a great starting point to visialize the conditions
            and terrain. To learn more follow the links below on Nasa and SpaceX Mars exploration.
          </Typography>
        </Content>
        <Actions>
          <Button href="https://mars.nasa.gov/" target="_blank" size="large" style={{ color: '#f9f9f9' }}>
            Nasa
          </Button>
          <Button href="https://www.spacex.com/mars" target="_blank" size="large" style={{ color: '#f9f9f9' }}>
            SpaceX
          </Button>
        </Actions>
      </Card>
    </Wrapper>
  )
}

export default Bio
