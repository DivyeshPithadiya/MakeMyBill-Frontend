import React from 'react'
import Navbar from './components/Navbar.js'
import Background from './components/BackgroundBody.js'
import SignupForm from './components/Signup.js'
import Login from './components/login.js'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

function App() {
  return (
    
    <BrowserRouter>
      <Navbar/>
      <Switch>

        <Route path="/signup"><SignupForm/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/" ><Background/></Route>
      
      </Switch>
    </BrowserRouter>

  );
}

export default App;
