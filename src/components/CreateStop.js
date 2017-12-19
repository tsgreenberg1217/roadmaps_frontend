import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

class CreateStop extends React.Component{
  constructor(){
    super()
    this.state={
      stop: ''
    }
    this.handleStopChange = this.handleStopChange.bind(this)
  }


  handleStopChange(value){
    this.setState({
      stop: value
    })
  }


  render(){
    return(
      <div>
        <form onSubmit = {()=>this.props.submitStop(this.state.stop, this.props.trip_id)}>
          <input type = "text"
          onChange={(e)=>this.handleStopChange(e.target.value)}/>
          <button type="Submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, actions)(CreateStop);
