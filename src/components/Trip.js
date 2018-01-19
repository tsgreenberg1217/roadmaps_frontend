import React from 'react'
import { Button } from 'semantic-ui-react'
import { Image, Item, Card } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'



class Trip extends React.Component{
  render(){
    // console.log(this.props.photo)
    return (
    <Card key = {this.props.id}
    onClick = {()=> this.props.getTrip(this.props.id, this.props.history, this.props.name)}>
      <Card.Content>
        <Image floated='left' size='medium' src={this.props.photo} />
        <Card.Header>
          {this.props.title}
        </Card.Header>
        <Card.Description>
        {this.props.stops.length} stops
        </Card.Description>
        <Card.Description>
        {this.props.stops[0].name} to {this.props.stops[this.props.stops.length-1].name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button  color='grey'
          onClick = {() => this.props.deleteTrip(this.props.id)}>Delete</Button>
        </div>
      </Card.Content>
    </Card>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
}

export default withRouter(connect(mapStateToProps, actions)(Trip));
