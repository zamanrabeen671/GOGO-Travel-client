import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../AdminPanel/Sidebar/Sidebar';
import MiniNav from '../../Shared/MiniNav/MiniNav';
import { useForm } from "react-hook-form";
import Payment from '../Payment/Payment';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Book = () => {
    const { id } = useParams();
    const [services, setServices] = useState({});
    const [page,setPage] = useState('Book')
    const [shippingData, setShippingData] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        setShippingData(data)
    };
    const handlePayment = paymentId => {
        const bookingInfo = {
            service: services.name,
            description: services.description,
            status: 'pending',
            shipment: shippingData,
            paymentId,
            orderTime: new Date()
        }
        fetch('https://morning-waters-67537.herokuapp.com/booking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                alert('booking success');
            }
        })
    }
    useEffect(() => {
        fetch('https://morning-waters-67537.herokuapp.com/service/' + id)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [id])


    return (
        <section>
            <MiniNav page = {page}></MiniNav>
            <div className="row">
                <div className="col-md-2 col-sm-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6 col-sm-3 container-style">
                    <div style={{display: shippingData ? 'none': 'block'}}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input name="name" {...register("name", { required: true })} className="form-control" defaultValue={loggedInUser.name} />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input name="email" {...register("email", { required: true })} className="form-control" defaultValue={loggedInUser.email} />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-group">

                                <input name="service" {...register("service", { required: true })} className="form-control" defaultValue={services.name} />
                                {errors.service && <span>This field is required</span>}
                            </div>
                            <div className="row">
                                <div className="col-md-10">
                                    <p>Your service charge will be {services.fee}</p>
                                </div>
                                <div className="col-md-2">
                                    <input className="btn btn-success" type="submit" />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div style={{display: shippingData ? 'block': 'none'}} className="mt-5">
                        <h2>Pay Your Event Pay.</h2>
                        <Payment handlePayment = {handlePayment} serviceFee = {services.fee}></Payment>
                    </div>
                </div>
                <div className="col-md-3">

                </div>
            </div>
        </section>
    );
};

export default Book;