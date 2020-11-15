import React from 'react'
import Container from './componenets/Container'
import Navigation from './componenets/Navigation'
import Service from './componenets/Service'
import ProjecTile from './componenets/ProjectTile'
import Footer from './componenets/Footer'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


import Typography from 'typography'
import parnassusTheme from 'typography-theme-parnassus'

parnassusTheme.baseFontSize = '12px'
parnassusTheme.baseLineHeight = '3px'

const typography = new Typography(parnassusTheme)
typography.injectStyles()
library.add(fas, fab);


function App() {
  return (
      <div className="App">
        <Navigation/>
        
        <main>
          <Container id='main_section'>
            <h1> Hey I'm Aleks</h1>
            <p>I'm a self-thaught front end developer based in Edinburgh. And I enjoy coming up with creative solutions to complex problems.</p>
          </Container>
          <Container id='services_section'>
            <Service 
              iconName='dice-d20'
              iconPrefix='fas'
              serviceTitle='Mobile First'
              serviceText='Creating responsive websites with a mobile first approach, ensuring great user expirience regardless of the device used.'
            >
            </Service>
            <Service 
              iconName='server'
              iconPrefix='fas'
              serviceTitle='Keeping up to date.'
              serviceText=' Keeping the projects maintained with bug fixes and consistently introducing new features and updates. '
            >
            </Service>
            <Service 
              iconName='rocket'
              iconPrefix='fas'
              serviceTitle='Latest technologies.'
              serviceText='Using latest and most reliable technologies that provide cutting edge functionality, performance and reliability. '
            >
            </Service>
          </Container>
          <Container id='projects_section'>
            <ProjecTile
              projectTitle = 'Project 1'
              projectLink = 'http://google.com'
              iconName = 'github'
              iconPrefix = 'fab'
            />
            <ProjecTile
              projectTitle = 'Project 2'
              projectLink = 'http://google.com'
              iconName = 'github'
              iconPrefix = 'fab'
            />
            <ProjecTile
              projectTitle = 'Project 3'
              projectLink = 'http://google.com'
              iconName = 'github'
              iconPrefix = 'fab'
            />
          </Container>
          <Container id='contact_section'>
            <h3>Lets work</h3>
            <p>Drop me an email</p>
          </Container>
        </main>
        <Footer/>
      </div>
  );
}

export default App;
