import React from 'react';
import ContentBlock from '../../common/ContentBlock/ContentBlock';
import ContentHeader from '../../common/ContentHeader/ContentHeader';
import ResponsiveBlock from '../../common/ResponsiveBlock/ResponsiveBlock';

function UpcomingEvents() {
  return (
    <section>
      <ContentHeader header="msg_upcoming_events" subHeader="msg_upcoming_events_check_out" />
      <ResponsiveBlock>
        <div>
          <ContentBlock title="Boat Dive Trip" description="come dive in the water" articleImage="https://www.sunrise-divers.com/wp-content/uploads/2017/02/local-dive-trips.jpg" />
        </div>
        <div>
          <ContentBlock title="Boat Dive Trip" description="come dive in the water" articleImage="https://www.sunrise-divers.com/wp-content/uploads/2017/02/local-dive-trips.jpg" />
        </div>
        <div>
          <ContentBlock title="Boat Dive Trip" description="come dive in the water" articleImage="https://www.sunrise-divers.com/wp-content/uploads/2017/02/local-dive-trips.jpg" />
        </div>
        <div>
          <ContentBlock title="Boat Dive Trip" description="come dive in the water" articleImage="https://www.sunrise-divers.com/wp-content/uploads/2017/02/local-dive-trips.jpg" />
        </div>
      </ResponsiveBlock>
    </section>
  );
}

export default UpcomingEvents;
