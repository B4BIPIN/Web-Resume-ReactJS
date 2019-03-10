  import React from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper,GoogleMap,WithGoogleMap,withScriptjs} from 'google-maps-react';
import {GoogleApiWrapper,Marker,InfoWindow} from 'google-maps-react';
import { CurrentLocation } from "./../../../../../src/Map";
class MyGoogleMap extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    }
    // console.log(this.state);
  }
  onMarkerClick = (props, marker, e) =>{
    // console.log(props,marker,e);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onClose = props => {
    console.log(props);
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
   render(){
     return <div>
         <CurrentLocation
       centerAroundCurrentLocation
       google={this.props.google}
         >
          <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
          options={{icon:'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'}}
        />
         <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
         <div>
            <h4>{this.state.selectedPlace.name}</h4>
        </div>
        </InfoWindow>
        </CurrentLocation>
  </div>;
   }
}
export default GoogleApiWrapper({
apiKey: 'AIzaSyBL0ttaiwno4JQJNOHHv_NAb7EIL7AL0UM'
})(MyGoogleMap);



// google={this.props.google}
// zoom={20}
// style={mapStyle}
// initialCenter= {{lat:28.736676,lng:77.112053}}