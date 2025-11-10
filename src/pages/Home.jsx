import React from 'react'
import Hero from '../components/Hero'
import ResearchAreas from '../components/ResearchAreas'
import CounterStats from '../components/CounterStats'
import AboutIformation from '../components/AboutIformation'
import ExploreAcademic from '../components/ExploreAcademic'
import ResearchNeverEnd from '../components/ResearchNeverEnd'
import ResearchPublication from '../components/ResearchPublication'

const Home = () => {
  return (
    <div>
      <Hero/>
       <CounterStats/>
      <ResearchAreas/>
      <AboutIformation/>
      <ExploreAcademic/>
      <ResearchNeverEnd/>
      <ResearchPublication/>
     
    </div>
  )
}

export default Home