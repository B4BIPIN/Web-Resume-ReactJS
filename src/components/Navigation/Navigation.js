import React from 'react';
import  {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navigation.css';
function Navigation() {
    var activeStyle = {
        color:'black',
        background:'yellow',
        // background:'rgb(255, 212, 45)',
        borderLeft:'1px solid black'
    }
    return <div className="Navigation">
                <NavLink to="/" className="MyNavLink" exact={true} 
                  activeStyle={activeStyle}
                activeClassName='is-active'><div className="MyDiv"><i><FontAwesomeIcon icon="user-tie"/></i><br/><span>About</span><br/>
                </div></NavLink>
                <NavLink to="/services" className="MyNavLink" 
                activeStyle={activeStyle}
                activeClassName='is-active'><div className="MyDiv"><i ><FontAwesomeIcon icon="concierge-bell"/></i><br/><span>Services</span></div></NavLink>
                <NavLink to="/portfolio" className="MyNavLink"
                activeStyle={activeStyle}
                activeClassName='is-active'><div className="MyDiv"><i ><FontAwesomeIcon icon="address-card"/></i><br/><span>Portfolio</span></div></NavLink>
                <NavLink to="/contact" className="MyNavLink"
                activeStyle={activeStyle}
                activeClassName='is-active'><div className="MyDiv"><i ><FontAwesomeIcon icon="phone"/></i><br/><span>Contact</span></div></NavLink>
                <NavLink to="/resumevd" className="MyNavLink"
                activeStyle={activeStyle}
                activeClassName='is-active'><div className="MyDiv"><i ><FontAwesomeIcon icon="file"/></i><br/><span>Resume</span></div></NavLink>

            </div>
}
export default Navigation;  