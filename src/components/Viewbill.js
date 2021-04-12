import React from 'react';
import {Segment,Header,Table,Dimmer,Loader,Button,Icon} from 'semantic-ui-react';
import {Link,useParams} from 'react-router-dom'

function Viewbill(props)
{
    
    // Taking Values from Headers 

    var{billdata,date}=useParams();

    // Taking Values from Headers
    
    const printBill=()=>
    {
        window.print();
    }

    return(
        <>

    <Segment basic style={{marginTop:"20px",marginLeft:"70%"}}>
       
        <Link to="/home">
        <Button  color="red">
            Home
        </Button>
        </Link>

        <Link to="/help">
        <Button  color="red">
            Help
        </Button>
        </Link> 
        
        <Button onClick={printBill} color="red" >
            Print Bill
            <Icon name="print" style={{marginLeft:"3px"}}/>
        </Button>
       
        <Link to="/allbills">
        <Button  color="green">
            Dashboard
        </Button>
        </Link>
     
    </Segment>

        <Segment>

            <Segment textAlign="center" color="yellow" style={{width:"50%",marginLeft:"25%"}}>
                
                <Segment>
                   <Header as="h2" color="blue">{sessionStorage.getItem('company_name')}</Header>
                   <Header style={{marginTop:0,wordSpacing:"3px"}} as="h4" color="green">{sessionStorage.getItem('company_address')} , {sessionStorage.getItem('company_state')} , {sessionStorage.getItem('mobile_number')}</Header>
                </Segment>


                <Segment>
                
                    <Segment textAlign="left" style={{marginTop:"0px"}}  compact style={{marginTop:0}}>
                        Bill Number - {props.location} <br/>
                        Sending Date - {}
                    </Segment>

                    <Segment compact textAlign="left">
                        
                        To  :  {sessionStorage.getItem('receiverName')}, <br/>
                        Destibnation : {sessionStorage.getItem('address')},<br/>
                        State : {sessionStorage.getItem('receiverState')},<br/>
                        GST Number : {sessionStorage.getItem('receiverGst')}

                    </Segment>

                    <Segment.Group textAlign="center">
                        <Segment>  
                        Number Of Packages : {sessionStorage.getItem('pkgs')} <br/>
                        </Segment>
                        <Segment>
                        Vehicle Number : {sessionStorage.getItem('vehicle')}
                        </Segment>
                    </Segment.Group>

                    <Table textAlign="center">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Sr. Number</Table.HeaderCell>
                            <Table.HeaderCell>Transportation Charges</Table.HeaderCell>
                            <Table.HeaderCell>Amount{"(In Rs.)"}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Booking Charges</Table.Cell>
                            <Table.Cell>{sessionStorage.getItem('booking')}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell>Loading Charges</Table.Cell>
                            <Table.Cell>{sessionStorage.getItem('loading_charges')}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>Godown Charges</Table.Cell>
                            <Table.Cell>{sessionStorage.getItem('godown_charges')}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>Union Charges</Table.Cell>
                            <Table.Cell>{sessionStorage.getItem('unioin_charges')}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>Other Charges</Table.Cell>
                            <Table.Cell>{sessionStorage.getItem('other_charges')}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>6</Table.Cell>
                            <Table.Cell>GST</Table.Cell>
                            <Table.Cell>{Math.round(parseFloat(sessionStorage.getItem('gstAmount')) * 100)/100}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>7</Table.Cell>
                            <Table.Cell>Total Charges</Table.Cell>
                            <Table.Cell>{sessionStorage.getItem('total')}</Table.Cell>
                        </Table.Row>

                    </Table.Body>

                    </Table>


                    <Segment compact textAlign="left">

                    Tax is payable on reverse charge(Yes/No) : Yes<br/><br/>
                    Kindly make the payment at tne earliest<br/>
                    Thanking You,<br/>
                    Your faithfully<br/>

                    <h3>{sessionStorage.getItem('company_name')}</h3>

                    </Segment>

                    <Segment compact textAlign="left">
                        <h3>Bank Details</h3>
                        Bank Name : {sessionStorage.getItem('bank_name')}<br/>
                        Account Number : {sessionStorage.getItem('ac_number')}<br/>
                        IFSC Code : {sessionStorage.getItem('rtgs_number')}
                    </Segment>

                </Segment> 
            </Segment>
        </Segment>

        {/* {loading ? <Dimmer active><Loader active inline >Loading...</Loader></Dimmer> : null} */}

        </>

    )

}

export default Viewbill