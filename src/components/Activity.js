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
      loading: false,
      fileURL: null
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
    this.setState({ fileURL: event.target.result, loading: false })
  }

  handleChange(event) {
    if(!event.target.files || !event.target.files[0]) return;
    this.setState({ loading: true })
    this.reader.readAsDataURL(event.target.files[0])
  }

  renderLabel() {
    return this.props.label ? <label htmlFor="image_uploader">{this.props.label}</label> : null
  }

  renderImage() {
    return this.state.fileURL ? <img src={this.state.fileURL} className="uploaded-preview" alt="Uploaded Image" /> : null
  }

  handleSubmitPicture(e, activity_id, url){
    e.preventDefault()
    this.props.submitPicture(activity_id,url)
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

        <form onSubmit = {(e)=>this.handleSubmitPicture(e,this.props.id,this.state.fileURL)}>
          <input className="form-control" type="file" name="image_uploader" id="image_uploader" onChange={this.handleChange} />
          <Button type="Submit">Upload Picture</Button>
        </form>
        <Button
        floating = "left"
        onClick = {(e)=>{this.handleDeleteActivity(e)}}>Delete</Button>
        <Divider clearing />
      </div>
    )
  }
}


export default connect(null, actions)(Activity)
