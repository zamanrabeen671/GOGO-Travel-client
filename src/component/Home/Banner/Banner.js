import React from 'react';
import saintMartin from '../../../image/saint.jpg';
import coxBajar from '../../../image/coxs.jpg';
import ladakh from '../../../image/ladakh.jpg';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Banner = () => {
    const imageStyling = {
        height: '400px',
    }
    return (
        <div className="banner-container">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-2 p-2">
                            <h2>Save more money</h2>
                            <h2>When you travel</h2>
                        </div>
                        <div className="mb-2 p-2">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias a dolor ipsum nisi tenetur impedit inventore modi soluta molestiae cumque.</p>

                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias a dolor ipsum nisi tenetur impedit inventore modi soluta molestiae cumque.</p>
                        </div>

                        <button className="btn btn-warning">Explore your best trip</button>
                    </div>
                    <div className="col-md-6">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            // navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                    <img  style={{height: '300px', width:'100%', borderRadius: '50px'}} src={ladakh} alt="" className="img-fluid img-container"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <img style={{height: '300px', width:'100%', borderRadius: '50px'}} src={saintMartin} alt="" className="img-fluid img-container"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <img style={{height: '300px', width:'100%', borderRadius: '50px'}} src={coxBajar} alt="" className="img-fluid img-container"/>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;