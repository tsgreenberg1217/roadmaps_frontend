
/*global google*/

import React from 'react'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'
import { connect } from 'react-redux';
import * as actions from '../actions';

class MyMapComponent extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const DirectionsComponent = compose(
      withProps({
        stops: this.props.stops,
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAa_1I2oAv-cNMvVnW0EeAW6WaUeBniIhE&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `400px` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `600px`, width:'600px', float: 'left', diplay: 'block' }} />,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          const allStops = this.props.stops
          const firstStop = allStops.shift()
          const lastStop = allStops.pop()
          const middleStops = allStops.map(stop => {return{location: stop.name, stopover: true}}) || [{}]
          const DirectionsService = new google.maps.DirectionsService();
          DirectionsService.route({
            origin: new google.maps.LatLng(firstStop.lat, firstStop.lng),
            waypoints: middleStops,
            destination: new google.maps.LatLng(lastStop.lat, lastStop.lng),
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
        // defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
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
