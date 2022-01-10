import React from 'react';
import Slider from 'react-slick';
import styles from './Carousel.module.css';


function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    centerMode: false,
    centerPadding: '60px',
    className: 'center',
    adaptiveHeight: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
  };

  return (
    <Slider {...settings} className={styles.Carousel_container}>
      <div><img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="test" /></div>
      <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOSOH5Sxw9BVvfu1N9O-eif5lhIpnBEeTfdXRVTBGftABsseRTMkHSnoRkN4XttzRbbo&usqp=CAU" alt="test" /></div>
      <div><img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="test" /></div>
    </Slider>
  );
}

export default Carousel;
