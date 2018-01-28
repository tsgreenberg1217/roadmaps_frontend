import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
// import ImageUploader from './ImageUploader'
import {Form, Button, Modal, Header, Icon, Segment} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import './App.css'
import Validate from "react-validate-form"
const URL_START = require('../routes/routes').url



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



  startValidate(){
    this.setState({
      buttonLoad: true
    }, this.validate)
  }

  validate(){
    // const URL_START = `https://safe-caverns-60257.herokuapp.com/api/v1`
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
        allValid ? that.toggleModal() : that.handleValidationError(trip,tripValid,this.state.start,startValid,this.state.end,endValid)
      }
    )
  }

  handleValidationError(trip,tripValid,start,startValid,end,endValid){
    const locationError = "Enter a valid location"
    const TripError = 'Really? You thought we would let you leave this blank?'
    const blank = ''
    const tripDefault = 'enter your roadtrip title here'
    const startDefault = 'starting city, state'
    const endDefault = 'ending city, state'

    let tripMessage = tripValid ? tripDefault : TripError
    let startMessage = startValid ? startDefault : locationError
    let endMessage = endValid ? endDefault : locationError

    let tripVal = tripValid ? trip : blank
    let startVal = startValid ? start : blank
    let endVal = endValid ? end : blank
    this.setState({
      trip: tripVal,
      tripError: !tripValid,
      tripMessage : tripMessage,

      start: startVal,
      startError: !startValid,
      startMessage: startMessage,

      end: endVal,
      endError: !endValid,
      endMessage: endMessage,

      buttonLoad: false

    })


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

        <label className = 'fileContainer'
        name="image_uploader" id="image_uploader" onChange={this.handleImgUrlChange}>
          Yes!
          <input type="file"onChange={this.handleImgUrlChange} />
        </label>

        <Button color='red'
        style = {{float: 'right'}}
        onClick = {this.handleCreateTrip}>
        Nah
        </Button>
        </Modal.Actions>
      </Modal>


      </div>
    )
  }
}


export default withRouter(connect(null, actions)(CreateTrip_form));
