import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MiniNav from '../../Shared/MiniNav/MiniNav';
import Sidebar from '../Sidebar/Sidebar';
import AllService from './AllService';

const MangeServicce = () => {
    const [service, setService] = useState([]);
    const [page , setPage] = useState('Service Maintain')

    useEffect(() => {
        fetch('https://morning-waters-67537.herokuapp.com/showService')
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])
    const boxManager = {
        backgroundColor: 'white',
        padding: '5px',
        margin: '0 2px 10px 2px',
        borderRadius: '10px'
    }
    return (
        <div>
            <MiniNav page = {page}></MiniNav>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6 container-style">
                    <div style={boxManager} className="row">
                        <div className="col-md-4 text-primary">Service</div>
                        <div className="col-md-4 text-primary">Fee</div>
                        <div className="col-md-4 text-primary">Action</div>
                    </div>
                    {
                        service.map(events => <AllService events={events}></AllService>)
                    }
                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>
    );
};

export default MangeServicce;