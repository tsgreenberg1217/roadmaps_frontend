import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Form, Input } from 'semantic-ui-react'

import { withRouter } from 'react-router-dom'


class FriendSearch extends React.Component{
  constructor(){
    super()
    this.state = {
      friend: '',
      friendError: false,
      friendMessage: 'Find friend'
    }
    this.handeChange = this.handeChange.bind(this)
  }

  handeChange(friend){
    this.setState({
      friend: friend
    })
  }

  friendAlreadyAdded(friend){
    // debugger
    const friendIsThere = this.props.friends.find(name => name.name === friend)
    return friendIsThere
  }

  handleSubmit(e,friend){
    e.preventDefault()
    if(!this.friendAlreadyAdded(friend)){
      this.props.submitFriendship(friend, this.props.history)
    }
    else{
      this.setState({
        friend: '',
        friendError: true,
        friendMessage: 'friend already there'
      })
    }
  }

  render(){
    // debugger
    return(
      <div>
        <form onSubmit = {(e) => this.handleSubmit(e,this.state.friend)} >
        <Input
          type = 'text'
          id='form-subcomponent-shorthand-input-first-name'
          placeholder= {this.state.friendMessage}
          value = {this.state.friend}
          error = {this.state.friendError}
          onChange = {(e)=> this.handeChange(e.target.value)}/>
          <Button type= "Submit">Invite</Button>
        </form>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return{
    friends: state.trips.selected_trip.friends
  }
}

export default withRouter(connect(mapStateToProps,actions)(FriendSearch))
