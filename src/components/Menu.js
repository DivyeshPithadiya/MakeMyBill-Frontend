import React, { useState, useEffect } from "react";
import { Image, Button, Menu, Segment, Icon } from "semantic-ui-react";
import myimg from "./Images/logo.png";
import { Link, useHistory } from "react-router-dom";

function Menubar() {
  const [authenticated, setAuthenticated] = useState(
    sessionStorage.getItem("authenticated")
  );
  const [icon, setIcon] = useState("");
  const [username, setUsername] = useState("");

  let history = useHistory();
  const logout = () => {
    setAuthenticated(false);
    setIcon("");
    setUsername("");

    // sessionStorage.setItem('authenticated',false)

    window.sessionStorage.clear();

    history.push("/home");

    // window.location.reload()
  };

  //Perform the below task only once when component is rendered
  useEffect(() => {
    if (sessionStorage.getItem("authenticated")) {
      setAuthenticated(true);
      setIcon(<Icon name="user" size="big" color="black" />);
      setUsername(
        <p style={{ color: "black" }}>{sessionStorage.getItem("email_id")}</p>
      );
    } else {
      setAuthenticated(false);
      setIcon("");
      setUsername("");
    }
  }, []);

  return (
    // <Segment basic>
    <Menu stackable color="yellow" inverted style={{ padding: 0, margin: 0 }}>
      <Menu.Item centered>
        {/* <Image src={myimg} size="small" /> */}
        {/* <Icon name="file alternate outline" size="huge" color="black"></Icon> */}
        <h1 style={{ color: "black" }}>MakeMyBill.com</h1>
      </Menu.Item>

      <Menu.Item basic>
        {icon}
        {username}
      </Menu.Item>

      <Menu.Item position="right">
        <Link to="/">
          <Menu.Item>
            <Button color="red">Home</Button>
          </Menu.Item>
        </Link>

        {/* <Menu.Item>
          <Button color="red">Help</Button>
        </Menu.Item> */}

        {authenticated === true ? (
          <Menu.Item>
            <Button onClick={logout} primary>
              Log-Out
            </Button>
          </Menu.Item>
        ) : (
          <Link to="/login">
            <Menu.Item>
              <Button color="green">Log-in</Button>
            </Menu.Item>
          </Link>
        )}

        {authenticated === true ? null : (
          <Link to="/signup">
            <Menu.Item>
              <Button primary>Sign up</Button>
            </Menu.Item>
          </Link>
        )}

        {authenticated === true ? (
          <Link to="/allbills">
            <Menu.Item>
              <Button color="green">Dashboard</Button>
            </Menu.Item>
          </Link>
        ) : null}
      </Menu.Item>
    </Menu>
    // </Segment>
  );
}

export default Menubar;
