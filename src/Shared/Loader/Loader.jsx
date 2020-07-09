import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <React.Fragment>
      {
        <div className="overlay">
          <div className="spinner">
            <div className="ui massive active centered inline loader"></div>
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default Loader;
