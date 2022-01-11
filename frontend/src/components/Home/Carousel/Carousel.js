import React from 'react';
import Slider from 'react-slick';
import i18next from 'i18next';
import { NavLink } from 'react-router-dom';
import styles from './Carousel.module.css';
import mockEvent from '../../../mocks/Event';

function Carousel() {
  const events = mockEvent;

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
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
  };

  const renderEvents = () => {
    // return the 3 most recent events
    return Object.keys(events).slice(0, 3).map((key) => {
      const event = events[key];
      return (
        <div key={event.id} className={styles.carousel_event_container}>
          <div className={styles.carousel_event_image_container}>
            <img src={event.coverImage} alt="event" />
          </div>
          <div className={styles.carousel_event_info_container}>
            <div className={styles.carousel_event_title}>{event.title}</div>
            <div className={styles.carousel_event_description}>{event.description}</div>
            <div className={styles.carousel_event_button}>
              <NavLink to={`events/${event.id}`}>
                {i18next.t('msg_event_view')}
              </NavLink>
            </div>

          </div>
        </div>
      );
    });
  };

  return (
    <Slider {...settings} className={styles.Carousel_container}>
      {renderEvents()}
    </Slider>
  );
}

export default Carousel;
