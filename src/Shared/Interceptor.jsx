import React, { Component, Fragment } from "react";
import http from "../API/HttpService";
import { loading } from "../store/actions/loader";
import { connect } from "react-redux";
import Loader from "./Loader/Loader";
import { Message } from "semantic-ui-react";

class LoaderComponent extends Component {
  state = {
    errorMessage: "",
  };
  componentDidMount() {
    const self = this;
    http.interceptors.request.use(
      (request) => {
        self.props.loading(true);
        return request;
      },
      (error) => {
        self.props.loading(false);
        return Promise.reject(error);
      }
    );

    http.interceptors.response.use(
      (response) => {
        self.props.loading(false);
        return response;
      },
      (error) => {
        self.props.loading(false);

        this.setState({
          errorMessage: error.response.data.message,
        });

        console.log("==>", error.response.data.message);

        return Promise.reject(error);
      }
    );
  }
  render() {
    setTimeout(() => {
      this.setState({ errorMessage: "" });
    }, 7000);
    return (
      <Fragment>
        {this.props.loader ? <Loader /> : null}
        {this.state.errorMessage ? (
          <Message
            color="red"
            style={{
              margin: "0 auto",
              textAlign: "center",
              position: "absolute",
              top:'70%',
              left:'40%'
            }}
          >
            {this.state.errorMessage}
          </Message>
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loader: state.loader,
  };
};
export default connect(mapStateToProps, { loading })(LoaderComponent);
