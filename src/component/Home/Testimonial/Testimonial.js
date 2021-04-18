import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
const Testimonial = ({testimonial}) => {
    console.log('from obh',testimonial.img);
    const {name, company, description} = testimonial.data;
    const boxStyle = {
        boxShadow: '5px 5px 10px gray',
        margin: '10px'
    }
    return (
        <div style={boxStyle} className="col-md-3 card ">
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={testimonial.img[0]} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{company}</p>
                </div>
            </div>

            <div className="card-body">
                <p className="card-text text-center">{description}</p>
            </div>

            <div className="d-flex justify-content-center align-items-center m-0">
                <p style={{color: 'goldenrod'}}><small><FontAwesomeIcon icon={faStar} /></small></p>
                <p style={{color: 'goldenrod'}}><small><FontAwesomeIcon icon={faStar} /></small></p>
                <p style={{color: 'goldenrod'}}><small><FontAwesomeIcon icon={faStar} /></small></p>
                <p style={{color: 'goldenrod'}}><small><FontAwesomeIcon icon={faStar} /></small></p>
                <p style={{color: 'goldenrod'}}><small><FontAwesomeIcon icon={faStarHalfAlt} /></small></p>
            </div>
        </div>
    );
};

export default Testimonial;