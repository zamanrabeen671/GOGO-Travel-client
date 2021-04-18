import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import OrderListByEmail from '../../AdminPanel/OrderList/OrderListByEmail';
import Sidebar from '../../AdminPanel/Sidebar/Sidebar';
import MiniNav from '../../Shared/MiniNav/MiniNav';
import UserOrder from './UserOrder';
const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([]);
    const [page, setPage] = useState('Service List');
    
    useEffect(() => {
        fetch('https://morning-waters-67537.herokuapp.com/bookingsByEmail', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(result => {
                setBookings(result);
            })
    }, []);
    
    const containerStyle = {
        backgroundColor: 'lightGray',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    }
    return (
        <div>
            <MiniNav page={page}></MiniNav>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div style={containerStyle} className="col-md-6">
                    <div  className="row">
                        {
                            bookings.map(booked =><UserOrder booked={booked} key = {booked._id}></UserOrder>)
                        }
                        
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>

        </div>
    );
};

export default BookingList;