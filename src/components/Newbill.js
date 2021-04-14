import React , {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Segment,Form,Dimmer,Loader,Dropdown,Button} from 'semantic-ui-react';
import axios from 'axios';

function Newbill()
{
    useEffect(()=>{document.title="MakeMyBill.com | Make Bill"},[])

    let history=useHistory();

    const[loading,setLoading]=useState(false);

    const[nameError,setNameError]=useState("");
    const[vehicleError,setVehicleError]=useState("");
    const[addError,setAddError]=useState("");
    const[gstError,setGstError]=useState("");

    const[name,setName]=useState("");
    const[vehicle,setVehicle]=useState("");
    const[add,setAdd]=useState("");
    const[gst,setGst]=useState("");
    const[location,setLocation]=useState("");
    const[email,setEmail]=useState("");
    const[pkgs,setPkgs]=useState(null);
    const[price,setPrice]=useState(null);
    const[booking,setBooking]=useState(null);
    const[advance,setAdvance]=useState(null);
    
    // Validattion of Dropdown
    const validateDropdown=(e,{value})=>
    {
        e.persist();
        console.log(e.target.textContent);
        setLocation(e.target.textContent);
        
    }

    // Form Validation(Used For validation and Storing the Values)
    const validateForm=(e)=>
    {

        if(e.target.name==='name') 
        { 
           e.target.value.length<4 ? setNameError("error") : setNameError("");
           setName(e.target.value);
        }
        
        if(e.target.name==='vehicle') 
        { 
           e.target.value.length<6 ? setVehicleError("error") : setVehicleError("");
           setVehicle(e.target.value);
        }
        
        if(e.target.name==='address')
        {
           e.target.value.length<10 ? setAddError("error") : setAddError("");
           setAdd(e.target.value);
        }

        if(e.target.name==='receiver_gst')
        {
            e.target.value.length!=15 ? setGstError("error") : setGstError("");
            setGst(e.target.value);
        }

        if(e.target.name==='email')
        {
            setEmail(e.target.value);
            console.log("email")
        }

        if(e.target.name==='pkgs')
        {
            setPkgs(e.target.value);
        }

        if(e.target.name==='price')
        {
            setPrice(e.target.value);
        }

        if(e.target.name==='booking')
        {
            setBooking(e.target.value);
        }

        if(e.target.name==='advance')
        {
            setAdvance(e.target.value);
        }

    }

    async function submitForm()
    {
        setLoading(true); // While Adding Bill set Screen on Loading Mode

        if(nameError==="" && vehicleError==="" && addError==="" && gstError==="")
        {

            sessionStorage.setItem('receiverName',name);
            sessionStorage.setItem('vehicle',vehicle);
            sessionStorage.setItem('address',add);
            sessionStorage.setItem('receiverState',location);
            sessionStorage.setItem('receiverEmail',email);
            sessionStorage.setItem('receiverGst',gst);
            sessionStorage.setItem('pkgs',pkgs);
            sessionStorage.setItem('price',price);
            sessionStorage.setItem('booking',booking);
            sessionStorage.setItem('advance',advance);

            console.log(sessionStorage.getItem('godown_charges'))
            console.log(sessionStorage.getItem('loading_charges'))
            console.log(sessionStorage.getItem('other_charges'))
            console.log(sessionStorage.getItem('unioin_charges'))
            const totalAmount=
            (
            parseFloat(sessionStorage.getItem('godown_charges'))+
            parseFloat(sessionStorage.getItem('loading_charges'))+
            parseFloat(sessionStorage.getItem('other_charges'))+
            parseFloat(sessionStorage.getItem('unioin_charges'))+
            ( parseFloat(pkgs)* parseFloat(price)))-parseFloat(advance);

            console.log(totalAmount)

            let gstCalculated=0;
            let totalCalculated=0;
            if(sessionStorage.getItem('company_state')===sessionStorage.getItem('receiverState'))
            {
                gstCalculated=parseFloat(0.05*parseFloat(totalAmount));
                totalCalculated=totalAmount+gstCalculated;

                sessionStorage.setItem('gstAmount',gstCalculated);
                sessionStorage.setItem('total',totalCalculated);

            }
            else 
            {
                gstCalculated=parseFloat(0.1*parseFloat(totalAmount));
                totalCalculated=totalAmount+gstCalculated;

                sessionStorage.setItem('gstAmount',gstCalculated);
                sessionStorage.setItem('total',totalCalculated);
            }

            console.log(sessionStorage);

            try 
            {
                let response=await axios.get(`https://my-bill-system.herokuapp.com/bill-details/${vehicle}/${name}/${add}/${gst}/${pkgs}/${price}/${booking}/${advance}/${gstCalculated}/${totalCalculated}/${location}/${parseInt(sessionStorage.getItem('user_id'))}`)
                console.log(response);

                history.push("/finalbill"); // Send User On the final Bill Generated Page
                
            }
            catch(e)
            {

                console.log("Error Occured in API Call");

            }
            return true
        }
        else 
        {
            return false
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

    return(
        <>

            <Segment style={{marginTop:160}}>
            <Segment textAlign="center" color="yellow">
            <h2 style={{color:"blue"}}>Create New Bill</h2>
            </Segment>
            <Segment>
                <Form onSubmit={submitForm}>
                    <Form.Group  widths="equal">
                      
                        <Form.Input
                        {...{className:nameError}}
                        required
                        autoFocus
                        placeholder="Receiver Company's Name"
                        name='name'
                        onChange={validateForm}
                        />

                        <Form.Input
                        {...{className:vehicleError}}
                        required
                        placeholder="Vehicle Number"
                        name='vehicle'
                        type="text"
                        onChange={validateForm}
                        />

                       <Form.Input
                         {...{className:addError}}
                        required
                        placeholder="Address"
                        name='address'
                        type="text"
                        onChange={validateForm}
                        />

                        <Dropdown 
                        required
                        style={{width:"100%"}}
                        placeholder="State"
                        selection
                        options={options}
                        onChange={validateDropdown}
                        /> 
                        
                    </Form.Group>

                    <Form.Group widths="equal">

                        <Form.Input
                         // {...{className:nameError}}
                        required
                        placeholder="Receiver's Email ID"
                        name='email'
                        type="email"
                        onChange={validateForm}
                        />

                       <Form.Input
                         {...{className:gstError}}
                        required
                        placeholder="Receiver's GST Number"
                        name='receiver_gst'
                        type="text"
                        onChange={validateForm}
                        />

                        
                       <Form.Input
                         // {...{className:nameError}}
                        required
                        placeholder="Number Of Packages"
                        name='pkgs'
                        type="number"
                        onChange={validateForm}
                        />

                        
                       <Form.Input
                         // {...{className:nameError}}
                        required
                        placeholder="Price Per Pakage Or Kg"
                        name='price'
                        type="number"
                        onChange={validateForm}
                        />

                        

                    </Form.Group>

                    <Form.Group widths="equal">


                        <Form.Input
                         // {...{className:nameError}}
                        required
                        placeholder="Booking Amount"
                        name='booking'
                        type="number"
                        onChange={validateForm}
                        />

                        <Form.Input
                         // {...{className:nameError}}
                        required
                        placeholder="Advance Amount"
                        name='advance'
                        type="number"
                        onChange={validateForm}
                        />


                    </Form.Group>

                    {/* <Link to="/finalbill"> */}
                        <Button primary type="submit">Create Bill</Button>
                    {/* </Link> */}
                </Form>
            </Segment>
            </Segment>

        {loading ? <Dimmer active><Loader active inline >Loading...</Loader></Dimmer> : null}

        </>

    );
}

export default Newbill