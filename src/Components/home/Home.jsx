import React from 'react'
import Categories from './Categories'
import Slider from '../slider/Slider'
import './Home.css'
function Home() {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          {Categories()}
          {Slider()}
        </div>
      </section>
    </>
  )
}

export default Home