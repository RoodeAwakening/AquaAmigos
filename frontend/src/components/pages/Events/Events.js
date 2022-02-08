import React from 'react';
import { useSelector } from 'react-redux';
import i18next from 'i18next';
import verifyMemberPosition from '../../../helpers/verifyMemberPosition';
import PageImageHeader from '../../molecules/PageImageHeader/PageImageHeader';
import events from '../../../mocks/Event';
// import styles from './Events.module.css';

function Events() {
  const user = useSelector(state => state?.session?.user);
  // todo useEffect to get the current list of events
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
      {/* events length minus 1 position */}
      <PageImageHeader
        imgSrc={events[events.length - 1].coverImage}
        title="msg_upcoming_events"
        subTitle="msg_upcoming_events_check_out"
      />
      <div>{addEventOption()}</div>

      <div className="accordion" id="accordionExample">
        {events.map(event => (
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseTwo_${event.id}`} aria-expanded="false" aria-controls="collapseTwo">
                {event.title}
              </button>
            </h2>
            <div id={`collapseTwo_${event.id}`} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h2>{event.description}</h2>
              </div>
            </div>
          </div>
        ))}


      </div>


    </div>
  );
}

export default Events;
