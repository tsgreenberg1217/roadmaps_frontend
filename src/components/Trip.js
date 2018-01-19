import React from 'react'
import {Segment,Button, Card, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'



class Trip extends React.Component{
  render(){
    return (
      <Item
      style = {{border: 'solid 2px #D3D3D3',
      boxShadow: '5px 5px 8px #D3D3D3',
      padding: '1%',
      borderRadius: '5px'}}
      onClick = {()=> this.props.getTrip(this.props.id, this.props.history, this.props.name)}>
      <Item.Image src={this.props.photo} size = 'large'/>

      <Item.Content>
        <Item.Header  as='a'>{this.props.title}</Item.Header>
        {this.props.stops !== undefined
            ?
            <Item.Description>
            <Icon name='marker' size = 'large' />
            {this.props.stops.length} stops
            <br/>
            <Icon name='map outline'></Icon>
            {this.props.stops[0].name} to {this.props.stops[this.props.stops.length-1].name}
            </Item.Description>
            :
            null}
      </Item.Content>
    </Item>


    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
}

// <Item
// key = {this.props.id}
// onClick = {()=> this.props.getTrip(this.props.id, this.props.history, this.props.name)}>
//   <Item.Content>
//     <Item.image  src={this.props.photo} />
//     <Item.Header as = 'a'>
//       {this.props.title}
//     </Item.Header>
    // {this.props.stops !== undefined
    //     ?
    //     <Item.Description>
    //     {this.props.stops.length} stops
    //     <br/>
    //     {this.props.stops[0].name} to {this.props.stops[this.props.stops.length-1].name}
    //     </Item.Description>
    //     :
    //     null}
//   </Item.Content>
//   <Item.Content>
//     <div className='ui two buttons'>
//       <Button  color='grey'
//       onClick = {() => this.props.deleteTrip(this.props.id)}>Delete</Button>
//     </div>
//   </Item.Content>
// </Item>


export default withRouter(connect(mapStateToProps, actions)(Trip));
