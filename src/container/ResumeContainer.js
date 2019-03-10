import React from 'react';
import './ResumeContainer.css';
import Navigation from '../components/Navigation/Navigation';
import Main from '../components/Main/Main';
import Connection from '../components/Connection/Connection';
import Profile from '../components/Profile/Profile';
class ResumeContainer extends React.Component {
  render(){
    return <div className="ResumeContainer">
              <Profile/>
              <Main/>
              <Connection/>
              <Navigation/>
            </div>
  }
}
export default ResumeContainer;  