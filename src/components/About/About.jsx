import React, { Component } from "react";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "./About.css";

const About = () => {
  const [slide, setSlide] = useState(0);

  const changeSlide = (selectedSlide) => {
    setSlide(selectedSlide);
  };

  return (
    <Carousel
      className="flexTest"
      activeIndex={slide}
      onSelect={changeSlide}
      data-bs-theme="dark"
    >
      <Carousel.Item>
        <Image
          src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          rounded
        />
        <Carousel.Caption>
          <h3>Light Liu</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          rounded
        />
        <Carousel.Caption>
          <h3>Parker Machemer</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          rounded
        />
        <Carousel.Caption>
          <h3>Renna Carver</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          rounded
        />
        <Carousel.Caption>
          <h3>Emillio Campos Jr.</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          rounded
        />
        <Carousel.Caption>
          <h3>Taylor Brooks</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          rounded
        />
        <Carousel.Caption>
          <h3>Abigail Dawson</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          rounded
        />
        <Carousel.Caption>
          <h3>Bredell Evans</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default About;

// return (
//     <div ref={ref} className='ui form'>
//         <div className='field'>
//             <label className='label'>{label}</label>
//             <div
//                 onClick={() => setOpen(!open)}
//                 className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
//                 <i className='dropdown icon'></i>
//                 <div className='text'>
//                     {selected.label}
//                 </div>
//                 <div className={`menu ${open ? 'visible transition' : ''}`}>
//                     {renderedOptions}
//                 </div>
//             </div>
//         </div>
//     </div>
// )
