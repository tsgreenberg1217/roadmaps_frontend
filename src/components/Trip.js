import React from 'react'
import { Button } from 'semantic-ui-react'
import { Image, Item } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'



class Trip extends React.Component{
  render(){
    return (
      <div key = {this.props.id}>
        <Item.Group>
  <Item>
    <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />

    <Item.Content>
      <Item.Header as='a'>{this.props.title}</Item.Header>
      <Item.Meta>Description</Item.Meta>
      <Item.Description>
        // <Image src='/assets/images/wireframe/short-paragraph.png' />
      </Item.Description>
      <Item.Extra>Additional Details</Item.Extra>
    </Item.Content>
  </Item>
  <Button
  primary
  onClick = {()=> this.props.getTrip(this.props.id, this.props.history, this.props.name)}> go </Button>
  <Button
  onClick = {() => this.props.deleteTrip(this.props.id)}
  >
  delete
  </Button>
</Item.Group>




      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
}

export default withRouter(connect(mapStateToProps, actions)(Trip));
