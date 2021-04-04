import React,{useState} from 'react'
import {Form,Segment,Header,Dropdown} from 'semantic-ui-react' 
import {Link} from 'react-router-dom';   

function SignupForm()
{


    {/* Used to show the error in field  */}

    const[nameError,setNameError]=useState("");
    const[mobileError,setMobileError]=useState("");
    const[addressError,setAddressError]=useState("");
    const[emailError,setEmailError]=useState("");
    const[passwordError,setPasswordError]=useState("");
    const[gstError,setGstError]=useState("");
    const[bankError,setBankError]=useState("");
    const[acError,setAcError]=useState("");
    const[rtgsError,setRtgsError]=useState("");    

    {/* Used to show the error in field  */}

    const[name,setName]=useState("");
    const[mobile,setMobile]=useState("");
    const[address,setAddress]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[gst,setGst]=useState("");
    const[bank,setBank]=useState("");
    const[ac,setAc]=useState("");
    const[rtgs,setRtgs]=useState("");


    const validate=(e)=>
    {
        if(e.target.name==="name")
        {   
            if(e.target.value.length<5)
            {
                setNameError("error");
            }
            else 
            {   
                setNameError("")
            }
        }

        if(e.target.name==='mobile')
        {
            if(e.target.value.length!=10)
            {
                setMobileError("error");
            }
            else 
            {
                setMobileError("")
            }
        }

        if(e.target.name==='address')
        {
            if(e.target.value.length<10)
            {
                setAddressError("error");
            }
            else 
            {
                setAddressError("");
            }
        }

        if(e.target.name==='password')
        {
            if(e.target.value.length<8)
            {
                setPasswordError("error");
            }
            else 
            {
                setPasswordError("");
            }
        }

        if(e.target.name==='gst')
        {
            if(e.target.value.length!=15 || e.target.value.match(/[\!\@\#\$\%\^\&\*\)\ (\+\=\.\<\>\ {\}\ [\]\:\;\'\"\|\~\`\_\-]/))
            {
                setGstError("error");
            }
            else 
            {
                setGstError("");
            }
        }
        
        if(e.target.name==='bankName')
        {
            if(e.target.value.length<6)
            {
                setBankError("error");
            }
            else 
            {
               setBankError("");
            }
        }

        if(e.target.name==='acNumber')
        {
            if(e.target.value.length<10 || e.target.value.match(/[\!\@\#\$\%\^\&\*\)\ (\+\=\<\>\ {\}\ [\]\:\;\'\.\"\|\~\`\_\-]/))
            {
                setAcError("error");
            }
            else 
            {
               setAcError("");
            }
        }

        if(e.target.name==='rtgs')
        {
            if(e.target.value.length<10 || e.target.value.match(/[\!\@\#\$\%\^\&\*\)\ (\+\=\<\>\ {\}\ [\]\:\;\'\"\|\~\`\_\-]/))
            {
                setRtgsError("error");
            }
            else 
            {
               setRtgsError("");
            }
        }

    }

    const finalSubmit=()=>
    {
        if(nameError==="" && mobileError==="" &&
         addressError==="" && emailError==="" &&
         passwordError==="" && gstError==="" &&
         bankError==="" && acError==="" &&
         rtgsError==="")
         {

            
            console.log("Submitted")
            setNameError("");
            setMobileError("");
            setAddressError("");
            setEmailError("");
            setPasswordError("");
            setGstError("");
            setBankError("");
            setAcError("");
            setRtgsError("");
            
            return true;

         } 
         else 
         {

            return false;

         }
    }



    const options = [
        { key: 1, text:'Andhra Pradesh', value: 'Andhra Pradesh' },
        { key: 2, text: 'Arunachal Pradesh', value:'Arunachal Pradesh'},
        { key: 3, text:'Assam', value: 'Assam'},
        { key: 4, text:'Bihar', value: 'Bihar'},
        { key: 5, text:'Chhattisgarh', value: 'Chhattisgarh'},
        { key: 6, text:'Goa', value: 'Goa'},
        { key: 7, text:'Gujarat', value: 'Gujarat'},
        { key: 8, text:'Haryana', value: 'Haryana'},
        { key: 9, text:'Himachal Pradesh', value: 'Himachal Pradesh'},
        { key: 10, text:'Jammu and kashmir', value: 'Jammu and kashmir'},
        { key: 11, text:'Ladakh', value: 'Ladakh'},
        { key: 12, text:'Jharkhand', value: 'Jharkhand'},
        { key: 13, text:'Karnataka', value: 'Karnataka'},
        { key: 14, text:'Kerala', value: 'Kerala'},
        { key: 15, text:'Madhya Pradesh', value: 'Madhya Pradesh'},
        { key: 16, text:'Maharashtra', value: 'Maharashtra'},
        { key: 17, text:'Manipur', value: 'Manipur'},
        { key: 18, text:'Meghalaya', value: 'Meghalaya'},
        { key: 19, text:'Mizoram', value: 'Mizoram'},
        { key: 20, text:'Nagaland', value: 'Nagaland'},
        { key: 21, text:'Odisha', value: 'Odisha'},
        { key: 22, text:'Punjab', value: 'Punjab'},
        { key: 23, text:'Rajasthan', value: 'Rajasthan'},
        { key: 24, text:'Sikkim', value: 'Sikkim'},
        { key: 25, text:'Tamil Nadu', value: 'Tamil Nadu'},
        { key: 26, text:'Telangana', value: 'Telangana'},
        { key: 27, text:'Tripura', value: 'Tripura'},
        { key: 28, text:'Uttarakhand', value: 'Uttarakhand'},
        { key: 29, text:'Uttar Pradesh', value: 'Uttar Pradesh'},
        { key: 30, text:'West Bengal', value: 'West Bengal'},
      ]


    return (

        <Segment  style={{marginTop:"8%"}} color="yellow"> 
        <h2 style={{textAlign:"center",color:"blue"}}>Create Account</h2>

        {/* Company Details*/}

        <Form onSubmit={finalSubmit}>
        <Segment color="blue" >
            <Header>Company's Details</Header>
           
            <Form.Group widths="equal">
                
                <Form.Input
                {...{className:nameError}}
                required
                autofocus
                placeholder="Company's Name"
                name='name'
                onChange={validate}
                />

                <Form.Input
                {...{className:mobileError}}
                required
                type="number"
                placeholder='Mobile Number'
                name='mobile'
                onChange={validate}
                />
                <Form.Input
                {...{className:addressError}}
                required
                placeholder="Address"
                name="address"
                onChange={validate}
                />

             
                <Dropdown 
                required
                style={{width:"100%"}}
                placeholder="State"
                clearable 
                search
                selection
                options={options} 
                onChange={validate}
                /> 

                <Form.Input
                {...{className:emailError}}
                required
                placeholder="Email"
                name="email"
                type="email"
                onChange={validate}
                />

                <Form.Input
                 {...{className:passwordError}}
                required
                placeholder="Password"
                name="password"
                type="password"
                onChange={validate}
                />


            </Form.Group>
        </Segment>


        
        {/* Company Bank Details*/}


        <Segment color="blue">
            <Header>Company's Bank Details</Header>
            <Form.Group widths="equal">
                
                <Form.Input
                {...{className:gstError}}
                required
                type="text"
                placeholder='GST Number'
                name='gst'
                onChange={validate}
                />

                <Form.Input
                 {...{className:bankError}}
                required
                placeholder='Bank Name'
                name='bankName'
                onChange={validate}
                />
                <Form.Input
                type="number"
                 {...{className:acError}}
                required
                placeholder="Account Number"
                name="acNumber"
                onChange={validate}
                />

                <Form.Input
                {...{className:rtgsError}}
                type="text"
                placeholder="IFSC Code"
                name="rtgs"
                onChange={validate}
                />

            </Form.Group>
        </Segment>

        <Segment color="blue">
            <Header>Company's Charges Details</Header>
            <Form.Group widths="equal">
               
               
                <Form.Input
                required
                placeholder='Vehicle Loading Charges'
                name='laoding'
                type="number"
                onChange={validate}
                />
                <Form.Input
                required
                placeholder='Godown Charges'
                name='godown'
                type="number"
                onChange={validate}
                />
                <Form.Input
                required
                placeholder="Union Charges"
                name="union"
                type="number"
                onChange={validate}
                />

                <Form.Input
                required
                placeholder="Other Charges"
                name="other"
                type="number"
                onChange={validate}
                />
    
                </Form.Group>
           
        </Segment>

                <Form.Group>
                
                <Form.Button type="submit" content='Sign Up' color="blue"/>
                {/* <Form.Button content='Reset' type="reset" color="blue"/> */}
                </Form.Group>

        </Form>

        </Segment>

    );

}

export default SignupForm;