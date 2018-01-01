import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

class CreateActivity extends React.Component{

  constructor(){
    super()
    this.state = {
      activity: ''
    }
  }



  handleChange(value){
    this.setState({
      activity: value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.submitActivity(this.props.stop.trip_id, this.props.stop.id, this.state.activity)
  }


  render(){
    return(
      <div>
      <form onSubmit = {(e) => this.handleSubmit(e)}>
      <input
        type = "text"
        onChange = {(e)=>this.handleChange(e.target.value)}
        value = {this.state.activity}/>
      <button type= "Submit">submit</button>
      </form>
      </div>
    )
  }
}

export default connect(null, actions)(CreateActivity)
