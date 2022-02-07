import moment from 'moment';

export default function upcomingEventsHelper(allEvents) {
  // only display the most recent 6 events with a start date in the future sorted by start date
  const events = allEvents.filter(event => moment(event.start_date).isAfter(moment()));
  events.sort((a, b) => moment(a.start_date).diff(moment(b.start_date)));
  events.splice(6);
  return events;
}
