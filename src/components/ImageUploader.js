import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Form, Input} from 'semantic-ui-react'


class ImageUploader extends Component {
  // static propTypes = {
  //   associations: PropTypes.string,
  //   fieldName: PropTypes.string.isRequired,
  //   label: PropTypes.string,
  //   message: PropTypes.string,
  //   model: PropTypes.string.isRequired
  // }

  constructor() {
    super()
    this.state = {
      loading: false,
      fileURL: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.fileLoaded = this.fileLoaded.bind(this)
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

  render() {
    return (
      <div>
        <Input type="file" name="image_uploader" id="image_uploader" onChange={this.handleChange} />
        <br/>
        <button type="button" onClick = {() => this.props.submitPicture(this.props.id,this.state.fileURL)}>upload image</button>
      </div>
    )
  }
}


export default connect(null, actions)(ImageUploader)
