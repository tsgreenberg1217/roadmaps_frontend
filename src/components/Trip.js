import React from 'react'
import { Button } from 'semantic-ui-react'
import { Image, Item, Card } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'



class Trip extends React.Component{
  render(){
    console.log(this.props.photo)
    return (
      <div key = {this.props.id}>
      <Card.Group>
    <Card>
      <Card.Content>
        <Image floated='left' size='medium' src={this.props.photo} />
        <Card.Header>
          {this.props.title}
        </Card.Header>
        <Card.Description>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'
          onClick = {()=> this.props.getTrip(this.props.id, this.props.history, this.props.name)}>Go</Button>
          <Button basic color='red'
          onClick = {() => this.props.deleteTrip(this.props.id)}>Delete</Button>
        </div>
      </Card.Content>
    </Card>
    </Card.Group>

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
