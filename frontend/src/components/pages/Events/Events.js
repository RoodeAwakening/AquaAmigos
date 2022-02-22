import React from 'react';
import { useSelector } from 'react-redux';
import i18next from 'i18next';
import verifyMemberPosition from '../../../helpers/verifyMemberPosition';
import PageImageHeader from '../../molecules/PageImageHeader/PageImageHeader';
import events from '../../../mocks/Event';
import styles from './Events.module.css';

function Events() {
  const user = useSelector(state => state?.session?.user);

  const addEvent = (e) => {
    e.preventDefault();
    console.log('open event modal');
    // todo add the event to the list of events
  };

  const addEventOption = () => {
    if (verifyMemberPosition(user)) {
      return (
        <button type="button" onClick={addEvent}>
          {i18next.t('msg_event_add')}
        </button>
      );
    }
    return <div>{i18next.t('msg_event_request_add')}</div>;
  };

  return (
    <div>
      <PageImageHeader
        imgSrc={events[events.length - 1].coverImage}
        title="msg_upcoming_events"
        subTitle="msg_upcoming_events_check_out"
      />

      <div>{addEventOption()}</div>

      <div className="accordion-flush" id={styles.event_accordian}>
        {events && events.sort((a, b) => a.start_date - b.start_date).map(event => (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseTwo_${event.id}`} aria-expanded="false" aria-controls="collapseTwo">
                {event.start_date} - {event.title}
              </button>
            </h2>
            <div id={`collapseTwo_${event.id}`} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h2>{i18next.t('msg_event_description')}</h2>
                <p>{event.description}</p>
                <h2>{i18next.t('msg_event_location')}</h2>
                <p>{event.address.name}</p>
                <p>{event.address.street}</p>
                <p>{event.address.city}, {event.address.state} {event.address.zip}</p>
                <img src={event.coverImage} alt="event" className={styles.event_image} />
              </div>
            </div>
          </div>
        ))}


      </div>


    </div>
  );
}

export default Events;
