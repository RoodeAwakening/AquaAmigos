import moment from 'moment';
import upcomingEvents from '../helper/upcomingEvents';

describe('upcoming events sort', () => {
  it('should sort events by start date and only render 6 events', () => {
    const events = [
      {
        id: 1,
        title: 'event 1',
        start_date: '2019-01-10',
        end_date: '2019-01-10',
        description: 'event 1 description',
        coverImage: 'event 1 cover image',
      },
      {
        id: 2,
        title: 'event 2',
        start_date: moment().add(2, 'days').format('YYYY-MM-DD'),
        end_date: moment().add(3, 'days').format('YYYY-MM-DD'),
        description: 'event 2 description',
        coverImage: 'event 2 cover image',
      },
      {
        id: 3,
        title: 'event 3',
        start_date: moment().add(3, 'days').format('YYYY-MM-DD'),
        end_date: moment().add(4, 'days').format('YYYY-MM-DD'),
        description: 'event 3 description',
        coverImage: 'event 3 cover image',
      },
      {
        id: 4,
        title: 'event 4',
        start_date: moment().add(4, 'days').format('YYYY-MM-DD'),
        end_date: moment().add(5, 'days').format('YYYY-MM-DD'),
        description: 'event 4 description',
        coverImage: 'event 4 cover image',
      },
      {
        id: 5,
        title: 'event 5',
        start_date: moment().add(5, 'days').format('YYYY-MM-DD'),
        end_date: moment().add(6, 'days').format('YYYY-MM-DD'),
        description: 'event 5 description',
        coverImage: 'event 5 cover image',
      },
      {
        id: 6,
        title: 'event 6',
        start_date: '2019-01-09',
        end_date: '2019-01-09',
        description: 'event 6 description',
        coverImage: 'event 6 cover image',
      },
      {
        id: 7,
        title: 'event 7',
        start_date: moment().add(7, 'days').format('YYYY-MM-DD'),
        end_date: moment().add(8, 'days').format('YYYY-MM-DD'),
        description: 'event 7 description',
        coverImage: 'event 7 cover image',
      },
      {
        id: 8,
        title: 'event 8',
        start_date: moment().add(8, 'days').format('YYYY-MM-DD'),
        end_date: moment().add(9, 'days').format('YYYY-MM-DD'),
        description: 'event 8 description',
        coverImage: 'event 8 cover image',
      },
      {
        id: 9,
        title: 'event 9',
        start_date: moment().add(6, 'days').format('YYYY-MM-DD'),
        end_date: moment().add(7, 'days').format('YYYY-MM-DD'),
        description: 'event 9 description',
        coverImage: 'event 9 cover image',
      },
      {
        id: 10,
        title: 'event 10',
        start_date: moment().add(1, 'days').format('YYYY-MM-DD'),
        end_date: moment().add(2, 'days').format('YYYY-MM-DD'),
        description: 'event 10 description',
        coverImage: 'event 10 cover image',
      },
    ];

    const sortedEvents = upcomingEvents(events);
    expect(sortedEvents.length).toBe(6);
    expect(sortedEvents[0].title).toBe('event 10');
    expect(sortedEvents[1].title).toBe('event 2');
    expect(sortedEvents[2].title).toBe('event 3');
    expect(sortedEvents[3].title).toBe('event 4');
    expect(sortedEvents[4].title).toBe('event 5');
    expect(sortedEvents[5].title).toBe('event 9');
  });
});
