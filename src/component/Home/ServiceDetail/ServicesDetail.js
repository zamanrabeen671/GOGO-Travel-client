import React from 'react';
import { useHistory } from 'react-router';
import './serviccDetail.css';
const ServicesDetail = ({events}) => {
    const history = useHistory();
    const booking = id => {
        history.push(`/service/${id}`);
    }
    return (
        <div className="col-md-4">
            <div style={{textAlign: 'center'}} className="service-container">
                <img style={{height: '100px', width: '80%'}} src={`data:image/jpeg;base64,${events.image.img}`} />
                <h4 style={{fontWeight: 'bold'}}>{events.name}</h4>
                <h5 style={{color: 'tomato', fontSize: '20px'}}>${events.fee}</h5>
                <p className="text-secondary"><small>{events.description}</small></p>
                <button className="btn btn-success" onClick={() => booking(events._id)}>Book</button>
            </div>
        </div>
    );
};

export default ServicesDetail;