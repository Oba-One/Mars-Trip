// EXTERNAL IMPORTS //
import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

// CSS STYLING //
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  z-index: 1100;
  width: 340px;
  height: 180px;
  bottom: 15vh;
  left: 15vw;
  border-radius: 5px;
  color: #222;
  background: rgba(189, 195, 199, 0.7);
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0 12px;
  border-radius: 5px;
  background: ;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 3px rgba(0, 0, 0, 0.3),
    0px 1px 10px 4px rgba(0, 0, 0, 0.2);
`

const Header = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  margin-top: 15px;
  padding: 0 20px 0 0;
`

const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 100%;
  & div {
    display: flex;
    padding-right: 5px;
    margin-bottom: 30px;
    margin-top: 3px;

    & p {
      padding-right: 4px;
      color: rgba(150, 40, 27, 1);
    }
  }
  & h5 {
  }
`

const Actions = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const ImageDetails = props => {
  return (
    <Wrapper>
      <Card>
        <Header>
          <Typography variant="h3">{props.item.rover.name}</Typography>
        </Header>
        <Content>
          <div>
            <Typography variant="body2" component="p">
              Launch: {props.item.rover.launch_date} -
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
              Land: {props.item.rover.landing_date}
            </Typography>
          </div>
          <Typography variant="subheading" component="h5">
            Camera: {props.item.camera.full_name}
          </Typography>
          <Typography variant="subheading" component="h5">
            Earth Date: {props.item.earth_date}
          </Typography>
          <Typography variant="subheading" component="h5">
            Sol: {props.item.sol}
          </Typography>
        </Content>
        <Actions>
          <Button onClick={props.showFilter} size="medium">
            Filter
          </Button>
        </Actions>
      </Card>
    </Wrapper>
  )
}

export default ImageDetails
