import { Dropdown } from 'react-bootstrap';
import React from 'react';

const OrderTable = ({ bookings }) => {
    console.log(bookings);
    const handleStatus = (status, id) => {
        console.log('booking id',id);
        console.log('booking status',status)

        fetch(`https://morning-waters-67537.herokuapp.com/update/${id}`,{
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({status: status})
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                console.log(data);
            }
        })
    }
    const orderContainer = {
        padding: '10px',
        backgroundColor: 'whiteSmoke',
        margin: '0 5px'
    }
    return (
        <div>

            {
                bookings.map((booking, index) =>
                    <div style={orderContainer} className="row">
                        <div className="col-md-2">{booking.shipment.name}</div>
                        <div className="col-md-3">{booking.shipment.email}</div>
                        <div className="col-md-2">{booking.service}</div>
                        <div className="col-md-2">Credit Card</div>
                        <div className="col-md-3">
                            <select onChange= {e=> handleStatus(e.target.value, booking._id)} className={booking.status == 'Pending'? 'btn btn-danger' : booking.status  == 'Done' ? 'btn btn-success' : 'btn btn-info'}>
                                <option selected = {booking.status == 'Pending'} className="btn btn-danger">Pending</option>
                                <option selected = {booking.status == 'Done'} className="btn btn-success">Done</option>
                                <option selected = {booking.status == 'On Going'} className="btn btn-info">On Going</option>
                            </select>
                        </div>
                    </div>

                )
            }

        </div>
    );
};
export default OrderTable;