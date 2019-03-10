import React,{Fragment} from 'react';
import './Experience.css';
function Experience(){
    return(<Fragment>

<ul className="timeline">
<li>
    <div className="direction-r">
        <div className="flag-wrapper">
            <span className="flag">B B Pvt. Ltd</span>
            <span className="time-wrapper"><span className="time">1997 - current</span></span>
        </div>
        <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </div>
    </div>
    
</li>
<li>
    <div className="direction-r">
        <div className="flag-wrapper">
            <span className="flag">XYZ Company</span>
            <span className="time-wrapper"><span className="time">2008 - 2011</span></span>
        </div>
        <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </div>
    </div>
</li>
<li>
    <div className="direction-r">
        <div className="flag-wrapper">
            <span className="flag">ABC Pvt. Ltd.</span>
            <span className="time-wrapper"><span className="time">2000 - 2008</span></span>
        </div>
        <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
    </div>
</li>
</ul>

    </Fragment>);
}
export default Experience;