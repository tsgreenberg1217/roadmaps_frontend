import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import ImageUploader from './ImageUploader'
import {Form, Button} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'


class CreateTrip extends React.Component{
  constructor(){
    super()
    this.state={
      trip: '',
      fileURL: ''
    }
    this.handleTripChange = this.handleTripChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.fileLoaded = this.fileLoaded.bind(this)
  }


  handleTripChange(value){
    this.setState({
      trip: value
    })
  }

  componentDidMount() {
    this.reader = new FileReader()
    this.reader.onload = this.fileLoaded
  }

  fileLoaded(event) {
    this.setState({ fileURL: event.target.result})
  }

  handleChange(event) {
    if(!event.target.files || !event.target.files[0]) return;
    this.reader.readAsDataURL(event.target.files[0])
  }

  renderLabel() {
    return this.props.label ? <label htmlFor="image_uploader">{this.props.label}</label> : null
  }
  //
  // renderImage() {
  //   return this.state.fileURL ? <img src={this.state.fileURL} className="uploaded-preview" alt="Uploaded Image" /> : null
  // }


  render(){
    return(
      <div>
        <Form onSubmit = {()=>this.props.createTrip(this.state, this.props.history)}>
          <input type = "text"
          onChange={(e)=>this.handleTripChange(e.target.value)}/>

          <input className="form-control" type="file" name="image_uploader" id="image_uploader" onChange={this.handleChange} />
          <br/>
          <Button type="Submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(connect(null, actions)(CreateTrip));
