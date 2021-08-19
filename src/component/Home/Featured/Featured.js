import React from 'react';
import bali from '../../../image/bali.jpg'
const Featured = () => {
    const containerStyle = {
        backgroundColor: '#eaf5f2',
        padding: '30px 10px',
        borderRadius: '10px'
    }
    return (
        <section className="mt-5" style={containerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4 style={{ color: '#1DE2BE' }}>Enjoy Your<br />Fantastic Holiday </h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, labore!</p>
                        <div className="row">
                            <div className="col-md-6">
                                <h4 style={{ color: '#F30CD0' }}>15+</h4>
                                <p>Services We Provide</p>
                            </div>
                            <div className="col-md-6">
                                <h4 style={{ color: '#F30CD0' }}>1000+</h4>
                                <p>Happy Visitor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img style={{ height: '200px', width: '90%' }} src={bali} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;