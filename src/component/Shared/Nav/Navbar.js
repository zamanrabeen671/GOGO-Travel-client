import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/zzzzzzzsd.png.jpg'
import { UserContext } from '../../../App';
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        {/* <img src={logo} style={{height: '30px' , width: '100px'}} alt=""/> */}
                        GOGO TRAVELS
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link ps-3 active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link ps-3" to="/" >Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link ps-3 text-dark" to="/admin">Book</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link ps-3" to="/">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link ps-3 text-danger"  to="/login">{
                                    loggedInUser.email? loggedInUser.name : 'Login'
                                }</Link>
                            </li>
                           

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;