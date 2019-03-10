import React from 'react';
import './ResumeVD.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ResumeVD() {
    return <div className="ResumeVD">
    <h1>RESUME</h1>
    <hr className="block"/>
    <h3>MY RESUME</h3>
            <hr className="divider"/>
         
        <div className="Resume">
            <span>Resume</span>
            {/* <a href="https://res.cloudinary.com/bipinbhartiassetscloud/image/upload/v1550163445/BipinBharti_InternshalaResume-5_1.pdf"  target="_blank"><i className="fas fa-eye"></i></a> */}
            {/* <a href="https://res.cloudinary.com/bipinbhartiassetscloud/image/upload/v1550163445/BipinBharti_InternshalaResume-5_1.pdf" target="_blank" > <i className="fas fa-cloud-download-alt"></i></a> */}
            <a href="https://res.cloudinary.com/bipinbhartiassetscloud/image/upload/v1552198927/BipinBharti_InternshalaResume_mr.bbharti_gmail_1.pdf"  target="_blank" rel="noopener noreferrer"><i><FontAwesomeIcon icon="cloud-download-alt"/></i></a>
    </div>
    </div>
}
export default ResumeVD;
