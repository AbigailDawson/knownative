import React, { Component } from "react";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "./AboutPage.css";

const About = () => {
  const [index, setIndex] = useState(0);

  const changeSlide = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      fade
      className="flexTest"
      activeIndex={index}
      onSelect={changeSlide}
      interval={null}
      touch={true}
      data-bs-theme="dark"
    >
      <Carousel.Item>
        <Image className="caroSize" src="/images/light.jpg" rounded />
        <Carousel.Caption className="captionColor">
          <h3>Light Liu</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="caroSize"
          src="https://static.wixstatic.com/media/5b25a8_d128f5c0289144588e4da9663ba23818~mv2.png/v1/fill/w_433,h_455,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/annecy%202023.png"
          rounded
        />
        <Carousel.Caption>
          <h3>Parker Machemer</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="caroSize" src="/images/renna.jpg" rounded />
        <Carousel.Caption>
          <h3>Renna Carver</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="caroSize" src="/images/emillio.jpg" rounded />
        <Carousel.Caption>
          <h3>Emillio Campos Jr.</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="caroSize" src="/images/taylor.jpg" rounded />
        <Carousel.Caption>
          <h3>Taylor Brooks</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="caroSize" src="/images/Abigail.jpg" rounded />
        <Carousel.Caption>
          <h3>Abigail Dawson</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="caroSize" src="/images/me2.jpg" rounded />
        <Carousel.Caption>
          <h3>Bredell Evans</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default About;
