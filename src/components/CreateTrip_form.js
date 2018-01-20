import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import ImageUploader from './ImageUploader'
import {Form, Button, Modal, Header, Icon, Segment} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import './App.css'


class CreateTrip_form extends React.Component{
  constructor(){
    super()
    this.state={
      trip: '',
      fileURL: '',
      start: '',
      end: '',
      open: false
    }
    this.handleTripChange = this.handleTripChange.bind(this)
    this.handleImgUrlChange = this.handleImgUrlChange.bind(this)
    this.fileLoaded = this.fileLoaded.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handleCreateTrip = this.handleCreateTrip.bind(this)
    this.handleStartChange = this.handleStartChange.bind(this)
    this.handleEndChange = this.handleEndChange.bind(this)


  }

  handleEndChange(value){
    this.setState({
      end: value
    })
  }

  handleStartChange(value){
    this.setState({
      start: value
    })
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
    this.setState({ fileURL: event.target.result},this.handleCreateTrip)
  }

  handleImgUrlChange(event) {
    if(!event.target.files || !event.target.files[0]) return;
    this.reader.readAsDataURL(event.target.files[0])
  }

  toggleModal(){
    this.setState({
      open: !this.state.open
    })
  }

  handleCreateTrip(){
    const {trip, fileURL, start, end} = this.state
    const value = {trip, fileURL, start, end}
    this.props.createTrip(value,this.props.history)
    // this.toggleModal()
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
      <Form size = 'small'>
      <Segment
      inverted
      padded = 'very'>
      <Header as='h2' color='black' textAlign='left' >
      Start planning your new roadtrip
      </Header>
      <Form.Input
      placeholder = 'what is the title of your trip?'
      onChange = {(e)=>this.handleTripChange(e.target.value)}
      />
      <Form.Input
      placeholder = 'starting city'
      onChange = {(e)=>this.handleStartChange(e.target.value)}
      />
      <Form.Input
      placeholder = 'ending city'
      onChange = {(e)=>this.handleEndChange(e.target.value)}

      />
      <Button onClick = {this.toggleModal}>Lets go!</Button>
      </Segment>
      </Form>


      <Modal
      open = {this.state.open}
      dimmer
      closeOnDimmerClick>
        <Header content='Wanna give your trip a profile picture?' textAlign = 'left' />
        <Modal.Content>
        A profile picture will help you keep track of your trips to you and your friends
        </Modal.Content>
        <Modal.Actions style = {{margin: '2%'}}>

        <Button color='red'
        style = {{float: 'right'}}
        onClick = {this.toggleModal}>
        Nah
        </Button>
        <label className = 'fileContainer'
        name="image_uploader" id="image_uploader" onChange={this.handleImgUrlChange}>
          Yes!
          <input type="file"onChange={this.handleImgUrlChange} />
        </label>

        </Modal.Actions>
      </Modal>


      </div>
    )
  }
}

// <Form >
// <input className="form-control" type="file" name="image_uploader" id="image_uploader" onChange={this.handleImgUrlChange} />
// </Form>
// const {trip, fileURL} = this.state
// <div>
// <Button onClick = {this.toggleModal}>Create Trip</Button>
// <Modal
// open = {this.state.open}
// dimmer
// closeOnDimmerClick>
//   <Header icon='archive' content='Create your trip' />
//   <Modal.Content>
//   </Modal.Content>
//     <Form >
//       <input type = "text"
//       onChange={(e)=>this.handleTripChange(e.target.value)}/>
//       <input className="form-control" type="file" name="image_uploader" id="image_uploader" onChange={this.handleImgUrlChange} />
//     </Form>
//   <Modal.Actions>
//     <Button color='red'
//     onClick = {this.toggleModal}>
//       <Icon name='remove' /> Cancel
//     </Button>
//     <Button color='green'
//       onClick = {()=>this.handleCreateTrip({trip, fileURL}, this.props.history)}>
//       <Icon name='checkmark' /> Create
//     </Button>
//   </Modal.Actions>
// </Modal>
// </div>

export default withRouter(connect(null, actions)(CreateTrip_form));
