import React, { Component } from 'react';
import AppState from '../state/AppState';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
  },
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
  },
  tablet: {
      breakpoint: { max: 1024, min: 501 },
      items: 1
  },
  mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    
  }
};

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    AppState.getInstance().setShowSettingsPane(false);
    AppState.getInstance().setShowOtherSettings(false);
  }

  render() {
    const isMobile = window.innerWidth < 500;
    console.log(isMobile);
    const height = isMobile ? '400px' : '80vh';
    const width = isMobile ? '100vw' : '45vw';
    const topMargin = isMobile ? '200px' : '40px';
    

    return (
      <div style={{ marginTop: topMargin, marginBottom: '10px'}}>
        <Carousel responsive={responsive} centerMode={!isMobile} removeArrowOnDeviceType={['desktop', 'superLargeDesktop', 'mobile']} itemClass="carousel-item-padding-1-px" infinite={true} autoPlay={true}>
        <div style={{  width: width, height: height }}><img style={{ width: '100%', height: '100%' }} src={process.env.PUBLIC_URL + "/steel.gif"} alt="" srcset="" /></div>
          <div style={{  width: width, height: height }}><img style={{ width: '100%', height: '100%' }} src="https://picsum.photos/801" alt="" srcset="" /></div>
          <div style={{  width: width, height: height }}><img style={{ width: '100%', height: '100%' }} src={process.env.PUBLIC_URL + "/robopic.gif"} alt="" srcset="" /></div>
          <div style={{  width: width, height: height }}><img style={{ width: '100%', height: '100%' }} src="https://picsum.photos/800" alt="" srcset="" /></div>

        </Carousel>

      </div>
    );
  }
}