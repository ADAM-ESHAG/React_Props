import KatieImage from "/images/katie.png"
import StarImage from "/images/Star.png"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/Card"
import Data from "./Data"

function App() {

  const cards = Data.map(item => {
    return (
      <Card 
            key={item.id}
            item={item}
          />
    )
  })
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
      </section>
    </div>
  )
  
}

export default App
