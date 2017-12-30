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

  handleSubmit(){
    // this.props.submitActivity(value)
  }

  handleChange(value){
    this.setState({
      activity: value
    })
  }


  render(){
    return(
      <div>
      <form>
      <input
        type = "text"
        onChange = {(e)=>this.handleChange(e.target.value)}
        value = {this.state.activity}/>
      </form>
      </div>
    )
  }
}

export default connect(null, actions)(CreateActivity)
