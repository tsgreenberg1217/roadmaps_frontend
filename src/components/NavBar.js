import React from 'react'
import {Input, Menu, Container} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../actions'


class NavBar extends React.Component{
  constructor(){
    super()
    this.state = {}
    this.handleItemClick = this.handleItemClick.bind(this)
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    return(
      <Menu inverted>
      <Menu.Item onClick = {() => this.props.history.push(`/home`)}>Browse</Menu.Item>
        <Menu.Item onClick = {() => this.props.history.push(`/${this.props.user.name}`)}>Profile</Menu.Item>
        <Menu.Item onClick = {() => this.props.history.push(`/${this.props.user.name}/invited`)} >Invited</Menu.Item>
        <Menu.Item
        position= 'right'
        onClick = {()=>this.props.logoutUser(this.props.history)}>
        Logout</Menu.Item>

      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    user: state.auth.user
  }
}

// <Container>
// <Menu secondary>
//   <Menu.Item name='home' onClick = {() => this.props.history.push(`/home`)} />
//   <Menu.Item name='Profile' onClick = {() => this.props.history.push(`/${this.props.user.name}`)} />
//   <Menu.Item name='Invited' onClick = {() => this.props.history.push(`/${this.props.user.name}/invited`)} />
//   <Menu.Menu position='right'>
//       <Menu.Item name='logout' onClick = {()=>this.props.logoutUser(this.props.history)}/>
//   </Menu.Menu>
// </Menu>
// </Container>

export default withRouter(connect(mapStateToProps, actions)(NavBar))
