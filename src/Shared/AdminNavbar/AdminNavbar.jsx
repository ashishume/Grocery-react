import React, { Component, Fragment } from "react";
import { showCategory } from "../../store/actions/category";
import { connect } from "react-redux";
import history from "../../history";
import "./AdminNavbar.css";
import { Menu, Dropdown } from "semantic-ui-react";
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li
              onClick={() => this.handleItemClick("dashboard")}
              className="nav-item active"
            >
              <a className="nav-link">
                Home
              </a>
            </li>
            <li
              onClick={() => this.handleItemClick("cart")}
              className="nav-item active"
            >
              <a className="nav-link">
                Cart
              </a>
            </li>
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
      // <Menu secondary>
      //   <Dropdown text="More" pointing classNameName="link item">
      //     <Dropdown.Menu>
      //       <Dropdown.Item>
      //         <Dropdown text="Categories">
      //           <Dropdown.Menu>
      //             {this.props.categories.map((value, i) => {
      //               return <Dropdown.Item key={i}>{value.name}</Dropdown.Item>;
      //             })}
      //           </Dropdown.Menu>
      //         </Dropdown>
      //       </Dropdown.Item>
      //     </Dropdown.Menu>
      //   </Dropdown>

      //   <Menu.Item name="product" onClick={this.handleItemClick}>
      //     Add Product
      //   </Menu.Item>
      //   <Menu.Item name="dashboard" onClick={this.handleItemClick}>
      //     Dashboard
      //   </Menu.Item>

      //   <Menu.Item name="category" onClick={this.handleItemClick}>
      //     Add Category
      //   </Menu.Item>
      //   <Menu.Item name="add-link" onClick={this.handleItemClick}>
      //     Add Link
      //   </Menu.Item>
      // </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.category,
  };
};
export default connect(mapStateToProps, { showCategory })(AdminNavbar);
