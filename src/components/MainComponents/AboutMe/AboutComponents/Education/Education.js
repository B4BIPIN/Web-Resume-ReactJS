import React,{Fragment} from 'react';
import './Education.css';
function Educaton(){
    return(<Fragment>

<ul className="timeline">
<li>
    <div className="direction-r">
        <div className="flag-wrapper">
            <span className="flag">B.Tech. in CSE |<span className="InsideFlag"> BPIT | IP University</span></span>
            <span className="time-wrapper"><span className="time">2016 - 2020</span></span>
        </div>
        <div className="desc">
        Pursuing B.Tech. in Computer Science Engineering from Bhagwan Parshuram Institute of Technology (BPIT) affiliated to GGSIPU. I'm very active in competitions and hackathons.
        </div>
    </div>
</li>
<li>
    <div className="direction-r">
        <div className="flag-wrapper">
            <span className="flag">12th in PCM |<span className="InsideFlag"> RSBV | CBSE</span></span>
            <span className="time-wrapper"><span className="time">2015- 2016</span></span>
        </div>
        <div className="desc">
        Completed my 12th std. studies from Rajkiya Sarvodaya Bal Vidyalaya, Surajmal Vihar in 2016 under the science branch.
        </div>
    </div>
</li>
<li>
    <div className="direction-r">
        <div className="flag-wrapper">
            <span className="flag">10th |<span className="InsideFlag"> LKPS | CBSE</span></span>
            <span className="time-wrapper"><span className="time">2014 - 2015</span></span>
        </div>
        <div className="desc">
        Completed my 10th std. studies from Lav Kush Public School, Mayur Vihar-III.
        </div>
    </div>
</li>
</ul>

    </Fragment>);
}
export default Educaton;