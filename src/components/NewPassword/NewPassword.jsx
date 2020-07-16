import React, { Fragment, useState, useEffect } from "react";
import { Input, Button, FormGroup, Message } from "semantic-ui-react";
import Navbar from "../../Shared/Navbar/Navbar";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
const NewPassword = (props) => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const resetPassword = () => {
    if (!password.length) setMessage("Please enter password");
    if (password.length) {
      if (localStorage.getItem("u") == props.match.params.id) {
        const body = {
          password: password,
          email: localStorage.getItem("em"),
        };
        HttpService.post(`${API_NAME.AUTH}reset`, body).then((data) => {
          if (data.status == 200) setMessage("Password has been reset");
        });
      } else {
        setMessage("Link has been expired");
      }
    }
  };

  // useEffect(()=>{
  //   log
  // },[password])

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12" style={{ textAlign: "center" }}>
            <FormGroup>
              <Input
                value={password}
                type="password"
                placeholder="Enter new password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={() => resetPassword()}>Submit</Button>
            </FormGroup>
            {message.length ? <Message>{message}</Message> : null}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Fragment>
  );
};

export default NewPassword;
