import React from 'react';
import { useSelector } from 'react-redux';
import i18next from 'i18next';
import verifyMemberPosition from '../../../helpers/verifyMemberPosition';
import PageImageHeader from '../../molecules/PageImageHeader/PageImageHeader';
import events from '../../../mocks/Event';

function Events() {
  const user = useSelector(state => state.user);
  // todo useEffect to get the current list of events
  return (
    <div>
      {/* events length minus 1 position */}
      <PageImageHeader
        imgSrc={events[events.length - 1].coverImage}
        title="msg_upcoming_events"
        subTitle="msg_upcoming_events_check_out"
      />
      <p>- if position is 1 or greater - section to add an event </p>
      <div>
        {user && verifyMemberPosition(user) ? (
          <button type="button">
            {i18next.t('msg_event_add')}
          </button>
        ) : null}
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
