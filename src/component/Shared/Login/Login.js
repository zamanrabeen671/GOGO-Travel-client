import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useHistory, useLocation } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../Nav/Navbar';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const user = result.user;
                const {displayName, email, photoURL} = user;
                const signedInUser = {name: displayName, email, img: photoURL}
                console.log(signedInUser);
                setLoggedInUser(signedInUser);
                storeAuthToken()
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }

      const buttonContainer = {
          borderTop: '1px solid black',
      }
    return (
        <div style={{backgroundColor: '#E2C9F1'}} className="login-page container">
            <Navbar></Navbar>
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5" style={{backgroundColor: 'white', margin: '0 auto'}}>
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="form-group">
                        <button className='btn btn-success'> Login</button>
                    </div>
                    <div  style={buttonContainer} className="from-group mt-5">
                    <p className="text-center text-secondary">Please Login with Google</p>
                        <button className="btn btn-primary" onClick={handleGoogleSignIn}><FontAwesomeIcon className="icon" icon={faGoogle} /> Google Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;