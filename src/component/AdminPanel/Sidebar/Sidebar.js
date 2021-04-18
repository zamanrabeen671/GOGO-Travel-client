import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome, faCartPlus, faPlus, faUser, faTasks } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import { useEffect } from 'react';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState([])

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
        <div className="sidebar d-flex flex-column justify-content-between  py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white active" aria-current="page">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <div>
                    {isAdmin && <div>
                        <li>
                            <Link to="/orderList" className="text-white">
                                <FontAwesomeIcon icon={faCartPlus} /> <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-white">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-white">
                                <FontAwesomeIcon icon={faUser} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manager" className="text-white" >
                                <FontAwesomeIcon icon={faTasks} /> <span>Manage Service</span>
                            </Link>
                        </li>

                    </div>}
                    <li>
                        <Link to="/service/:id" className="text-white" >
                            <FontAwesomeIcon icon={faTasks} /> <span>Book</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/booking" className="text-white" >
                            <FontAwesomeIcon icon={faTasks} /> <span>Booking List</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/review" className="text-white" >
                            <FontAwesomeIcon icon={faTasks} /> <span>Review</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;