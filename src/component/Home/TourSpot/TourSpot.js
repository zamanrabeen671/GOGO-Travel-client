import React from 'react';

const TourSpot = ({data}) => {
    const imageStyle = {
        height: '150px',
        width: '250px',
        borderRadius: '10px',
        margin: '5px'
    }
    return (

            <div className="col-md-3">
                <img src={data.img}  style={imageStyle} alt=""/>
            </div>
    );
};

export default TourSpot;