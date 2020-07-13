import React, { Component, Fragment } from "react";
import "./PhoneAuth.css";
import AdminNavbar from "../../../Shared/AdminNavbar/AdminNavbar";
import PhoneForm from "./PhoneForm";
class PhoneAuth extends Component {
  render() {
    // console.log("==>", this.props.location.state.params);

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
              <PhoneForm />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PhoneAuth;
