
/*global google*/
// const google = window.google;

import React from 'react'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'

class MyMapComponent extends React.Component {
  constructor(props){
    super(props)
    // this.state = {}
  }


  render() {
    console.log(this.props)

    const DirectionsComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAa_1I2oAv-cNMvVnW0EeAW6WaUeBniIhE&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({

        componentDidMount() {
          const DirectionsService = new google.maps.DirectionsService();

          DirectionsService.route({
            origin: new google.maps.LatLng(26.368306, -80.128932),
            waypoints: [{location: 'Boca Raton, FL', stopover: true}, {location: 'Sarasota, FL', stopover: true},{location: 'St. Petersburg, FL', stopover: true},{location: 'St. Augunstine, FL', stopover: true}, {location: 'Orlando, FL', stopover: true}],
            destination: new google.maps.LatLng(26.368306, -80.128932),
            travelMode: google.maps.TravelMode.DRIVING,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: {...result},
                markers: true
              })
            } else {
              console.error(`error fetching directions ${result}`);
            }
          });
        }
      })
    )(props =>
      <GoogleMap
        defaultZoom={3}
        defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
      >
        {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
      </GoogleMap>
    );



    return (
      <DirectionsComponent
        // isMarkerShown={this.state.isMarkerShown}
        // onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}


export default MyMapComponent
