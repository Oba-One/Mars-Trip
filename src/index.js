import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Transition, animated } from 'react-spring'
import Header from './components/Header'
import Home from './containers/Home'
import About from './containers/About'
import styled from 'styled-components'
import './styles.css'

const Animated = styled(animated.div)`
  position: absolute;
  width: 100%;
`

// Re-use this class whereever you would normally switch between routes ...
const AnimatedRoute = ({ children }) => (
  <Route
    render={({ location }) => (
      <Transition
        native
        items={location}
        keys={location => location.pathname}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0, pointerEvents: 'none' }}>
        {location => style => <Animated style={style}>{children(location)}</Animated>}
      </Transition>
    )}
  />
)

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <AnimatedRoute>
            {location => (
              <Switch location={location}>
                <Route exact path="/" render={props => <Home />} />
                <Route path="/about" render={props => <About />} />
              </Switch>
            )}
          </AnimatedRoute>
        </>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
