import React from 'react';
import loader from '../../../image/preloader.gif';
const Preloader = (props) => {
    return (
        <div>
            <div className="text-center col-12 py-5 my-5" style={{ display: props.visibility }}>
                <img src={loader} alt="" />
            </div>
        </div>
    );
};

export default Preloader;