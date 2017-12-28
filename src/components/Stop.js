import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { List, Image, Button, Card } from 'semantic-ui-react'


class Stop extends React.Component{

  constructor(){
    super()
    this.state = {}
  }

  handleDelete(stop_id, trip_id){
    this.props.deleteStop(stop_id,trip_id)
  }



  render(){
    console.log(this.props)
    return (
          <div>
      <Card.Group>
        <Card>
        <Card.Content>
          <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
          <Card.Header>
            Steve Sanders
          </Card.Header>
          <Card.Meta>
            Friends of Elliot
          </Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Approve</Button>
            <Button basic color='red'>Decline</Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>

        {(this.props.order>1) ? <p>{this.props.duration}</p> : <p></p>}
        <p>{this.props.order}: {this.props.name}</p>

        <button
        onClick = {() => this.handleDelete(this.props.id, this.props.trip_id)}>delete</button>

      </div>
    )
  }
}

export default connect(null,actions)(Stop)
