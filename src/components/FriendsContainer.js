import React from 'react'
import {Segment, List} from 'semantic-ui-react'



class FriendsContainer extends React.Component{

  constructor(){
    super()
    this.state = {}
  }


  componentDidMount(){
    console.log(this.props)
  }



  render(){
    // debugger
    const friendDivs = this.props.friend.map(friend =>{
      return(
        <List.Item>
          <List.Content>
            <List.Header>{friend.name} is invited</List.Header>
          </List.Content>
        </List.Item>
      )
    })

    return(
      <Segment inverted>
      <List divided inverted relaxed>
      {friendDivs}
      </List>
      </Segment>
    )
  }
}


export default FriendsContainer
