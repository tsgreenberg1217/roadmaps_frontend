import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { List, Image, Button, Card, Icon } from 'semantic-ui-react'


class Stop extends React.Component{

  constructor(){
    super()
    this.state = {}
    this.handleUp = this.handleUp.bind(this)
    this.handleDown = this.handleDown.bind(this)
  }

  handleDelete(stop_id, trip_id){
    this.props.deleteStop(stop_id,trip_id)
  }

  handleUp(){
    this.props.changeOrder(this.props.trip_id, this.props.id, "UP")
  }

  handleDown(){
    this.props.changeOrder(this.props.trip_id, this.props.id, "DOWN")
  }

  deny(){
    console.log('cannot move')
  }





  render(){
    const ifUp = (this.props.order !== 1 )
    const ifDown = (this.props.length !== this.props.order)

    console.log(ifDown)
    return (
          <div>
      <Card.Group>
        <Card>
        <Card.Content>
          <Card.Header>
            {this.props.name}
            <Button style = {{float: 'right'}} onClick = {() => this.handleDelete(this.props.id, this.props.trip_id)}><Icon name='remove' /></Button>
          </Card.Header>
          <Card.Meta>
          {(this.props.order>1) ? this.props.duration : null}
          </Card.Meta>
          <Card.Description>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button onClick = {(ifUp) ? this.handleUp : this.deny}><Icon name = 'chevron up'/></Button>
            <Button onClick = {(ifDown) ? this.handleDown : this.deny}><Icon name = 'chevron down'/></Button>
            <Icon name = "search"/>

          </div>
        </Card.Content>
      </Card>
    </Card.Group>


      </div>
    )
  }
}

export default connect(null,actions)(Stop)
