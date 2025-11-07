import React from 'react'
import Hero from '../components/Hero'
import ResearchAreas from '../components/ResearchAreas'
import CounterStats from '../components/CounterStats'

const Home = () => {
  return (
    <div>
      <Hero/>
       <CounterStats/>
      <ResearchAreas/>
     
    </div>
  )
}

export default Home