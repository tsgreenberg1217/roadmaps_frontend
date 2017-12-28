import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { List, Image, Button, Card, Icon } from 'semantic-ui-react'


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
            <Button><Icon name = 'chevron up'/></Button>
            <Button><Icon name = 'chevron down'/></Button>
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
