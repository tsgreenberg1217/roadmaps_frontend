
/*global google*/
// const google = window.google;

import React from 'react'
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

const MyFancyComponent = compose(
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

      // debugger
      DirectionsService.route({
        origin: new google.maps.LatLng(41.8507300, -87.6512600),
        waypoints: [{location: 'williamsburg, VA', stopover: true}, {location: 'New York, NY', stopover: true},{location: 'Atlanta, GA', stopover: true}],
        destination: new google.maps.LatLng(26.158147, -80.325408),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: {...result},
            markers: true
          }, () => {debugger});
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
  </GoogleMap>
);


export default () => <MyFancyComponent />
