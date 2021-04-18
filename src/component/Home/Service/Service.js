import React, { useEffect, useState } from 'react';
import Preloader from '../../Shared/Preloader/Preloader';

import ServicesDetail from '../ServiceDetail/ServicesDetail';
const Service = () => {
    const [servicesData, setServicesData] = useState([]);
    const [preloaderVisibility, setPreloaderVisibility] = useState('block')
    useEffect(() => {
        fetch('https://morning-waters-67537.herokuapp.com/showService')
        .then(res => res.json())
        .then(data => {
            setServicesData(data)
            setPreloaderVisibility('none')
        })
    }, [])
    return (
        <div className="container mt-5">
            <div className="row">
                <Preloader visibility = {preloaderVisibility}></Preloader>
                {
                    servicesData.map(events => <ServicesDetail events = {events}></ServicesDetail>)
                }

            </div>
        </div>
    );
};

export default Service;