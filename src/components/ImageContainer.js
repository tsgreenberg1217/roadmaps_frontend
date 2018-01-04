import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import { Divider, Image, Icon } from 'semantic-ui-react'

// <Image src={img.url} bordered = {true}/>

class ImageContainer extends React.Component{
  constructor(){
    super()
  }
  render(){

    const container = {
      display: 'inline-block',
      position: 'relative',

    }

    const tag = {
      zIndex: '1000',
       float: 'left',
       position: 'absolute',
       left: '0px',
       top: '0px'
    }

    const imgDivs = this.props.pictures.map( img =>
              <div style = {container}>
                <div style = {tag}>
                  <Icon  name = 'user'/>
                </div>
                <Image src={img.url} bordered = {true}/>
              </div>
                )
    return(
      <Image.Group size = 'medium'>
        {imgDivs}
      </Image.Group>
    )
  }
}

export default connect(null, actions)(ImageContainer)
