import React,{useState} from 'react'
import {Form,Segment,Header} from 'semantic-ui-react'

function Login()
{
    return(   
        <>
            <Segment color="yellow" style={{marginTop:"15%",marginLeft:"25%",width:"50%"}}>
                <center><h2 style={{color:"blue"}}>Log-in</h2></center>
                <br/>
                <Form>
                <Segment color="blue">
                    <Form.Input
                    required
                    placeholder="Email Id"
                    name="email"
                    />

                    <Form.Input
                    required
                    placeholder="Password"
                    name="password"
                    type="Password"
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
        </>

    );
}

export default Login;

