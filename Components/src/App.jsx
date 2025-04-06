import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import "./App.css"


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="forcards">
      <Card title="This is the title of Card 1" desc="This is the description."/>
      <Card title="This is the title of Card 2" desc="This is description of card 2"/>
      <Card title="This is the title of Card 3" desc="This is description of card 3"/>
      <Card title="This is the title of Card 4" desc="This is description of card 4"/>
      <Card title="This is the title of Card 5" desc="This is description of card 5"/>
      <Card title="This is the title of Card 6" desc="This is description of card 6"/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
