// EXTERNAL IMPORTS //
import React from 'react'
import styled from 'styled-components'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import FilledInput from '@material-ui/core/FilledInput'

const Wrapper = styled.div`
  position: absolute;
  z-index: 1100;
  width: 340px;
  height: 180px;
  bottom: 15vh;
  right: 15vw;
  border-radius: 5px;
  background: rgba(150, 40, 27, 0.7);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 3px rgba(0, 0, 0, 0.3),
    0px 1px 10px 4px rgba(0, 0, 0, 0.2);
`

const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 12px;
`

const FormInput = styled(FormControl)`
  width: 100px;
  height: 60px;
  border-radius: 3px;
  margin: 0 10px;
`

const Content = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Actions = styled(CardActions)`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
`

const curiousityCameras = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM']

const spiritOpportunityCameras = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES']

const curiousityOptions = curiousityCameras.map(camera => (
  <MenuItem key={camera} value={camera.toLowerCase()}>
    {' '}
    {camera}
  </MenuItem>
))

const spiritOpportunityOptions = spiritOpportunityCameras.map(camera => (
  <MenuItem key={camera} value={camera.toLowerCase()}>
    {' '}
    {camera}
  </MenuItem>
))

const Filter = props => {
  let cameras
  if (props.filter.rover === 'curiosity') {
    cameras = curiousityOptions
  } else {
    cameras = spiritOpportunityOptions
  }

  return (
    <Wrapper>
      <Form onSubmit={props.filterSearch}>
        <Content>
          <FormInput>
            <Select
              required
              value={props.filter.rover}
              onChange={props.filterChange('rover')}
              input={<FilledInput name="Rover" />}>
              <MenuItem selected value={'curiosity'}>
                Curiosity
              </MenuItem>
              <MenuItem value={'opportunity'}>Opportunity</MenuItem>
              <MenuItem value={'spirit'}>Spirit</MenuItem>
            </Select>
            <FormHelperText>Select Rover</FormHelperText>
          </FormInput>
          <FormInput>
            <Select
              required
              value={props.filter.camera}
              onChange={props.filterChange('camera')}
              input={<FilledInput name="Camera" />}>
              {cameras}
            </Select>
            <FormHelperText>Select Camera</FormHelperText>
          </FormInput>
          <FormInput>
            <TextField
              required
              value={props.filter.sol}
              onChange={props.filterChange('sol')}
              helperText="1-2290"
              label="Sol"
              variant="filled"
            />
          </FormInput>
        </Content>
        <Actions>
          <Button type="submit" value="Submit" size="large">
            Search
          </Button>
        </Actions>
      </Form>
    </Wrapper>
  )
}

export default Filter
