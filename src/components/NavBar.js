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
      <Container>

      <Menu secondary>
        <Menu.Item name='home' onClick = {() => this.props.history.push(`/home`)} />
        <Menu.Item name='Profile' onClick = {() => this.props.history.push(`/${this.props.user.name}`)} />
        <Menu.Item name='Invited' onClick = {() => this.props.history.push(`/${this.props.user.name}/invited`)} />
        <Menu.Menu position='right'>
            <Menu.Item name='logout' onClick = {()=>this.props.logoutUser(this.props.history)}/>
        </Menu.Menu>
      </Menu>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    user: state.auth.user
  }
}
// <Menu>
// <Menu.Item >Browse</Menu.Item>
// <Menu.Item >Submit</Menu.Item>
// <Menu>
//   <Menu.Item >Sign Up</Menu.Item>
//   <Menu.Item >Help</Menu.Item>
// </Menu>
// </Menu>
export default withRouter(connect(mapStateToProps, actions)(NavBar))
