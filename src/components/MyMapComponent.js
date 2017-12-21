
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

<<<<<<< HEAD
const MyMapComponent = compose(
=======
const MyFancyComponent = compose(
>>>>>>> waypoint-feature-async-fix
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
      // debugger
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(41.8507300, -87.6512600),
        destination: new google.maps.LatLng(41.8525800, -87.6514100),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
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
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);

<<<<<<< HEAD
class MyFancyComponent extends React.PureComponent {
  // state = {
  //   isMarkerShown: false,
  // }
  //
  // componentDidMount() {
  //   this.delayedShowMarker()
  // }
  //
  // delayedShowMarker = () => {
  //   setTimeout(() => {
  //     this.setState({ isMarkerShown: true })
  //   }, 3000)
  // }
  //
  // handleMarkerClick = () => {
  //   this.setState({ isMarkerShown: false })
  //   this.delayedShowMarker()
  // }

  render() {
    // debugger
    return (
      <MyMapComponent/>
    )
  }
}
=======
>>>>>>> waypoint-feature-async-fix

export default () => <MyFancyComponent />
