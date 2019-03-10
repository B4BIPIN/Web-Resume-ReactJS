import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Services() {
    return <div className="Services">
                <h1>SERVICES</h1>
                <hr className="block"/>
                <h3>MY SERVICES</h3>
                <hr className="divider"/>
                <div className="ServicesContainer">
                <div className="Service">
                <i><FontAwesomeIcon icon="laptop-code"/></i>
                    <h3>WEB DEVELOPMENT</h3>
                    <p>Have and idea and want to see it live on Internet. Let's have a cup of coffee together :p</p>
                </div>
                <div className="Service">
                <i><FontAwesomeIcon icon="mobile-alt"/></i>
                <h3>MOBILE RESPONSIVE</h3>
                <p>Mobile responsiveness is the demand of time. Whether it is a new website or your pre-built site, Any website can be turned into its mobile responsive version.</p>
                </div>
             
                <div className="Service">
                <i><FontAwesomeIcon icon="smile-beam"/></i>
                <h3>USER EXPERIENCE</h3>
                <p>Care overall experience of customers using our products and services in terms of how easy and pleasing it is to use.</p>
                </div>
      
                </div>
            </div>
}
export default Services; 