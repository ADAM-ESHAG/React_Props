import KatieImage from "/images/katie.png"
import StarImage from "/images/Star.png"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/Card"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card 
        img={KatieImage}
        starImage={StarImage}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
  
}

export default App
