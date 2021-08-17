import React from 'react';
import saintMartin from '../../../image/saint.jpg';
import coxBajar from '../../../image/coxs.jpg';
import ladakh from '../../../image/ladakh.jpg';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const imageStyling = {
        height: '400px',
    }
    return (
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={saintMartin}
                        alt="First slide"
                        style={imageStyling}
                    />
                    <Carousel.Caption>
                        <div style={{color: 'black'}}>
                            <h3>Saint Martin</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <button className="btn btn-success">Explore</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={coxBajar}
                        alt="Second slide"
                        style={imageStyling}
                    />

                    <Carousel.Caption>
                    <div style={{color: 'black'}}>
                            <h3>Cox's Bajar</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <button className="btn btn-success">Explore</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ladakh}
                        alt="Third slide"
                        style={imageStyling}
                    />

                    <Carousel.Caption>
                    <div style={{color: 'black', backgroundColor: 'lightgray'}}>
                            <h3>Ladakh</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <button className="btn btn-success">Explore</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;