import React from "react";
import "./Footer.css";
import { List, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";
const Footer = (props) => {
  const openURL = (name) => {
    if (name == "WhatsApp") window.open("https://wa.me/919779140325", "_blank");
    if (name == "Facebook")
      window.open(
        "https://www.facebook.com/Shop-n-Save-The-Grocery-Shop-100709581684634",
        "_blank"
      );
    if (name == "Instagram") window.open("http://instagram.com/", "_blank");
  };

  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <List style={{ cursor: "pointer" }}>
              <List.Item>
                <strong>Top Categories</strong>
              </List.Item>
              {props.category.slice(0, 5).map((value, i) => {
                return (
                  <List.Item key={i}>
                    <Link to={`category/${value._id}`}>{value.name}</Link>
                  </List.Item>
                );
              })}
            </List>
          </div>
          <div className="col-sm-4">
            <List>
              <List.Item>
                <strong>CONTACT US</strong>
              </List.Item>
              <List.Item>
                <Icon
                  size="large"
                  onClick={() => openURL("WhatsApp")}
                  name="whatsapp"
                />
                <Icon
                  size="large"
                  onClick={() => openURL("Facebook")}
                  name="facebook official"
                />
                <Icon
                  size="large"
                  onClick={() => openURL("Instagram")}
                  name="instagram"
                />
              </List.Item>
              <Link to="/terms-and-condition">
                <List.Item onClick={() => openURL("Terms")}>
                  Terms and condition
                </List.Item>
              </Link>
              <Link to="/privacy-policy">
                <List.Item onClick={() => openURL("Privacy")}>
                  Privacy Policy
                </List.Item>
              </Link>
            </List>
          </div>
          <div className="col-sm-4">
            <List>
              <List.Item>
                <strong> CUSTOMER CARE </strong>
              </List.Item>
              <List.Item>
                Facing any problem ? contact us following details
              </List.Item>
              <List.Item>Phone: +919779140325 </List.Item>
              <List.Item>Email: shopnsavelive@gmail.com</List.Item>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    category: state.category.category,
  };
};
export default connect(mapStateToProps, {})(Footer);
