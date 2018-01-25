import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
// import ImageUploader from './ImageUploader'
import {Form, Button, Modal, Header, Icon} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'


class CreateTrip extends React.Component{
  constructor(){
    super()
    this.state={
      trip: '',
      fileURL: '',
      open: false
    }
    this.handleTripChange = this.handleTripChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.fileLoaded = this.fileLoaded.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handleCreateTrip = this.handleCreateTrip.bind(this)
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

  toggleModal(){
    this.setState({
      open: !this.state.open
    })
  }

  handleCreateTrip(value, history){
    this.props.createTrip(value,history)
    this.toggleModal()
  }

  renderLabel() {
    return this.props.label ? <label htmlFor="image_uploader">{this.props.label}</label> : null
  }
  //
  // renderImage() {
  //   return this.state.fileURL ? <img src={this.state.fileURL} className="uploaded-preview" alt="Uploaded Image" /> : null
  // }


  render(){
    const {trip, fileURL} = this.state
    return(
      <div>
      <Button onClick = {this.toggleModal}>Create Trip</Button>
      <Modal
      open = {this.state.open}
      dimmer
      closeOnDimmerClick>
        <Header icon='archive' content='Create your trip' />
        <Modal.Content>
        </Modal.Content>
          <Form >
            <input type = "text"
            onChange={(e)=>this.handleTripChange(e.target.value)}/>
            <input className="form-control" type="file" name="image_uploader" id="image_uploader" onChange={this.handleChange} />
          </Form>
        <Modal.Actions>
          <Button color='red'
          onClick = {this.toggleModal}>
            <Icon name='remove' /> Cancel
          </Button>
          <Button color='green'
            onClick = {()=>this.handleCreateTrip({trip, fileURL}, this.props.history)}>
            <Icon name='checkmark' /> Create
          </Button>
        </Modal.Actions>
      </Modal>
      </div>
    )
  }
}

export default withRouter(connect(null, actions)(CreateTrip));
