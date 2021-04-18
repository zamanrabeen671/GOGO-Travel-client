import { Dropdown } from 'react-bootstrap';
import React from 'react';

const OrderTable = ({ bookings }) => {
    console.log(bookings);
    const handleStatus = (id, name) => {
        console.log(id);
        console.log(name);

        fetch(`https://morning-waters-67537.herokuapp.com/update/${id}`,{
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({status: name})
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
                            <div>
                                <button onClick={() => handleStatus(booking._id, 'Pending')}  className="btn btn-danger">Pending</button> <br/>
                                <button onClick={() => handleStatus(booking._id, 'Done')}  className="btn btn-success">Done</button> <br/>
                                <button onClick={() => handleStatus(booking._id, 'On Going')}  className="btn btn-info">On Going</button>
                            </div>
                        </div>
                    </div>

                )
            }

        </div>
    );
};
export default OrderTable;