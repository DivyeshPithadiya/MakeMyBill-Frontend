import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import {Segment,Image,Icon,Divider} from 'semantic-ui-react'
import backImg from './Images/transport.jpg'


function Background()
{
    useEffect(()=>{document.title="MakeMyBill.com"},[])

    return(

    <>
        <Image style={{width:"100%"}} src={backImg} />

        <Segment basic style={{color:"white",marginTop:0,backgroundColor:"#00003B"}}>

        <h3>Abount Us :</h3>
        <Divider/>
        <p align="justify" style={{wordSpacing:4}}>
            MakeMyBill.com is the Free and Trusted Software which is used to Make the Bill in a very Proffessional Manner. MakeMyBill.com esteblished in the year 2020
            It helps you to make your Bill Very Fast and Accurate. Now You can make your bill from anywhere at anytime using MakeMyBill.com Softare.
            So signup Today and Grow your Business.

            Thank You ! 
        </p>

        <h3>
            Contact Us :
        </h3>
        <Divider/>

        <div>
            
            <div >
            <Icon style={{width:70}} name="phone"><p>7045137353</p></Icon>
            <Icon style={{width:150}} name="mail"><p><a href="makemybill@gmail.com" style={{textDecoration:"none",color:"white"}}>  |  makemybill@gmail.com</a></p></Icon>
            </div>


        </div>

        </Segment>

        </>
    )
}

export default Background