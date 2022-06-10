import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Segment,
  Icon,
  Loader,
  Dimmer,
} from "semantic-ui-react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function AllBills() {
  let history = useHistory();

  const [loading, setLoading] = useState(false);
  let response = 0;
  const [billdetails, setBilldetails] = useState([]);

  useEffect(() => {
    document.title = "MakeMyBill.com | Dashboard";
  }, []);

  // Whenever Component will be mounted first time below function will be called once
  useEffect(async function bills() {
    setLoading(true);
    response = await axios.get(
      `http://localhost:8080/get-all-bills/${sessionStorage.getItem("user_id")}`
    );
    {
      response !== null ? setLoading(false) : setLoading(true);
    }
    setBilldetails(response.data);
  }, []);

  // View Bill Details

  function viewbill(bill) {
    console.log(bill);

    sessionStorage.setItem("view_advance_amount", bill.advance_amount);
    sessionStorage.setItem("view_billData", bill.billData);
    sessionStorage.setItem("view_bill_number", bill.bill_number);
    sessionStorage.setItem("view_booking_amount", bill.booking_amount);
    sessionStorage.setItem("view_gst", bill.gst);
    sessionStorage.setItem("view_number_of_pkg", bill.number_of_pkg);
    sessionStorage.setItem("view_price_per_unit", bill.price_per_unit);
    sessionStorage.setItem("view_receiver_address", bill.receiver_address);
    sessionStorage.setItem(
      "view_receiver_gst_number",
      bill.receiver_gst_number
    );
    sessionStorage.setItem("view_receiver_name", bill.receiver_name);
    sessionStorage.setItem("view_receiver_state", bill.receiver_state);
    sessionStorage.setItem("view_total", bill.total);
    sessionStorage.setItem("view_user_id", bill.user_id);
    sessionStorage.setItem("view_vehicle_number", bill.vehicle_number);

    history.push("/viewbill");
  }

  // Delete Bill from List
  async function deleteBill(bill) {
    setLoading(true);
    console.log(bill);

    // Delete Bill from the Server

    try {
      const response = await axios.delete(
        `http://localhost:8080/delete-bill/${bill}`
      );
    } catch (e) {
      console.log("Error Occured in Deleting Bill");
    }

    // Delete Bill from the Array

    const tempBillList = billdetails.filter((billdetail) => {
      return billdetail.bill_number !== bill;
    });
    setBilldetails(tempBillList);

    {
      response === null ? setLoading(true) : setLoading(false);
    }

    console.log(tempBillList);
    console.log(billdetails);
  }

  return (
    <>
      <Segment
        style={{ marginTop: "100px", textAlign: "center", color: "blue" }}
      >
        <Segment color="yellow">
          <Link to="/newbill">
            <Button
              color="instagram"
              floated="right"
              style={{ marginRight: "20px" }}
            >
              Make Bill
            </Button>
          </Link>
          <h2 style={{ marginTop: 0 }}>Bill Details - Dashboard </h2>
        </Segment>
        <Segment>
          <Table textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Bill Number</Table.HeaderCell>
                <Table.HeaderCell>Vehicle Number</Table.HeaderCell>
                <Table.HeaderCell>Receiver's Name</Table.HeaderCell>
                <Table.HeaderCell>From</Table.HeaderCell>
                <Table.HeaderCell>To</Table.HeaderCell>
                <Table.HeaderCell>Total Amount</Table.HeaderCell>
                <Table.HeaderCell>View Bill</Table.HeaderCell>
                <Table.HeaderCell>Delete Bill</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {/* Mapping All Rows in the table */}

              {billdetails.map((billdetail, index) => {
                return (
                  <Table.Row key={index}>
                    <Table.Cell>{billdetail.billData}</Table.Cell>
                    <Table.Cell>{billdetail.vehicle_number}</Table.Cell>
                    <Table.Cell>{billdetail.receiver_name}</Table.Cell>
                    <Table.Cell>
                      {sessionStorage.getItem("company_state")}
                    </Table.Cell>
                    <Table.Cell>{billdetail.receiver_state}</Table.Cell>
                    <Table.Cell>{billdetail.total}</Table.Cell>
                    <Table.Cell>
                      <Link
                        to={{ pathname: "/viewbill", state: { billdetail } }}
                      >
                        <Button
                          onClick={() => viewbill(billdetail)}
                          color="instagram"
                        >
                          View
                          <Icon style={{ marginLeft: 10 }} name="file" />
                        </Button>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        onClick={() => deleteBill(billdetail.bill_number)}
                        color="red"
                      >
                        Delete
                        <Icon style={{ marginLeft: 10 }} name="trash" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}

              {/* Mapping All Rows in the table */}
            </Table.Body>
          </Table>
        </Segment>
      </Segment>

      {loading ? (
        <Dimmer active>
          <Loader active inline>
            Loading...
          </Loader>
        </Dimmer>
      ) : null}
    </>
  );
}

export default AllBills;
