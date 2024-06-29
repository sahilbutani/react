import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Import CSS file for custom styling

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 3900,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0, // Set autoplaySpeed to 0 to remove delay
      arrows: false,
      centerMode: true,
      centerPadding: '0',
      focusOnSelect: true,
      cssEase: 'linear',
      pauseOnHover: true, // Ensure slider pauses on hover
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
        <Slider {...settings}>
          {this.props.images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
