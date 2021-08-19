import React from 'react';
import debotakhum from '../../../image/debotakhum.jpg'
import amiakhum from '../../../image/amiakhum.jpg';
import balidoor from '../../../image/balidoor.jpeg';
import sikim from '../../../image/sikim.jpg';
import meghaloya from '../../../image/mag.webp'
import nepal from '../../../image/nepal.jpg';
import darj from '../../../image/darj.jpeg';
import maldives from '../../../image/download.jpg'
import './Tour.css'
import TourSpot from '../TourSpot/TourSpot';
const images = [
    {
        id : 1,
        img : debotakhum,
    },
    {
        id : 2,
        img : amiakhum,
    },{
        id : 3,
        img : balidoor,
    },{
        id : 4,
        img : sikim,
    },{
        id : 5,
        img : meghaloya,
    },{
        id : 6,
        img : nepal,
    },{
        id : 7,
        img : darj,
    },{
        id : 8,
        img : maldives,
    },
]
const TourImage = () => {
    const containerStyle = {
        backgroundColor: '#eaf5f2',
        padding: '30px 10px',
        borderRadius: '10px'
    }
    return (
        <section className="blogs my-5 "style={containerStyle} >
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">Choose Your</h5>
                    <h1>Perfect Holiday</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo <br/>  ligula eget dolor. Aenean massa. Cum sociis the</p>
               </div>
               <div className="row mt-5">
                    {
                        images.map(data => <TourSpot data = {data} key = {data.id}></TourSpot>)
                    }
               </div>
           </div>
       </section>
    );
};

export default TourImage;