import React from 'react';
import ContentBlock from '../../molecules/ContentBlock/ContentBlock';
import ContentHeader from '../../molecules/ContentHeader/ContentHeader';
import ResponsiveBlock from '../../atoms/ResponsiveBlock/ResponsiveBlock';
import upcomingEventsHelper from '../../../helpers/upcomingEvents';
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
