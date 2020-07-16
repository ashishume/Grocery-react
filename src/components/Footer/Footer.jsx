import React from "react";
import "./Footer.css";
import { List, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Footer = (props) => {
  const openURL = (name) => {
    if (name == "WhatsApp") window.open("https://wa.me/919779140325", "_blank");
    if (name == "Facebook")
      window.open(
        "https://www.facebook.com/Shop-n-Save-The-Grocery-Shop-100709581684634",
        "_blank"
      );
    if (name == "Instagram")
      window.open("http://instagram.com/shopnsave39", "_blank");
  };

  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
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
          <div className="col-sm-3">
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
          <div className="col-sm-3">
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
          <div className="col-sm-3" id="map-container">
            <iframe
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.4727753129864!2d75.8925232!3d30.901406699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83a4760f8753%3A0x40b4314b82fd60c5!2sShop%20n%20Save%20Grocery%20Store!5e0!3m2!1sen!2sin!4v1594920537622!5m2!1sen!2sin"
              }
              width={"280"}
              height={"170"}
              frameBorder="0"
              style={{ border: 0}}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
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
