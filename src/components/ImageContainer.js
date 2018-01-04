import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import { Divider, Card, Icon, Image, Button, Container  } from 'semantic-ui-react'

// <Image src={img.url} bordered = {true}/>

class ImageContainer extends React.Component{
  constructor(){
    super()
  }
  render(){

    const container = {
      border: '1px solid #DDDDDD',
      width: '200px',
      height: '200px',
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

  const  imgDivs = this.props.pictures.map( img =>
    <Card style = {{display: 'inline-block', position: 'relative'}}>
      <Image src={img.url} />
      <Card.Content>
        <Card.Description>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Button onClick = {()=>this.props.deletePicture(img.id)}>Delete</Button>
      </Card.Content>
    </Card>
        )
    return(
      <Container>
        <Card.Group>
        {imgDivs}
        </Card.Group>
      </Container>
    )
  }
}

export default connect(null, actions)(ImageContainer)
