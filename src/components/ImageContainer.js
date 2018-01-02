import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import { Divider, Image } from 'semantic-ui-react'


class ImageContainer extends React.Component{
  constructor(){
    super()
  }
  render(){

    const imgDivs = this.props.pictures.map(
      img => <Image src={img.url} />
    )
    return(
      <Image.Group size = 'medium'>
        {imgDivs}
      </Image.Group>
    )
  }
}

export default connect(null, actions)(ImageContainer)
