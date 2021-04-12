import React ,{useState,useEffect} from 'react'
import {Image, Button, Menu ,Segment,Icon} from 'semantic-ui-react'
import myimg from './Images/logo.png'
import {Link,useHistory} from 'react-router-dom'

function Menubar() {


  const[authenticated,setAuthenticated]=useState(sessionStorage.getItem('authenticated'));
  const[icon,setIcon]=useState("")
  const[username,setUsername]=useState("")

  let history=useHistory();
  const logout = () =>
  {
      setAuthenticated(false);
      setIcon("");
      setUsername("");

      // sessionStorage.setItem('authenticated',false)
      
      window.sessionStorage.clear();

      history.push("/home");

      // window.location.reload()

  }


  //Perform the below task only once when component is rendered 
  useEffect(()=>
  {  
    if(sessionStorage.getItem('authenticated'))
    {
      setAuthenticated(true);
      setIcon(<Icon name="user" size="big" color="black"/>);
      setUsername(<p style={{color:"black"}}>{sessionStorage.getItem('email_id')}</p>);
    }
    else 
    {
      setAuthenticated(false);
      setIcon("");
      setUsername("");
    }
  },[])


  return(
  <Segment basic>

    <Menu fixed="top" basic color="yellow" inverted style={{height:90}}>
      
      <Menu.Item centered>
        <Image style={{marginTop:30}} src={myimg} size="medium"/>
      </Menu.Item>

      <Menu.Item basic>

        {icon}
        {username}

      </Menu.Item> 

      <Menu.Item position="right">

        <Menu.Item> 
          <Link to='/'>
          <Button color="red">Home</Button>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Button color="red">Help</Button>
        </Menu.Item>
      
        {authenticated===true ? <Menu.Item><Button onClick={logout} primary>Log-Out</Button></Menu.Item> :  <Link to="/login"><Menu.Item><Button color="green">Log-in</Button></Menu.Item></Link> }
        
        {authenticated===true ? null : <Menu.Item><Link to='/signup'><Button primary>Sign up</Button></Link></Menu.Item>}

        {authenticated===true ? <Link to="/allbills"><Menu.Item><Button color="green">Dashboard</Button></Menu.Item></Link> : null}

    </Menu.Item>

    </Menu>
  
  </Segment>
  )

}

export default Menubar