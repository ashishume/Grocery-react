import React, { Component, Fragment } from "react";
import "./Signup.css";
import SignupForm from "../../../components/Auth/SignupForm/SignupForm";
import Navbar from "../../../Shared/Navbar/Navbar";
import history from "../../../history";
import firebase from "../../../firebase";
import PhoneForm from "../../../components/Auth/PhoneAuth/PhoneForm";
import { Link } from "react-router-dom";
import { signUpUser } from "../../../store/actions/auth";
import { connect } from "react-redux";
import { checkAuthStatus } from "../../../Shared/AuthService";
class Signup extends Component {
  resultData;
  state = {
    isVisible: false,
    result: "",
    error: false,
    userData: "",
  };
  submitHandler = (value) => {
    const body = {
      ...value,
      userType: 3,
    };
    this.setState({
      userData: body,
    });

    var appVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
    const phone = `+91${value.phone}`;
    firebase
      .auth()
      .signInWithPhoneNumber(phone, appVerifier)
      .then((result) => {
        console.log(result);

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
        this.props.signUpUser(this.state.userData);
        if (data.user) {
          const type = Math.floor(Math.random(0, 1000000) * 1000000000);
          localStorage.setItem("email", this.state.userData.email);
          localStorage.setItem(
            "type",
            `${type}${this.state.userData.userType}`
          );
          localStorage.setItem("name", this.state.userData.name);
          localStorage.setItem("userId", this.state.userData.userId);
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);

        this.setState({
          error: true,
        });
      });
  };

  componentDidMount() {
    if (checkAuthStatus()) history.push("/");
  }

  render() {
    return (
      <Fragment>
        <Navbar />
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

                  <p className="signup-description-footer">
                    Already have an account? <Link to="/">Signin here</Link>
                  </p>
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

export default connect("", { signUpUser })(Signup);
