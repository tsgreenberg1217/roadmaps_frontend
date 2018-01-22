import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import ImageUploader from './ImageUploader'
import {Form, Button, Modal, Header, Icon, Segment} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import './App.css'
import Validate from "react-validate-form"



class CreateTrip_form extends React.Component{
  constructor(){
    super()
    this.state={
      trip: '',
      tripError: false,
      tripMessage: 'enter your roadtrip title here',

      start: '',
      startError :false,
      startMessage: 'starting city, state',

      end: '',
      endError: false,
      endMessage: 'ending city, state',

      buttonLoad: false,

      fileURL: '',
      open: false
    }
    this.handleTripChange = this.handleTripChange.bind(this)
    this.handleImgUrlChange = this.handleImgUrlChange.bind(this)
    this.fileLoaded = this.fileLoaded.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handleCreateTrip = this.handleCreateTrip.bind(this)
    this.handleStartChange = this.handleStartChange.bind(this)
    this.handleEndChange = this.handleEndChange.bind(this)
    // this.formValidate = this.formValidate.bind(this)
    this.validate = this.validate.bind(this)
    this.startValidate = this.startValidate.bind(this)

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
      buttonLoad: false,
      open: !this.state.open
    })
  }

  handleCreateTrip(){
    const {trip, fileURL, start, end} = this.state
    const value = {trip, fileURL, start, end}
    this.props.createTrip(value,this.props.history)
  }

  startValidate(start){
    if(start !== 'invalid place'){
      return true
    }
    else{
      this.setState({
        startError: true,
        startMessage: 'please put in a valid location',
        start: ''
      }, () => false)
    }
  }

  endValidate(end){
    end !== 'invalid place' ? true : false
    if(end !== 'invalid place'){
      return true
    }
    else{
      this.setState({
        endError: true,
        endMessage: 'please put in a valid location',
        end: ''
      }, () => false)
    }
  }

  tripValidate(trip){
    if(trip !== ''){
      return true
    }
    else{
      this.setState({
        tripError: true,
        tripMessage: 'Really? You thought we would let you leave this blank?',
        trip: ''
      }, () => false)
    }
  }

  startValidate(){
    debugger
    this.setState({
      buttonLoad: true
    }, this.validate)
  }

  validate(){
    debugger
    const URL_START = 'http://localhost:3000/api/v1'
    const {trip,start,end} = this.state
    const that = this
    fetch(`${URL_START}/validations/start-end`,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.token}`
      },
      method: "POST",
      body: JSON.stringify({start,end})})
      .then(res => res.json())
      .then(json =>{
        let startValid = json.start !== 'invalid place' ? true : false
        let endValid = json.end !== 'invalid place' ? true : false
        let tripValid = this.state.trip !== '' ? true : false
        let allValid = startValid && endValid && tripValid
        allValid ? that.toggleModal() : that.setState({buttonLoad: false})
        // if(allValid){
        //   that.toggleModal()
        // }
        // else{
        //   debugger
        //   that.setState({buttonLoad: false})
        // }
      }
    )
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
      value = {this.state.trip}
      placeholder = {this.state.tripMessage}
      error = {this.state.tripError}
      onChange = {(e)=>this.handleTripChange(e.target.value)}
      />

      <Form.Input
      value = {this.state.start}
      placeholder = {this.state.startMessage}
      error = {this.state.startError}
      onChange = {(e)=>this.handleStartChange(e.target.value)}
      />

      <Form.Input
      value = {this.state.end}
      placeholder = {this.state.endMessage}
      error = {this.state.endError}

      onChange = {(e)=>this.handleEndChange(e.target.value)}

      />
        <Button
         onClick = {this.startValidate}
        loading = {this.state.buttonLoad}>
        Lets go!
        </Button>
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
