import React from 'react'
import {Segment, List, Image} from 'semantic-ui-react'



class FriendsContainer extends React.Component{

  constructor(){
    super()
    this.state = {}
  }



  render(){
    const friendDivs = this.props.friend.map(friend =>{
      return(
        <List.Item>
        <List.Icon name = 'user'/>
          <List.Content>
            <List.Description><strong>{friend.name}</strong> is on the trip</List.Description>
          </List.Content>
        </List.Item>
      )
    })

    return(
      <List celled>
      {friendDivs}
      </List>
    )
  }
}


export default FriendsContainer
