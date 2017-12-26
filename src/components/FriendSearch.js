import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
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
      <h1>This is the friend search</h1>
        <form onSubmit = {(e) => this.handleSubmit(e,this.state.friend)}>
          <input
          type = 'text'
          value = {this.state.friend}
          onChange = {(e)=> this.handeChange(e.target.value)}/>
          <button type= "Submit"/>
        </form>
      </div>

    )
  }
}

export default withRouter(connect(null,actions)(FriendSearch))
