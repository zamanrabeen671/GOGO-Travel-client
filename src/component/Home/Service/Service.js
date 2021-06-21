import React, { useEffect, useState } from 'react';
import Preloader from '../../Shared/Preloader/Preloader';

import ServicesDetail from '../ServiceDetail/ServicesDetail';
import './service.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { useHistory } from 'react-router';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Service = () => {
    const [servicesData, setServicesData] = useState([]);
    const [preloaderVisibility, setPreloaderVisibility] = useState('block')
    useEffect(() => {
        fetch('https://morning-waters-67537.herokuapp.com/showService')
            .then(res => res.json())
            .then(data => {
                setServicesData(data)
                console.log('service',data)
                setPreloaderVisibility('none')
            })
    }, [])

    const history = useHistory();
    const booking = id => {
        history.push(`/service/${id}`);
    }
    return (
        <div className="container mt-5">
            <h1 className="text-center text-white m-5">Our Events</h1>
            <div className="row">
                <Preloader visibility={preloaderVisibility}></Preloader>
                <Swiper
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
                        servicesData.map(events => (
                            <SwiperSlide key={events._id}>
                                <div style={{ textAlign: 'center' }} className="service-container">
                                    <img style={{ height: '100px', width: '80%' }} src={`data:image/jpeg;base64,${events.image.img}`} />
                                    <h4 style={{ fontWeight: 'bold' }}>{events.name}</h4>
                                    <h5 style={{ color: 'tomato', fontSize: '20px' }}>${events.fee}</h5>
                                    <p className="text-secondary"><small>{events.description}</small></p>
                                    <button className="btn btn-success" onClick={() => booking(events._id)}>Book</button>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Service;
{/* <ServicesDetail events={events}></ServicesDetail> */ }