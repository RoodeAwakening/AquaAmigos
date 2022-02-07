import React from 'react';
import PageImageHeader from '../../molecules/PageImageHeader/PageImageHeader';
import events from '../../../mocks/Event';

function Events() {
  // todo useEffect to get the current list of events
  return (
    <div>
      {/* events length minus 1 position */}
      <PageImageHeader
        imgSrc={events[events.length - 1].coverImage}
        title="msg_upcoming_events"
        subTitle="msg_upcoming_events_check_out"
      />
      <p>- Events Header Image - whatever the most upcoming event is - images </p>
      <p>- if position is 1 or greater - section to add an event </p>
      <p>- list of events </p>
      <p>- - Title, Date, Description, Location, Image </p>
    </div>
  );
}

export default Events;
