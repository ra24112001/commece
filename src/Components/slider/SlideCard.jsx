import React from 'react'
//import Sdata from './Sdata'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SlideCard.css"
function SlideCard() {
  const Sdata = [
    {
      id: 1,
      title: "50% Off For Your First Shopping",
      desc: "summer collection available now !",
      cover: "./images/pic1.jpg",
    },
    {
      id: 2,
      title: "Get your unique collection",
      desc:  "summer collection available now !",
      cover: "./images/pic2.jpg",
    },
    {
      id: 3,
      title: "50% Off For Your First Shopping",
      desc: "summer collection available now !",
      cover: "./images/pic3.jpg",
    },
    {
      id: 4,
      title: "Get your unique collection",
      desc:  "summer collection available now !",
      cover: "./images/pic4.jpg",
    },
  ]






    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
      },
    }
    const scrollToTarget = () => {
      window.scrollTo({ top: 650, behavior: 'smooth' });
    };

  return (
    <>
    <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
                <div className='left'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary' onClick={scrollToTarget} color='#d3b9b1'>start shopping</button>
                </div>
                <div className='right'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
        </Slider>
    </>
  )
}

export default SlideCard