import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Preloader from '../../Shared/Preloader/Preloader';



const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    const [preloaderVisibility, setPreloaderVisibility] = useState('block')
    useEffect(() => {
        fetch('https://morning-waters-67537.herokuapp.com/showReview')
        .then(res => res.json())
        .then(data => {
            // console.log(testimonialData);
            setTestimonialData(data)
            setPreloaderVisibility('none')
        })
    },[])
    return (
       <section className=" my-5 py-5">
           <div className="container testimonials">
               <div className="section-header">
                   <h5 className="text-primary text-center text-uppercase">TESTIMONIALS</h5>
                   <h3 className="text-center">What Our Customer   <br/> Says About Us </h3>
               </div>
               <div  className="row mt-5">
                    <Preloader visibility = {preloaderVisibility}></Preloader>
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;