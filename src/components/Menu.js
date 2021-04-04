import React from 'react'
import {Image, Button, Menu ,Segment} from 'semantic-ui-react'
import myimg from './Images/logo.png'
import {Link} from 'react-router-dom'

const Menubar = () => (

  <Segment basic color="black">

    <Menu fixed="top" basic color="yellow" inverted style={{height:90}}>
      
      <Menu.Item centered>
        <Image style={{marginTop:30}} src={myimg} size="medium"/>
      </Menu.Item>

      <Menu.Item position="right">
      
      
        <Menu.Item > 
          <Link to='/'>
          <Button color="red">Home</Button>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Button color="red">Help</Button>
        </Menu.Item>
      
        <Menu.Item>
          <Link to="/login">
          <Button color="green">Log-in</Button>
          </Link>
        </Menu.Item>

        <Menu.Item> 
          <Link to='/signup'>
          <Button primary>Sign up</Button>
          </Link>
        </Menu.Item>

    </Menu.Item>

    </Menu>
  
  </Segment>

)

export default Menubar