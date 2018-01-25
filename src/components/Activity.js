import './App.css'
import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import ImageContainer from './ImageContainer'
import { Form, Button, Divider } from 'semantic-ui-react'



class Activity extends React.Component{
  constructor() {
    super()
    this.state = {
      fileURL: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.fileLoaded = this.fileLoaded.bind(this)
    this.handleSubmitPicture = this.handleSubmitPicture.bind(this)
    this.handleDeleteActivity = this.handleDeleteActivity.bind(this)
  }

  componentDidMount() {
    this.reader = new FileReader()
    this.reader.onload = this.fileLoaded
  }

  fileLoaded(event) {
    this.setState({ fileURL: event.target.result}, this.handleSubmitPicture)
  }

  handleChange(event) {
    if(!event.target.files || !event.target.files[0]) return;
    this.reader.readAsDataURL(event.target.files[0])
  }

  renderLabel() {
    return this.props.label ? <label htmlFor="image_uploader">{this.props.label}</label> : null
  }

  renderImage() {
    return this.state.fileURL ? <img src={this.state.fileURL} className="uploaded-preview" alt="Uploaded Image" /> : null
  }

  handleSubmitPicture(){
    this.props.submitPicture(this.props.id,this.state.fileURL)
  }

  handleDeleteActivity(e){
    this.props.deleteActivity(this.props.id)
  }

  render(){
    return(
      <div>
      <br/>
        <h3>{this.props.name}</h3>

        {(this.props.pictures !== undefined) ? <ImageContainer pictures = {this.props.pictures}/> : null}
        <br/>
        <label className = 'pictureUploader'
        name="image_uploader" id="image_uploader" onChange={this.handleChange}>
          Upload memory
          <input type="file"onChange={this.handleChange} />
        </label>
        <Button
        floating = "left"
        onClick = {(e)=>{this.handleDeleteActivity(e)}}
        >Delete Log</Button>
        <Divider clearing />
      </div>
    )
  }
}

// <form onSubmit = {(e)=>this.handleSubmitPicture(e,this.props.id,this.state.fileURL)}>
//   <input className="form-control" type="file" name="image_uploader" id="image_uploader" onChange={this.handleChange} />
//   <Button type="Submit">Upload Picture</Button>
// </form>

export default connect(null, actions)(Activity)
