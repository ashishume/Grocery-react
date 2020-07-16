import React, { Component, Fragment } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { List, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

class AdminPanelAccess extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div
              className="col-6"
              style={{ textAlign: "center", marginTop: "60px" }}
            >
              <h1>Settings</h1>
              <img src={require("../assets/settings.png")} />
            </div>
            <div
              className="col-sm-6"
              style={{ fontSize: "20px", padding: "10px", marginTop: "60px" }}
            >
              <List>
                <Link to="/add-product">
                  <List.Item>Add Products</List.Item>
                </Link>
                <Divider />
                <Link to="/add-category">
                  <List.Item>Add Categories</List.Item>
                </Link>
                <Divider />
                <Link to="/all-orders">
                  <List.Item>All Orders</List.Item>
                </Link>
                <Divider />
                <Link to="/add-image-link">
                  <List.Item>Change banner images</List.Item>
                </Link>
              </List>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AdminPanelAccess;
