import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import MiniNav from '../../Shared/MiniNav/MiniNav';

const AddService = () => {
    const [service, setService] = useState({});
    const [file, setFile] = useState(null);
    const [page, setPage] = useState('Add Service')
    const handleOnBlur = (e) => {
        const newService = { ...service };
        newService[e.target.name] = e.target.value;
        setService(newService);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', service.name);
        formData.append('description', service.description);
        formData.append('fee', service.fee);

        fetch('https://morning-waters-67537.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const containerStyle = {
        backgroundColor: 'lightGray',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    }
    return (
        <section>
            <MiniNav page={page}></MiniNav>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 container-style">
                    <div style={containerStyle}>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Service Name</label>
                                        <input onBlur={handleOnBlur} type="text" className="form-control" name="name" placeholder="Service Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">description</label>
                                        <input onBlur={handleOnBlur} type="text" className="form-control" name="description" placeholder="description" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Service Fee</label>
                                        <input onBlur={handleOnBlur} type="text" className="form-control" name="fee" placeholder="service fee" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AddService;