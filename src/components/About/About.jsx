import React, {Component} from 'react'
import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'

const About = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img src="holder.js/171x180" rounded />
                <Carousel.Caption>
                    <h3>Person 1</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="holder.js/171x180" rounded />
                <Carousel.Caption>
                    <h3>Person 1</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="holder.js/171x180" rounded />
                <Carousel.Caption>
                    <h3>Person 1</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )


}
export default About



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