import React, { Fragment, useState } from "react";
import { Form, Input, Button, FormGroup, Message } from "semantic-ui-react";
import Navbar from "../../Shared/Navbar/Navbar";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";

const ForgotPassword = (props) => {
  const [message, setMessage] = useState("");
  const [warning, setWarning] = useState("");
  const [email, setEmail] = useState("");
  const ResetPassword = async () => {
    const newToken =
      "ABCDEFGHIJKLMNOPQRSTdshfd36437564385634568435940385438503dfygiuyfdiuyiiuryeiwurvcnxmvcxndsapoiiewo48395934iufydsfiudsyi3387468732UVWXYZabcdefghijklmnopqrstuvwxyz1234567890fdutidstdstfdsfuydsftdsfutsuyfdsiyewrutesflksvcxcxnv";
    const shuffled = newToken
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");
    await localStorage.setItem("u", shuffled);
    await localStorage.setItem("em", email);
    const body = {
      email: email,
      resetLink: `${window.location.origin}/auth/new-password/${shuffled}`,
    };
    await HttpService.post(`${API_NAME.AUTH}forgot`, body).then((reset) => {
      if (reset.status == 200) {
        setMessage("Reset link has been sent please check your email");
        setWarning("Please wait for 2-3 minutes for the mail");
      }
    });
    return null;
  };

  const onClickForgotPassword = () => {
    if (!email.length) {
      setMessage("email required");
    } else {
      ResetPassword();
    }
  };
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12" style={{ textAlign: "center" }}>
            <h2>Enter email to get the reset password link</h2>
            <FormGroup>
              <Input
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                width={{ width: "100%" }}
              />
              <Button onClick={() => onClickForgotPassword()}>Submit</Button>
              {message.length ? (
                <Fragment>
                  <Message>{message}</Message>
                  <p>{warning}</p>
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

export default ForgotPassword;
