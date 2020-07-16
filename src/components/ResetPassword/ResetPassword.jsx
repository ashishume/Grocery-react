import React, { Fragment, useState } from "react";
import { Form, Input, Button, FormGroup, Message } from "semantic-ui-react";
import Navbar from "../../Shared/Navbar/Navbar";

const ResetPassword = (props) => {
  const [message, setMessage] = useState("");

  const onClickForgotPassword = () => {
    ResetPassword();
    setMessage("Reset link has been sent please check your email");
  };
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12" style={{ textAlign: "center" }}>
            <h2>Enter email to get the reset password link</h2>
            <FormGroup>
              <Input placeholder="Enter email" width={{ width: "100%" }} />
              <Button onClick={() => onClickForgotPassword()}>Submit</Button>
              {message.length ? (
                <Fragment>
                  <Message>{message}</Message>
                  <p>Please wait for 2-3 minutes for the mail</p>
                </Fragment>
              ) : null}
            </FormGroup>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
