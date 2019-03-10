import React from 'react';
import './App.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
import fontawesome from '@fortawesome/fontawesome'
import {faCloudDownloadAlt,faUserTie,faConciergeBell,faAddressCard,faPhone,faFile
,faHandshake, faPalette, faChess, faLaptopCode,faMobileAlt,faSmileBeam,faFilter,
faMapMarkerAlt,faPaperPlane, faPenNib
} from '@fortawesome/free-solid-svg-icons';
// import {faFacebookF,faTwitter,faGithub,faStackOverflow, faLinkedinIn} from '@fortawesome/fontawesome-free-brands';
import ResumeContainer from './container/ResumeContainer';
import {BrowserRouter} from 'react-router-dom';
class App extends React.Component {
  render(){
    // library.add(faLinkedinIn,faFacebookF,faTwitter,faGithub,faStackOverflow);
  fontawesome.library.add(faCloudDownloadAlt,faUserTie,faConciergeBell,faAddressCard,faPhone,faFile,
  faHandshake, faPalette, faChess, faLaptopCode,faMobileAlt,faSmileBeam,faFilter,
  faMapMarkerAlt,faPaperPlane,faPenNib
  );
    return (<div className="App"><BrowserRouter><ResumeContainer/></BrowserRouter></div>)
  }
}
export default App;