import React, { Fragment } from "react";
import "./ImageCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const ImageCarousel = (props) => {
  return (
    <Fragment>
      <Carousel
        showThumbs={false}
        autoPlay
        onClickItem={props.onItemClickEvent}
        showStatus={false}
      >
        <div>
          <img className="imageItem" src={require("../../assets/1.jpg")} />
        </div>
        <div>
          <img className="imageItem" src={require("../../assets/2.jpg")} />
        </div>
        <div>
          <img className="imageItem" src={require("../../assets/3.jpg")} />
        </div>
        <div>
          <img className="imageItem" src={require("../../assets/4.jpg")} />
        </div>
      </Carousel>
    </Fragment>
  );
};

export default ImageCarousel;
