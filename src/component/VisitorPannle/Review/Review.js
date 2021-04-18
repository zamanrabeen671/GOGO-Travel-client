import React from 'react';
import Sidebar from '../../AdminPanel/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import MiniNav from '../../Shared/MiniNav/MiniNav';     
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [page, setPage] = useState('review')
    const onSubmit = data => {
        const userInfo = {
            data: data,
            img: [loggedInUser.img]
        }
        console.log(userInfo)
        fetch('https://morning-waters-67537.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Thank for your review')
                    window.location.reload(false)
                }
            })
    };
    return (
        <section>
            <div className="row">
                <MiniNav page = {page}></MiniNav>
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6 container-style">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input name="name" {...register("name", { required: true })} className="form-control" placeholder="your name" />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="company" {...register("company", { required: true })} className="form-control" placeholder="company name" />
                            {errors.company && <span>This field is required</span>}
                        </div>
                        <div className="form-group">

                            {/* <input name="description" cols="30" rows="10" {...register("description", { required: true })} className="form-control" placeholder="description" /> */}
                            <textarea name="description" cols="30" rows="5" {...register("description", { required: true })} className="form-control" placeholder="description"></textarea>
                            {errors.description && <span>This field is required</span>}
                        </div>
                        <input className="btn btn-success" type="submit" />
                    </form>
                </div>

                <div className="col-md-3">         

                </div>
            </div>
        </section>
    );
};

export default Review;