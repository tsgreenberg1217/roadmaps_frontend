import React from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyFancyComponent = withScriptjs(withGoogleMap((props) =>
  console.log(props)
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

export default () => <MyFancyComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkkZymmIhFolJNzBjNf4EIxZTy8ORmujo&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
