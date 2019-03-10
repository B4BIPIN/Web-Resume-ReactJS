import React from 'react';
import './AboutMe.css';
import Chart from'./AboutComponents/Skills/Chart';
import Experience from './AboutComponents/Experience/Experience';
import Educaton from './AboutComponents/Education/Education';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class  AboutMe extends React.Component {
    constructor(){
        super();
        this.stickyHeader = React.createRef();
    this.state = {
        chartData:{
            labels:['HTML','CSS','JavaScript','Bootsrap','JQuery','ReactJS','Angular','VueJS','Core Java'],
            datasets:[{
                label:'Technical Skills',
                data:[80,80,100,85,75,90,80,75,90],
                backgroundColor: [
                     'rgba(227,79,38,0.5)',
                    'rgba(47, 111, 173,0.5)',
                    'rgba(247, 223, 30,0.5)',
                    'rgba(111, 68, 158,0.5)',
                    'rgba(74,120,110,0.5)',
                    'rgba(88, 192, 223,0.5)',
                    'rgba(234, 96, 127,0.5)',
                    'rgba(139,242,44,0.5)',
                    'rgba(41, 147, 7, 0.5)'
                ],
                borderWidth:0,
                borderColor:'#777',
                hoverBorderWidth:2,
                hoverBorderColor:'#777'
            }]
        },
        chartOptions: {
            title: {
                display:true,
            text:'Professional Skills',
                fontSize:30
            },
            legend:{
                display:false,
                position:'right',
                labels:{
                    fontColor: 'black'
                },
                layout:{}
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize:18
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize:18
                    }
                }]
            }
        } 
    };
    }
    componentDidMount() {
      this.stickyHeader.current.addEventListener(
        "scroll",
        this.isScrollOccured.bind(this)
      );
    }
  
    componentWillUnmount() {
      this.stickyHeader.current.removeEventListener(
        "scroll",
        this.isScrollOccured.bind(this)
      );
    }
  
    isScrollOccured=()=> {
      console.log("Scrolling Occured");
    }
      render(){
        // return  <div className="About" ref={ref => {this.stickyHeader = ref}}>
        return <div className="About" ref={this.stickyHeader}>
    {/* ----------------------------------------------------------------------------------------------- */}
            <div className="AboutHeading">
            <h1>Bipin Bharti</h1>
            <h3>Web Developer / Web Designer <i><FontAwesomeIcon icon="pen-nib"/></i></h3>
            </div>
    {/* ----------------------------------------------------------------------------------------------- */}        
            <div className="AboutMe AboutCommon">
                <hr className="block"/>
                <h3>ABOUT ME</h3>
                <hr className="divider"/>
                <p>I am a <b>Web Developer</b> and <b>Web Designer</b> from New Delhi, India. Want to connect bridge between Developers and Designers. Collaborate with project teams to create user-friendly solutions. Have an experience of over 1 year providing freebie services.
                </p>
            </div>
    {/* ----------------------------------------------------------------------------------------------- */}        
            <div className="AboutPersonal AboutCommon">
            <hr className="block"/>
            <h3>PERSONAL INFO </h3>
            <hr className="divider"/>
              <div className="AboutPersonalFlex">
               <div className="AboutPersonalFlexLeft">
                <ul>
                        <li>Name</li>
                        <hr/>
                         <li>DOB</li>
                         <hr/>
                          <li>Address</li>
                          <hr/>
                          <li>Email</li><br/>
                          <hr/>
                          <li>Availability</li>
                          <hr/>
                          <li>Contact</li>
                </ul>
               </div>
            <div className="AboutPersonalFlexRight">
            <ul>
                      <li><span>Bipin Bharti</span></li>
                      <hr/>
                         <li> <span>Dec 13,1997</span></li>
                         <hr/>
                          <li> <span>New Delhi,India</span></li>
                          <hr/>
                          <li> <span>mr.bbharti@gmail.com <br/> <a href="mailto:mr.bbharti@gmail.com">Mail Me</a></span></li>
                          <hr/>
                          <li><span>Full Time</span> </li>
                          <hr/>
                          <li><span>+91 9643761780 <br/> <a href="tel:+91 9643761780">Contact Me</a></span></li>
                </ul>
            </div>
              </div>
            </div>
    {/* ----------------------------------------------------------------------------------------------- */}        
            <div className="Skills AboutCommon">
            <hr className="block"/>
            <h3>SKILLS</h3>
            <hr className="divider"/>
                <Chart data={this.state.chartData} options={this.state.chartOptions}/>
            </div>
    {/* ----------------------------------------------------------------------------------------------- */}        
            <div className="AboutExperience AboutCommon">
            <hr className="block"/>
            <h3>EXPERIENCE</h3>
            <hr className="divider"/>
            <Experience/>
            </div>
    {/* ----------------------------------------------------------------------------------------------- */}        
            <div className="AboutEducation AboutCommon">
            <hr className="block"/>
            <h3>EDUCATION</h3>
            <hr className="divider"/>
            <Educaton/>
            </div>
    {/* ----------------------------------------------------------------------------------------------- */}        
            <div className="Hobbies AboutCommon">
            <hr className="block"/>
            <h3>HOBBIES</h3>
            <hr className="divider"/>
                <div className="PersonalHobbies">
                <div className="hobby"><i><FontAwesomeIcon icon="handshake"/></i>
                    {/* <span>Bonding</span> */}
                </div>
                <div className="hobby"><i><FontAwesomeIcon icon="palette"/></i>
                    {/* <span>Painting</span> */}
                </div>
                <div className="hobby"><i ><FontAwesomeIcon icon="chess"/></i><br/>
                {/* <span>Chess</span> */}
                </div>
                </div>
            </div>
        </div>
    }
}
export default AboutMe;  


// <ul>
// <li>Name : <span>Bipin Bharti</span></li>
// <li>Date of Birth : <span>Dec 13,1997</span></li>
// <li>Address : <span>New Delhi,India</span></li>
// <li>Email : <span>mr.bbharti@gmail.com <a href="mailto:mr.bbharti@gmail.com">Email Me</a></span></li>
// <li>Availability : <span>Full Time</span></li>
// </ul> 