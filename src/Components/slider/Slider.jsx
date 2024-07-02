import React from 'react'
import SlideCard from './SlideCard'
import '../home/Home'

function Slider() {
  return (
    <>
        <section className='homeSlide contentWidth '>
        <div className='container'>
          {SlideCard()}
        </div>
      </section>
    </>
  )
}

export default Slider

