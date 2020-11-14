import React from 'react'
import Container from './componenets/Container'
import Navigation from './componenets/Navigation'
import Service from './componenets/Service'
import Footer from './componenets/Footer'

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
              serviceIcon='fa fa-microchip'
              serviceTitle='Mobile First'
              serviceText='Creating responsive websites with a mobile first approach, ensuring great user expirience regardless of the device used.'
            >
            </Service>
            <Service 
              serviceIcon='fa fa-server'
              serviceTitle='Keeping up to date.'
              serviceText=' Keeping the projects maintained with bug fixes and consistently introducing new features and updates. '
            >
            </Service>
            <Service 
              serviceIcon='fa fa-rocket'
              serviceTitle='Latest technologies.'
              serviceText='Using latest and most reliable technologies that provide cutting edge functionality, performance and reliability. '
            >
            </Service>
          </Container>
          <Container id='projects_section'/>
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
