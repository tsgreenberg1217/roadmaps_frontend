import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Form } from 'semantic-ui-react'

import { withRouter } from 'react-router-dom'


class FriendSearch extends React.Component{
  constructor(){
    super()
    this.state = {
      friend: ''
    }
    this.handeChange = this.handeChange.bind(this)
  }

  handeChange(friend){
    this.setState({
      friend: friend
    })
  }

  handleSubmit(e,friend){
    e.preventDefault()
    this.props.submitFriendship(friend, this.props.history)
  }

  render(){
    return(
      <div>
        <form onSubmit = {(e) => this.handleSubmit(e,this.state.friend)} >
        <Form.Input
          type = 'text'
          id='form-subcomponent-shorthand-input-first-name'
          placeholder='Invite your friends here'
          value = {this.state.friend}
          onChange = {(e)=> this.handeChange(e.target.value)}/>
          <br/>
          <Button type= "Submit">Invite</Button>
        </form>
      </div>

    )
  }
}

export default withRouter(connect(null,actions)(FriendSearch))
