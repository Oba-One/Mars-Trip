// EXTERNAL IMPORTS //
import React, { Component, Fragment } from 'react'
import { Transition, animated } from 'react-spring'
import axios from 'axios'

// INTERNAL IMPORTS //
import Image from '../components/Image'
import ImageDetails from '../components/ImageDetails'
import Navigation from '../components/Navigation'
import Loading from '../components/Loading'
import Filter from '../components/Filter'

// CSS STYLING //
import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
`

const Animated = styled(animated.div)`
  height: 100%
  width: 100%;
`

const API_KEY = `G0Q3Ii24vlfAWOaZyyPU1dYVLQTjl9lIpeKUhbdU`
const API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers`

class Home extends Component {
  state = {
    filter: {
      rover: 'curiosity',
      sol: '',
      camera: '',
    },
    marsData: [],
    currentIndex: 0,
    loading: true,
    toggleFilter: false,
  }

  async componentDidMount() {
    try {
      const { rover } = this.state.filter
      const response = await axios.get(`${API_URL}/${rover}/photos?sol=1000&page=2&api_key=${API_KEY}`)
      const data = await response.data
      console.log(data)

      this.setState({
        marsData: data.photos,
        loading: false,
      })
    } catch (error) {
      console.log(error)
    }
  }

  nextImageHandler = () => {
    const { currentIndex, marsData } = this.state
    const lastIndex = marsData.length - 1
    const resetIndex = currentIndex === lastIndex
    const index = resetIndex ? 0 : currentIndex + 1

    this.setState({
      currentIndex: index,
    })
  }

  prevImageHandler = () => {
    const { currentIndex, marsData } = this.state
    const lastIndex = marsData.length - 1
    const resetIndex = currentIndex === 0
    const index = resetIndex ? lastIndex : currentIndex - 1

    this.setState({
      currentIndex: index,
    })
  }

  toggleFilterHandler = () => {
    this.setState(state => ({
      toggleFilter: !state.toggleFilter,
    }))
  }

  handleFilterChange = name => event => {
    const value = event.target.value
    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        [name]: value,
      },
    }))
  }

  filterImagesSearch = async event => {
    event.preventDefault()
    try {
      const { rover, camera, sol } = this.state.filter
      const response = await axios.get(`${API_URL}/${rover}/photos?sol=${sol}&${camera}&page=2&api_key=${API_KEY}`)
      const data = await response.data
      console.log(data)

      this.setState({
        marsData: data.photos,
        showFilter: false,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { currentIndex, marsData, filter } = this.state
    const { prevImageHandler, nextImageHandler, handleFilterChange, toggleFilterHandler, filterImagesSearch } = this

    return (
      <Container>
        {this.state.loading ? (
          <Loading />
        ) : (
          <Fragment>
            <Navigation nextImage={nextImageHandler} prevImage={prevImageHandler} />
            {this.state.toggleFilter ? (
              <Filter filter={filter} filterChange={handleFilterChange} filterSearch={filterImagesSearch} />
            ) : null}
            <Transition
              items={marsData[currentIndex]}
              keys={marsData => marsData.id}
              from={{ position: 'absolute', opacity: 0, zIndex: '500' }}
              enter={{ opacity: 1, zIndex: '500' }}
              leave={{ opacity: 0, zIndex: '500' }}>
              {item => props => (
                <Animated style={props}>
                  <ImageDetails item={item} showFilter={toggleFilterHandler} />
                  <Image image={item.img_src} />
                </Animated>
              )}
            </Transition>
          </Fragment>
        )}
      </Container>
    )
  }
}

export default Home
