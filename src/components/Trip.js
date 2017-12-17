import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

const Trip = (props) =>{
  console.log(props.getTrip);
  return (
    <div key = {props.id}
    onClick = {()=> props.getTrip(props.id)}
    >{props.title}</div>
  )
}
export default connect(null, actions)(Trip);
