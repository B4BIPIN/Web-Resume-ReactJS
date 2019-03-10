import React from 'react';
import './Profile.css';
class Profile extends React.Component {
    resize = () => {
        this.Size=window.screen.width;
        return this.forceUpdate();
    }
componentDidMount() {
  window.addEventListener('resize', this.resize)
}

componentWillUnmount() {
  window.removeEventListener('resize', this.resize)
}
render(){
    return this.Size>0&&this.Size<750?<div className="ProfileName"><h2>BIPIN BHARTI</h2></div>:<div className="Profile">
             <img src='https://res.cloudinary.com/bipinbhartiassetscloud/image/upload/c_thumb,w_250,g_face/v1550154329/WhatsApp_Image_2018-12-26_at_2.31.21_PM_1.jpg' alt="Bipin"/>
             <div className="BipinProfile">BIPIN BHARTI</div>
             <div className="HireMe">
             <a href="https://www.linkedin.com/in/bipin-bharti-311985171/"><div className="text">Hire Me</div></a>
            </div>
            </div>
}
}
export default Profile; 
