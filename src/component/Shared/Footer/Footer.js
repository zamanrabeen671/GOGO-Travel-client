import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.'
        }
    ]
    const ourAddress = [
        {name: "Green Road-8 ,Dhanmondi-Dhaka" , link: "//google.com/map"},
        {name: "YARD" , link: "//google.com/map"},
       
    ]
    const resources = [
        {name: "Resource" , link: "/Resource"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Blogs" , link: "/Blogs"},
        {name: "login" , link: "/Register"},
        {name: "Register" , link: "/Login"},
    ]
    const services = [
        {name: "Hotel" , link: "/Hotel"},
        {name: "Flight" , link: "/Flight"},
        {name: "Tours" , link: "/Tours"},
        {name: "Hotel" , link: "/Tour"},
        {name: "Car" , link: "/car"},
        {name: "CRUISE" , link: "/cruise"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"About us"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Resource" menuItems={resources}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-success">+880-1644-78-9051</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;