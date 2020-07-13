import React, { Component, Fragment } from "react";
import { showCategory } from "../../store/actions/category";
import { connect } from "react-redux";
import history from "../../history";
import "./Navbar.css";
import { Button, Popup, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { checkAuthStatus } from "../AuthService";
class Navbar extends Component {
  componentDidMount() {
    this.props.showCategory();
  }
  handleItemClick = (name) => {
    if (name === "signin") history.push("/auth/signin");
    if (name === "category") history.push("/add-category");
    else if (name === "product") history.push("/add-product");
    else if (name === "dashboard") history.push("/");
    else if (name === "add-link") history.push("/add-image-link");
    else if (name === "cart") history.push("/checkout/cart");
    else if (name === "myOrders") history.push("/my-orders");
  };
  onSignOutHandler = () => {
    localStorage.clear();
    history.push("/auth/signin");
  };
  toggleNavbar = () => {};
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#0091f9" }}
      >
        <Link to="/">
          <span className="navbar-brand">Shop N Save</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li
              onClick={() => this.handleItemClick("dashboard")}
              className="nav-item"
            >
              <span className="nav-link" style={{ cursor: "pointer" }}>
                Shop
              </span>
            </li>
            {checkAuthStatus() ? (
              <li
                onClick={() => this.handleItemClick("myOrders")}
                className="nav-item"
              >
                <span className="nav-link" style={{ cursor: "pointer" }}>
                  My orders
                </span>
              </li>
            ) : null}
          </ul>
          <span className="navbar-text">
            {!checkAuthStatus() ? (
              <Popup
                content="Signin"
                trigger={
                  <Icon
                    size="big"
                    onClick={() => this.handleItemClick("signin")}
                    name="sign-in"
                  />
                }
              />
            ) : (
              <Fragment>
                <Popup
                  content="Signout"
                  trigger={
                    <Icon
                      size="big"
                      onClick={() => this.onSignOutHandler()}
                      name="sign-out"
                    />
                  }
                />
              </Fragment>
            )}
            <Icon
              name="cart"
              size="big"
              onClick={() => history.push("/checkout/cart")}
            />
          </span>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.category,
  };
};
export default connect(mapStateToProps, { showCategory })(Navbar);
