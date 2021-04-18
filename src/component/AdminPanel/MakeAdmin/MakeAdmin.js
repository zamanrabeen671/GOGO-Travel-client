import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import MiniNav from '../../Shared/MiniNav/MiniNav';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [page, setPage] = useState('Make Admin')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://morning-waters-67537.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result) {
                alert('admin added successfully');
            }
        })
    };
    const containerStyle = {
        backgroundColor: 'whiteSmoke',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    }
    return (
        <section>
            <MiniNav page = {page}></MiniNav>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 container-style">
                    <div style={containerStyle}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-group">
                                <input name="email" {...register("email", { required: true })} className="form-control" placeholder="admin@gmail.com" />

                                {errors.email && <span>This field is required</span>}

                            </div>
                            <input type="submit" className="btn btn-danger"/>
                        </form>
                    </div>
                </div>
                <div className="col-md-3">

                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;