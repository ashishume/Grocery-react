import React, { Component, Fragment } from "react";
import "./Signin.css";
import Navbar from "../../../Shared/Navbar/Navbar";
import SigninForm from "../../../components/Auth/SigninForm/SigninForm";
import { Link } from "react-router-dom";
import { signIn } from "../../../store/actions/auth";
import { connect } from "react-redux";
import history from "../../../history";
import { checkAuthStatus } from "../../../Shared/AuthService";
class Signin extends Component {
  submitHandler = async (e) => {
    await this.props.signIn(e);
    await history.push("/");
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
                Sign in to access your orders, special offers and more!
              </h2>
              <SigninForm submitHandler={(e) => this.submitHandler(e)} />
              <p className="signin-description-footer">
                Dont have an account?
                <Link to="/auth/signup"> Signup here</Link> | 
                Forgot password?
                <Link to="/auth/forgot-password"> click here</Link>
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect("", { signIn })(Signin);
