
//npm install react-slick slick-carousel

import React from 'react';
import Carousel from './Components/Carousel';
import Slider1 from './Images/Slider1.png';
import Slider2 from './Images/Slider2.png';
import Slider3 from './Images/Slider3.png';
import Slider4 from './Images/Slider4.png';
import Slider5 from './Images/Slider5.png';

const images = [
  { src: Slider1, alt: 'Image 1' },
  { src: Slider2, alt: 'Image 2' },
  { src: Slider3, alt: 'Image 3' },
  { src: Slider4, alt: 'Image 2' },
  { src: Slider5, alt: 'Image 3' },

];

function App() {
  return (
    <div className="App">
      <h1>Automatic Carousel with Highlighted Image</h1>
      <Carousel images={images} />
    </div>
  );
}

export default App;
