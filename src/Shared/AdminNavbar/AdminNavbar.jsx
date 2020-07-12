import React, { Component, Fragment } from "react";
import { showCategory } from "../../store/actions/category";
import { connect } from "react-redux";
import history from "../../history";
import "./AdminNavbar.css";
import { Button } from "semantic-ui-react";
class AdminNavbar extends Component {
  componentDidMount() {
    this.props.showCategory();
  }
  handleItemClick = (name) => {
    console.log(name);
    if (name === "category") history.push("/add-category");
    else if (name === "product") history.push("/add-product");
    else if (name === "dashboard") history.push("/");
    else if (name === "add-link") history.push("/add-image-link");
    else if (name === "cart") history.push("/checkout/cart");
  };

  toggleNavbar = () => {
    console.log("click");
  };
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#0091f9" }}
      >
        <a className="navbar-brand">Shop N Save</a>
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
              <a className="nav-link">Home</a>
            </li>
          </ul>
          <span className="navbar-text">
            <Button>Signin</Button>
            <Button
              icon="cart"
              color="red"
              circular
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
export default connect(mapStateToProps, { showCategory })(AdminNavbar);
