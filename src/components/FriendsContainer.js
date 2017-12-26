import React from 'react'


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
        <div>{friend.name}</div>
      )
    })

    return(
      <div>
      {friendDivs}
      </div>
    )
  }
}


export default FriendsContainer
