import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { List, Image, Button, Card, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'



class Stop extends React.Component{

  constructor(){
    super()
    this.handleUp = this.handleUp.bind(this)
    this.handleDown = this.handleDown.bind(this)
    this.goToStop = this.goToStop.bind(this)
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

  goToStop(){
    console.log('pushed')
    this.props.getStop(this.props.trip_id,this.props.id, this.props.history)
  }

  deny(){
    console.log('cannot move')
  }

  render(){
    const ifUp = (this.props.order !== 1 )
    const ifDown = (this.props.length !== this.props.order)

    console.log(ifDown)
    return (
        <Card >
        <Card.Content>
          <Card.Header>
            {this.props.name}
            <Button style = {{float: 'right'}} color = "red" onClick = {() => this.handleDelete(this.props.id, this.props.trip_id)}><Icon name='remove' /></Button>
          </Card.Header>
          <Card.Meta>
          {(this.props.order>1) ? this.props.duration : null}
          </Card.Meta>
          <Card.Description>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui three buttons'>
            <Button onClick = {(ifUp) ? this.handleUp : this.deny}><Icon name = 'chevron up'/></Button>
            <Button onClick = {(ifDown) ? this.handleDown : this.deny}><Icon name = 'chevron down'/></Button>
            <Button onClick = {this.goToStop} ><Icon name = 'photo'/></Button>
          </div>
        </Card.Content>
      </Card>


    )
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.auth.user
  }
}

export default withRouter(connect(mapStateToProps,actions)(Stop))
