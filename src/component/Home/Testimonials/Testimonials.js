import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Preloader from '../../Shared/Preloader/Preloader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y , EffectCoverflow} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);


const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    const [preloaderVisibility, setPreloaderVisibility] = useState('block')
    useEffect(() => {
        fetch('https://morning-waters-67537.herokuapp.com/showReview')
            .then(res => res.json())
            .then(data => {
                console.log("show review", data);
                setTestimonialData(data)
                setPreloaderVisibility('none')
            })
    }, [])
    return (
        <section className=" my-5 py-5">
            <div className="container testimonials">
                <div className="section-header">
                    <h5 className="text-primary text-center text-uppercase">TESTIMONIALS</h5>
                    <h3 className="text-center">What Our Customer   <br /> Says About Us </h3>
                </div>
                <div className="row mt-5 brand-color">
                    <Preloader visibility={preloaderVisibility}></Preloader>
                    <Swiper
                        effect="coverflow"
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        breakpoints = {{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 50
                            },
                        }}
                    >
                        {
                            testimonialData.map(testimonial => (
                                <SwiperSlide key={testimonial._id}>
                                    <div className="card-footer d-flex  align-items-center">
                                        <img className="mx-3" src={testimonial.img[0]} alt="profile avatar" width="60" />
                                        <div>
                                            <h6 className="text-white">{testimonial.data.name}</h6>
                                            <p className="m-0 text-white">{testimonial.data.company}</p>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-text text-center">{testimonial.data.description}</p>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center m-0">
                                        <p style={{ color: 'goldenrod' }}><small><FontAwesomeIcon icon={faStar} /></small></p>
                                        <p style={{ color: 'goldenrod' }}><small><FontAwesomeIcon icon={faStar} /></small></p>
                                        <p style={{ color: 'goldenrod' }}><small><FontAwesomeIcon icon={faStar} /></small></p>
                                        <p style={{ color: 'goldenrod' }}><small><FontAwesomeIcon icon={faStar} /></small></p>
                                        <p style={{ color: 'goldenrod' }}><small><FontAwesomeIcon icon={faStarHalfAlt} /></small></p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
{/* <Testimonial testimonial={testimonial} key={testimonial._id} /> */ }
