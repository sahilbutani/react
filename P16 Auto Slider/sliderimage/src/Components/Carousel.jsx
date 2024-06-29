import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Import CSS file for custom styling

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000, // Adjust speed as needed
      slidesToShow: 3, // Display three images at a time
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // Adjust autoplay speed as needed
      arrows: false,
      centerMode: true,
      centerPadding: '0', // No padding for centerMode
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            slidesToShow: 1
          }
        }
      ]
    };

    return (
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <Slider {...settings}>
            {this.props.images.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Carousel;
