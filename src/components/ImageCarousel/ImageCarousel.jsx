import React, { Fragment, Component } from "react";
import "./ImageCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { connect } from "react-redux";
import { showAllImages } from "../../store/actions/images";
class ImageCarousel extends Component {
  componentDidMount() {
    this.props.showAllImages();
  }
  render() {
    return (
      <Fragment>
        <Carousel
          showThumbs={false}
          autoPlay
          onClickItem={this.props.onItemClickEvent}
          showStatus={false}
        >
          {this.props.images.map((value,i) => {
            return <img key={i} alt={`dashboard${i}`} className="imageItem" src={value.imageUrl} />;
          })}
        </Carousel>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    images: state.images.images,
  };
};
export default connect(mapStateToProps, { showAllImages })(ImageCarousel);
