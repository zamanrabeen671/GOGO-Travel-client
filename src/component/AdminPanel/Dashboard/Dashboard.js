import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import BookingList from '../../VisitorPannle/BookingList/BookingList';
import AddService from '../AddService/AddService';
import Sidebar from '../Sidebar/Sidebar'
const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState([]);
    useEffect(() => {
        fetch('https://morning-waters-67537.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
            })
    }, [])
    return (
        <section className="container-fluid">
            <div className = "row">
                <div>
                    {isAdmin ? 
                     <AddService></AddService>
                    :
                    <BookingList></BookingList>
                    }
                </div>
               
            </div>
        </section>
    );
};

export default Dashboard;