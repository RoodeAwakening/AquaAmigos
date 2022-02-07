import React from 'react';
import { useSelector } from 'react-redux';
import i18next from 'i18next';
import verifyMemberPosition from '../../../helpers/verifyMemberPosition';
import PageImageHeader from '../../molecules/PageImageHeader/PageImageHeader';
import events from '../../../mocks/Event';

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
        <button type="button" onClick={addEvent}>{i18next.t('msg_event_add')}</button>
      );
    }
    return (
      <div>{i18next.t('msg_event_request_add')}</div>
    );
  };

  return (
    <div>
      {/* events length minus 1 position */}
      <PageImageHeader
        imgSrc={events[events.length - 1].coverImage}
        title="msg_upcoming_events"
        subTitle="msg_upcoming_events_check_out"
      />
      <div>
        {addEventOption()}
      </div>

      <div>
        {/* events */}
        {events.map(event => (
          <div key={event.id}>
            <h2>-----------</h2>
            <h2>{event.title}</h2>
            <h2>{event.description}</h2>
            <h2>{event.start_date}</h2>
          </div>
        ))}

      </div>
      <p>- list of events </p>
      <p>- - Title, Date, Description, Location, Image </p>
      <p>- - Title, Date, Description, Location, Image </p>
      <p>- - Title, Date, Description, Location, Image </p>
      <p>- - Title, Date, Description, Location, Image </p>
      <p>- - Title, Date, Description, Location, Image </p>
    </div>
  );
}

export default Events;
