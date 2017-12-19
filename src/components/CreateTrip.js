import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

class CreateTrip extends React.Component{
  constructor(){
    super()
    this.state={
      trip: ''
    }
    this.handleTripChange = this.handleTripChange.bind(this)
  }


  handleTripChange(value){
    this.setState({
      trip: value
    })
  }

  
  render(){
    return(
      <div>
        <form onSubmit = {()=>this.props.createTrip(this.state.trip)}>
          <input type = "text"
          onChange={(e)=>this.handleTripChange(e.target.value)}/>
          <button type="Submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, actions)(CreateTrip);
