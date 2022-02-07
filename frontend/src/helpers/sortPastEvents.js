import moment from 'moment';

export default function pastEventsScroller(allEvents, toShow) {
  // only display the most recent 3 events with a start date in the past sorted by start date
  const events = allEvents.filter(event => moment(event.end_date).isBefore(moment()));
  events.sort((b, a) => moment(a.end_date).diff(moment(b.end_date)));
  events.splice(toShow);
  return events;
}
