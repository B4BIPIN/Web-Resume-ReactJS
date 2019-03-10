import React from 'react';
import './Main.css';
import {Switch,Route} from 'react-router-dom';
import AboutMe from './../MainComponents/AboutMe/AboutMe';
import Contact from './../MainComponents/Contact/Contact';
import Portfolio from './../MainComponents/Portfolio/Portfolio';
import Services from './../MainComponents/Services/Services';
import  ResumeVD from './../MainComponents/ResumeVD/ResumeVD';

class Main extends React.Component {
  render(){
    return (<div className="Main">  
<Switch>
       <Route path="/" exact component={AboutMe}></Route>
       <Route path="/services" component={Services}></Route>
       <Route path="/portfolio" component={Portfolio}></Route> 
       <Route path="/contact" component={Contact}></Route>
       <Route path="/resumevd" component={ResumeVD}></Route>
</Switch>
   </div>)
  }
}
export default Main; 