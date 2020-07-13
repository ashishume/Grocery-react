import React, { Component, Fragment } from "react";
import "./Signup.css";
import SignupForm from "../../../components/Auth/SignupForm";
import AdminNavbar from "../../../Shared/AdminNavbar/AdminNavbar";
import history from "../../../history";
import firebase from "../../../firebase";
import PhoneForm from "../PhoneAuth/PhoneForm";
class Signup extends Component {
  resultData;
  state = {
    isVisible: false,
    result: "",
    error: false,
  };
  submitHandler = (value) => {
    var appVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
    const phone = `+91${value.phone}`;
    firebase
      .auth()
      .signInWithPhoneNumber(phone, appVerifier)
      .then((result) => {
        this.setState({
          isVisible: true,
          result: result,
        });
      })
      .catch(function (error) {
        console.log(error);
        this.setState({
          error: true,
        });
      });
  };

  submitOTPHandler = (e) => {
    this.state.result
      .confirm(e.phoneOTP)
      .then((data) => {
        if (data.user) history.push("/");
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  };
  render() {
    return (
      <Fragment>
        <AdminNavbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-6" style={{ textAlign: "center" }}>
              <h1>Welcome to Shop and Save</h1>
              <img
                src={require("../../../assets/shop.png")}
                className="img-fluid"
                alt="shop"
              />
            </div>
            <div className="col-sm-6">
              <h2 style={{ fontWeight: "lighter" }}>
                Sign up to access your orders, special offers and more!
              </h2>
              {this.state.isVisible ? (
                <PhoneForm submitOtpHandler={(e) => this.submitOTPHandler(e)} />
              ) : (
                <Fragment>
                  <SignupForm submitHandler={(e) => this.submitHandler(e)} />
                  <div id="recaptcha-container"></div>
                </Fragment>
              )}
              {this.state.error ? (
                <div className="error-message">Something went wrong</div>
              ) : null}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Signup;
