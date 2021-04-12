import React,{useState} from 'react'
import {Form,Segment,Header,Message,Loader,Dimmer} from 'semantic-ui-react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Login()
{
    const history=useHistory();
    const[logInLabel,setLogInLabel]=useState(null);
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[loading,setLoading]=useState(false);

    const onChangeValues=(e)=>
    {
        if(e.target.name==="email")
        {
            setEmail(e.target.value);
        }
        if(e.target.name==="password")
        {
            setPassword(e.target.value);
        }
    }

    async function submitLogin(e) //On Submit these things needs to be performed
    {
        console.log("Submitted")
        setLoading(true);
        // Making the Get Request And Authorize user 

        let authResponse=await axios.get(`https://my-bill-system.herokuapp.com/user-auth/${email}/${password}`)
        .catch(error => console.log('error', error));

        // Calling the Get Request And Authorize user 

        if(authResponse.data===1) //Check weather user is authenticated or not 
        {
            console.log(authResponse);
            sessionStorage.setItem('authenticated',true); //Set User As Authenticated

            let userDetailsResponse=await axios.get(`https://my-bill-system.herokuapp.com/user-details/${email}/${password}`)
            .catch(error => console.log(error));

            console.log(userDetailsResponse);
           
            // After Fetching Details of User from API store it as session variables

            sessionStorage.setItem('user_id',userDetailsResponse.data.user_id);
            sessionStorage.setItem('email_id',userDetailsResponse.data.email_id);
            sessionStorage.setItem('ac_number',userDetailsResponse.data.ac_number);
            sessionStorage.setItem('bank_name',userDetailsResponse.data.bank_name);
            sessionStorage.setItem('company_address',userDetailsResponse.data.company_address);
            sessionStorage.setItem('company_name',userDetailsResponse.data.company_name);
            sessionStorage.setItem('company_state',userDetailsResponse.data.company_state);
            sessionStorage.setItem('godown_charges',userDetailsResponse.data.godown_charges);
            sessionStorage.setItem('gst_number',userDetailsResponse.data.gst_number);
            sessionStorage.setItem('loading_charges',userDetailsResponse.data.loading_charges);
            sessionStorage.setItem('mobile_number',userDetailsResponse.data.mobile_number);
            sessionStorage.setItem('other_charges',userDetailsResponse.data.other_charges);
            sessionStorage.setItem('rtgs_number',userDetailsResponse.data.rtgs_number);
            sessionStorage.setItem('unioin_charges',userDetailsResponse.data.unioin_charges);

            // After Fetching Details of User from API store it as session variables

            setLogInLabel( <Message color="green" compact basic >You have Logged in Successfully !</Message>);

            console.log(sessionStorage.getItem('authenticated'));
            setLoading(false);

            
            history.push("/home"); // If User is present then redirect it to another page
            window.location.reload();// If User get Logged in than Reload the Page
            
            console.log(sessionStorage.getItem('user_id'))
        }
        else 
        {
            setLoading(false);
            sessionStorage.setItem('authenticated',false);
            console.log(sessionStorage.getItem('authenticated'))
            console.log(authResponse);

            // sessionStorage.setItem('user_id',null);
            // sessionStorage.setItem('email_id',null);
            // sessionStorage.setItem('ac_number',null);
            // sessionStorage.setItem('bank_name',null);
            // sessionStorage.setItem('company_address',null);
            // sessionStorage.setItem('company_name',null);
            // sessionStorage.setItem('company_state',null);
            // sessionStorage.setItem('godown_charges',null);
            // sessionStorage.setItem('gst_number',null);
            // sessionStorage.setItem('loading_charges',null);
            // sessionStorage.setItem('mobile_number',null);
            // sessionStorage.setItem('other_charges',null);
            // sessionStorage.setItem('rtgs_number',null);
            // sessionStorage.setItem('unioin_charges',null);

            window.sessionStorage.clear();
            
            setLogInLabel(<Message color="red" compact basic >Please Enter Correct Email and Password !</Message>);

            console.log(sessionStorage.getItem('user_id'))
        }
    }

    return(   
        <>
            <Segment color="yellow" style={{marginTop:"15%",marginLeft:"25%",width:"50%"}}>
                <center><h2 style={{color:"blue"}}>Log-in</h2></center>
                <br/>
                <Form onSubmit={submitLogin}>
                <Segment color="blue">
                    <Form.Input
                    required
                    autoFocus
                    placeholder="Email Id"
                    name="email"
                    onChange={onChangeValues}
                    />

                    <Form.Input
                    required
                    placeholder="Password"
                    name="password"
                    type="Password"
                    onChange={onChangeValues}
                    />
                </Segment>
                
                <Form.Group>
                    
                    <Form.Button
                    content="Submit"
                    type="submit"
                    color="blue"
                    />

                    <Form.Button
                    content="Reset"
                    type="reset"
                    color="blue"
                    />

                </Form.Group>
                </Form>
            </Segment>

            <center>
            {sessionStorage.getItem('signup') ? <Message color="green" compact basic >You Have Registered Successfully Please Login !</Message> : null}
            {/* {sessionStorage.getItem('authenticated')===true ? <Message color="green" compact basic >You have Logged in Successfully !</Message> : <Message color="red" compact basic >Please Enter Correct Email and Password !</Message>} */}
            {logInLabel}
            {loading ? <Dimmer active><Loader active inline >Loading...</Loader></Dimmer> : null}
            </center>

        </>

    );
}

export default Login;

