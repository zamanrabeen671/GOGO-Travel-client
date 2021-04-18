import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import MiniNav from '../../Shared/MiniNav/MiniNav';
import Sidebar from '../Sidebar/Sidebar';
import OrderListByEmail from './OrderListByEmail';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [page, setPage] = useState('Order List')
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch('https://morning-waters-67537.herokuapp.com/bookingsByEmail', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            setBookings(data);
        })
    },[])
    const OrderContainer = {
        backgroundColor: 'White',
        padding: '10px',
        margin:'0 5px 10px 5px',
        borderRadius: '10px'
    }
    return (
        <section>
            <MiniNav page = {page}></MiniNav>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 container-style">
                    <div style={OrderContainer} className="row">
                        <div className="col-md-2">Name</div>
                        <div className="col-md-3">Email ID</div>
                        <div className="col-md-2">Service</div>
                        <div className="col-md-2">Pay With</div>
                        <div className="col-md-3">Status</div>
                    </div>
                   <OrderListByEmail bookings = {bookings}></OrderListByEmail>
                </div>
            </div>
        </section>
    );
};

export default OrderList;