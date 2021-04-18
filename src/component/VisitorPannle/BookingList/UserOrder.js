import React from 'react';
import touricon from '../../../image/touricon.png'
const UserOrder = ({ booked }) => {
    console.log(booked);
    const containerStyle = {
        backgroundColor: 'whiteSmoke',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    }
    
    return (
        <div className="col-md-6">
            <div style={containerStyle}>
                <div className="row">
                    <div className="col-md-7">
                        <img src={touricon} style={{ height: '50px', width: '100px' }} alt="" />
                    </div>
                    <div className="col-md-4">
                        <button className={booked.status=== "pending" ?  "btn btn-danger" : booked.status === 'Done' ? "btn btn-success" :
                         "btn btn-info" }>{booked.status}</button>
                    </div>
                </div>
                <h4 className="text-center">{booked.service}</h4>
                <p>{booked.description}</p>
               
            </div>
        </div>
    );
};

export default UserOrder;