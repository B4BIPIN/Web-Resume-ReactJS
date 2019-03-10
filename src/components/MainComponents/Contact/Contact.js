import React from 'react';
import './Contact.css';
import MyGoogleMap from './GoogleMap/MyGoogleMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Contact extends React.Component {
        constructor(props){
                super(props);
                this.state = {}
                this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleSubmit(event) {
                event.preventDefault();
                const form = event.target;
                const data = new FormData(form);
                // this.setState ({res:this.stringifyFormData(data)});
                for(let name of data.keys() ){
                        const input = form.elements[name];
                        const parserName = input.dataset.parse;
                        if(parserName){
                                // const parser = inputParsers[parserName];
                                // const parsedValue = parser(data.get(name));
                                // data.set(name, parsedValue);
                                console.log('inside =',input.checkValidity());
                        }
                        
                }
                console.log('outside =',form.checkValidity());
                }            

         stringifyFormData(fd) {
                const data = {};
                      for (let key of fd.keys()) {
                        data[key] = fd.get(key);
                }
                return JSON.stringify(data, null, 2);
              }

    render(){
        return <div className="Contact">
        <h1>CONTACT</h1>
        <div className="GoogleMap">
                <hr className="block"/> 
                <h3>MAP LOCATION</h3>
                <hr className="divider"/>
               <MyGoogleMap/>
        </div>
        <div className="Personal">
                <hr className="block"/> 
                <h3>PERSONAL INFO</h3>
                <hr className="divider"/>
                <div className="PersonalDeep">
                <div className="PersonalContact"><i><FontAwesomeIcon icon="map-marker-alt"/></i>
                        <h4>Drop On In</h4>
                        <p>Om Residency,<br/> Gali Number 7, Sector-17,<br/> Rohini, Delhi-110085, India</p>
                 </div>
                <div className="PersonalContact"><i><FontAwesomeIcon icon="mobile-alt"/></i>
                <h4>Give Me A Call</h4>
                        <p>Mobile : +91 9643761780 <br/> Office : +91 9643761780</p>
                </div>
                <div className="PersonalContact"><i><FontAwesomeIcon icon="paper-plane"/></i>
                <h4>Let's Connect</h4>
                        <p>Email : <a  href="mailto:mr.bbharti@gmail.com" target="_blank" rel="noopener noreferrer" >mr.bbharti@gmail.com</a> <br/> Twitter : <a href="https://www.twitter.com/@MrBBharti" target="_blank" rel="noopener noreferrer">@MrBBharti</a><br/> Skype : <a href="https://preview.web.skype.com/8:live:9543309407339197578" target="_blank" rel="noopener noreferrer">Bipin Bharti</a></p>
                </div>
                </div>                        
        </div>
        <div className="ContactMe">
        </div>

</div>
 }
}
export default Contact; 



// 28.7360245
// 77.1184551


// <div className="Form">
// <hr className="block"/>
// <h3>REACH ME HERE</h3>
// <hr className="divider"/>
// <form onSubmit={this.handleSubmit} noValidate>
// <label htmlFor="username">Enter username</label>
// <input id="username" name="username" type="text" data-parse="uppercase" required/>

// <label htmlFor="email">Enter your email</label>
// <input id="email" name="email" type="email" required/>

// <label htmlFor="birthdate">Enter your birth date</label>
// <input id="birthdate" name="birthdate" type="text" data-parse="date"  placeholder="MM/DD//YYYY"  pattern="\d{2}\/\d{2}/\d{4}" required/>

// <button>Send data!</button>
// </form>
// </div>




// ===================================

// <CloudinaryContext cloudName="dwf0ujfjc">
// <Image publicId="sample" format="jpg">
//     <Transformation crop="fill" gravity="faces" width="300" height="200"/>
// </Image>
// </CloudinaryContext>


// <input name="file" type="file"
//    class="file-upload" data-cloudinary-field="image_id"
//    data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"/>