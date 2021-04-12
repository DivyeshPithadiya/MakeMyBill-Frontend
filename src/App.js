import React from 'react'
import Navbar from './components/Navbar.js'
import Background from './components/BackgroundBody.js'
import SignupForm from './components/Signup.js'
import Login from './components/login.js'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import AllBills from './components/allBills.js'
import Newbill from './components/Newbill.js'
import Finalbill from './components/Finalbill.js'
import Viewbill from './components/Viewbill.js'

function App() {
  return (

    <>

    <BrowserRouter>
      <Switch>

      <Route  exact path="/viewbill"><Viewbill/></Route> 
      <Route  exact path="/finalbill"><Finalbill/></Route>
      <Route  exact path="/signup"><Navbar/><SignupForm/></Route>
      <Route  exact path="/login"><Navbar/><Login/></Route>
      <Route  exact path="/allbills"><Navbar/><AllBills/></Route>
      <Route  exact path="/newbill"><Navbar/><Newbill/></Route>
      <Route  exact path="/home" ><Navbar/><Background/></Route>
      <Route  exact path="/" ><Navbar/><Background/></Route>
        
      </Switch>
    </BrowserRouter>
    </>
    

  );
}

export default App;
