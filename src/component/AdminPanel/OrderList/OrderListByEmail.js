import React from 'react';
import OrderTable from './OrderTable';

const OrderListByEmail = ({bookings}) => {
    return (
        <div>
            {
                bookings.length? 
                <OrderTable bookings = {bookings}></OrderTable> 
                :
                <h3 className="text-warning">You Have No Tour Booking yet . please booking a tour</h3>
            }
        </div>
    );
};

export default OrderListByEmail;