import React from 'react';
import ContentBlock from '../../common/ContentBlock/ContentBlock';
import ContentHeader from '../../common/ContentHeader/ContentHeader';
import ResponsiveBlock from '../../common/ResponsiveBlock/ResponsiveBlock';
import upcomingEventsHelper from '../helper/upcomingEvents';
import Events from '../../../mocks/Event';

function UpcomingEvents() {
  const upcomingEventsSorted = upcomingEventsHelper(Events).map((event) => {
    return (
      <>
        <ContentBlock
          key={event.id}
          title={event.title}
          description={event.description}
          articleImage={event.coverImage}
          link={`events/${event.id}`}
        />
      </>
    );
  });
  return (
    <section>
      <ContentHeader header="msg_upcoming_events" subHeader="msg_upcoming_events_check_out" />
      <ResponsiveBlock>
        {upcomingEventsSorted.length && upcomingEventsSorted}
      </ResponsiveBlock>
    </section>
  );
}

export default UpcomingEvents;
