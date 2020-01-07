const { expect } = require('chai');
const util = require('../utils/utils');

const arr = [
  {
    name: 'BILLIE EILISH: where do we go? world tour',
    type: 'event',
    id: 'G5vHZ4SnWTW2W',
    test: false,
    url:
      'https://www.ticketmaster.co.uk/billie-eilish-where-do-we-go-manchester-07-21-2020/event/1F00573ABDFFD3FD',
    locale: 'en-us',
    images: [
      {
        ratio: '16_9',
        url:
          'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_RECOMENDATION_16_9.jpg',
        width: 100,
        height: 56,
        fallback: false
      },
      {
        ratio: '16_9',
        url:
          'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_RETINA_PORTRAIT_16_9.jpg',
        width: 640,
        height: 360,
        fallback: false
      },
      {
        ratio: '16_9',
        url:
          'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_RETINA_LANDSCAPE_16_9.jpg',
        width: 1136,
        height: 639,
        fallback: false
      },
      {
        ratio: '16_9',
        url:
          'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_EVENT_DETAIL_PAGE_16_9.jpg',
        width: 205,
        height: 115,
        fallback: false
      },
      {
        ratio: '4_3',
        url:
          'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_CUSTOM.jpg',
        width: 305,
        height: 225,
        fallback: false
      },
      {
        ratio: '16_9',
        url:
          'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_TABLET_LANDSCAPE_LARGE_16_9.jpg',
        width: 2048,
        height: 1152,
        fallback: false
      },
      {
        ratio: '3_2',
        url:
          'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_ARTIST_PAGE_3_2.jpg',
        width: 305,
        height: 203,
        fallback: false
      },
      {
        ratio: '3_2',
        url:
          'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_RETINA_PORTRAIT_3_2.jpg',
        width: 640,
        height: 427,
        fallback: false
      },
      {
        ratio: '3_2',
        url:
          'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_TABLET_LANDSCAPE_3_2.jpg',
        width: 1024,
        height: 683,
        fallback: false
      },
      {
        ratio: '16_9',
        url:
          'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_TABLET_LANDSCAPE_16_9.jpg',
        width: 1024,
        height: 576,
        fallback: false
      }
    ],
    sales: {
      public: {
        startDateTime: '2019-10-04T08:00:00Z',
        startTBD: false,
        endDateTime: '2020-07-21T18:30:00Z'
      },
      presales: [
        {
          startDateTime: '2019-10-02T08:00:00Z',
          endDateTime: '2019-10-04T07:00:00Z',
          name: 'O2 Priority'
        },
        {
          startDateTime: '2019-10-02T08:00:00Z',
          endDateTime: '2019-10-04T07:00:00Z',
          name: 'Album Presale'
        },
        {
          startDateTime: '2019-10-03T08:00:00Z',
          endDateTime: '2019-10-04T07:00:00Z',
          name: 'Live Nation Presale'
        },
        {
          startDateTime: '2019-10-03T08:00:00Z',
          endDateTime: '2019-10-04T07:00:00Z',
          name: 'Venue Presale'
        }
      ]
    },
    dates: {
      start: {
        localDate: '2020-07-21',
        localTime: '19:30:00',
        dateTime: '2020-07-21T18:30:00Z',
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false
      },
      timezone: 'Europe/London',
      status: {
        code: 'onsale'
      },
      spanMultipleDays: false
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: 'KZFzniwnSyZfZ7v7nJ',
          name: 'Music'
        },
        genre: {
          id: 'KnvZfZ7vAev',
          name: 'Pop'
        },
        subGenre: {
          id: 'KZazBEonSMnZfZ7vk1t',
          name: 'Pop'
        },
        type: {
          id: 'KZAyXgnZfZ7v7nI',
          name: 'Undefined'
        },
        subType: {
          id: 'KZFzBErXgnZfZ7v7lJ',
          name: 'Undefined'
        },
        family: false
      }
    ],
    promoter: {
      id: '4110',
      name: 'LIVE NATION MUSIC UK LTD',
      description: 'LIVE NATION MUSIC UK LTD / NTL / GBR'
    },
    promoters: [
      {
        id: '4110',
        name: 'LIVE NATION MUSIC UK LTD',
        description: 'LIVE NATION MUSIC UK LTD / NTL / GBR'
      },
      {
        id: '4580',
        name: 'SMG T-A MANCHESTER ARENA',
        description: 'SMG T-A MANCHESTER ARENA / NTL / GBR'
      }
    ],
    info:
      'A max of 4 tickets per person and per household applies. Tickets in excess of 4 will be cancelled.',
    pleaseNote:
      'A max of 4 tickets per person and per household applies. Tickets in excess of 4 will be cancelled. Under 14s must be accompanied by an adult over 18. Over 14s only in standing area.',
    priceRanges: [
      {
        type: 'standard including fees',
        currency: 'GBP',
        min: 45.2,
        max: 101.45
      },
      {
        type: 'standard',
        currency: 'GBP',
        min: 39,
        max: 89
      }
    ],
    seatmap: {
      staticUrl: 'https://s1.ticketm.net/uk/tmimages/venue/maps/uk5/18324s.gif'
    },
    ticketLimit: {
      info:
        'Please note: There is a ticket Limit of 4 tickets per person and per credit card on this event'
    },
    _links: {
      self: {
        href: '/discovery/v2/events/G5vHZ4SnWTW2W?locale=en-us'
      },
      attractions: [
        {
          href: '/discovery/v2/attractions/K8vZ9174Za7?locale=en-us'
        }
      ],
      venues: [
        {
          href: '/discovery/v2/venues/KovZ9177A4f?locale=en-de'
        }
      ]
    },
    _embedded: {
      venues: [
        {
          name: 'Manchester Arena',
          type: 'venue',
          id: 'KovZ9177A4f',
          test: false,
          url:
            'https://www.ticketmaster.co.uk/Manchester-Arena-tickets-Manchester/venue/254336',
          locale: 'en-de',
          images: [
            {
              ratio: '4_3',
              url:
                'https://s1.ticketm.net/dam/v/876/0d2e6779-5d13-4f40-856b-edfe23e39876_305642_SOURCE.jpg',
              width: 1600,
              height: 1200,
              fallback: false,
              attribution: 'CC BY-SA 2.5 via wikipedia'
            },
            {
              ratio: '16_9',
              url: 'https://s1.ticketm.net/dbimages/2495v.jpg',
              width: 205,
              height: 115,
              fallback: false
            },
            {
              ratio: '4_3',
              url:
                'https://s1.ticketm.net/dam/v/876/0d2e6779-5d13-4f40-856b-edfe23e39876_305642_SOURCE.jpg',
              width: 1600,
              height: 1200,
              fallback: false,
              attribution: 'CC BY-SA 2.5 via wikipedia'
            }
          ],
          postalCode: 'M3 1AR',
          timezone: 'Europe/London',
          city: {
            name: 'Manchester'
          },
          country: {
            name: 'Great Britain',
            countryCode: 'GB'
          },
          address: {
            line1: 'Victoria Station, Hunts Bank'
          },
          location: {
            longitude: '-2.244066',
            latitude: '53.488164'
          },
          markets: [
            {
              name: 'All of United Kingdom',
              id: '201'
            },
            {
              name: 'Wales and North West',
              id: '205'
            },
            {
              name: 'North and North East',
              id: '206'
            }
          ],
          dmas: [
            {
              id: 601
            },
            {
              id: 605
            },
            {
              id: 606
            }
          ],
          boxOfficeInfo: {
            phoneNumberDetail: '0844 847 8000',
            openHoursDetail:
              'A temporary box office is situated on the Trinity Way corridor next to the Arena Car Park entrance. This box office will be available from 4pm only on a show day and will close 15 minutes after the main act has gone onstage. Opening times will change for Box Office depending on the time of the show. Please check https://www.manchester-arena.com/your-visit/ prior to attending the event to ensure you have the most current up to date information. More venue information http://www.manchester-arena.com/',
            acceptedPaymentDetail:
              'Ticket purchases can be made at this box office during opening hours. Cash or debit/credit is available.',
            willCallDetail:
              "Pre-booked tickets can be collected on the day of the show from an hour before door time, up to a half-hour after the event starts. Customers must take the credit card used to make the booking and the Ticketmaster reference number with them in order to collect the tickets. The cardholder will need to sign for the tickets. If you have any queries regarding box office collections, please contact Ticketmaster's customer services department."
          },
          parkingDetail:
            'The official NCP on-site multi-storey car park has a capacity of 1,000. In addition, approximately 7,000 recognised NCP spaces within 10 minutes walk serve the Manchester Arena.',
          accessibleSeatingDetail:
            'Provisions have been made to cater for wheelchair users. Lifts have been installed and it is possible to enter the arena by the access link between Trinity Way and Victoria Station. The Hunts Bank entrance is accessible via external lift and access from the car park and Victoria Station is possible via the City Room. The second raised tier of seating (BLK 201 and above) requires the negotiation of steep steps and so may not be suitable for the elderly, infirm or those with mobility problems. Seating at the front of the upper tier is 35ft (10m) from ground, rising to 70ft (20m) at the rear. Please call 0161 950 5229 for further details.',
          generalInfo: {
            generalRule:
              'What items are NOT allowed into the arena? Backpacks, holdalls, luggage, oversized bags and cushions. (Bags larger than 35cm x 40cm x 19cm will not be permitted) No video cameras, still cameras or recording devices. No food or drink allowed. The Manchester Arena is a non-smoking venue. In addition to these, a full list of items that are also not permitted into the arena can be reviewed here https://www.manchester-arena.com/your-visit/ along with anything else which we deem to ruin the enjoyment or viewing experience of others.',
            childRule:
              "Children under the age of two are admitted free, except for children's shows where the age limit is 12 months if unsure check event details when booking an individual show with Ticketmaster. Children without a ticket will not be allocated a seat and must sit on the parents lap. Seated Tickets: Under 14s must be accompanied by an adult. Standing Tickets: Strictly over 14s only in the standing area, admission will be refused to customers below this age."
          },
          upcomingEvents: {
            _total: 84,
            ticketmaster: 84
          },
          ada: {
            adaPhones: '0161 950 5229\n\n',
            adaCustomCopy:
              'To better accommodate your needs, the Manchester Arena has requested that all Accessible Ticketing requests be solicited only through their representatives. Please contact a Manchester Arena representative for further help with your ticket purchase.*   Advance ticket purchase may be required.\n\n* Box office information is subject to change.',
            adaHours:
              'Mon - Fri: 10.00am – 5.00pm\nSaturdays: 10.00am - 4.00pm\nSundays/Bank Hols: Closed\nOn Event Nights: \nWhen there is a performance, the Box Office will remain open until either approx 9.00pm or just before the main act take to the stage \nThe box office will also open from 2pm on Sundays and Bank holidays when there is a performance.\n'
          },
          _links: {
            self: {
              href: '/discovery/v2/venues/KovZ9177A4f?locale=en-de'
            }
          }
        }
      ]
    }
  }
];

describe('util', () => {
  it('should return an array', () => {
    expect(util([])).to.be.an('array');
  });
  it('should only contain desired keys', () => {
    expect(util(arr)[0]).to.have.all.keys(
      'name',
      'id',
      'url',
      'image',
      'date',
      'eventType',
      'genre'
    );
  });
  it('should not mutate input array', () => {
    const newArr = [
      {
        name: 'BILLIE EILISH: where do we go? world tour',
        type: 'event',
        id: 'G5vHZ4SnWTW2W',
        test: false,
        url:
          'https://www.ticketmaster.co.uk/billie-eilish-where-do-we-go-manchester-07-21-2020/event/1F00573ABDFFD3FD',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false
          }
        ],
        sales: {
          public: {
            startDateTime: '2019-10-04T08:00:00Z',
            startTBD: false,
            endDateTime: '2020-07-21T18:30:00Z'
          },
          presales: [
            {
              startDateTime: '2019-10-02T08:00:00Z',
              endDateTime: '2019-10-04T07:00:00Z',
              name: 'O2 Priority'
            },
            {
              startDateTime: '2019-10-02T08:00:00Z',
              endDateTime: '2019-10-04T07:00:00Z',
              name: 'Album Presale'
            },
            {
              startDateTime: '2019-10-03T08:00:00Z',
              endDateTime: '2019-10-04T07:00:00Z',
              name: 'Live Nation Presale'
            },
            {
              startDateTime: '2019-10-03T08:00:00Z',
              endDateTime: '2019-10-04T07:00:00Z',
              name: 'Venue Presale'
            }
          ]
        },
        dates: {
          start: {
            localDate: '2020-07-21',
            localTime: '19:30:00',
            dateTime: '2020-07-21T18:30:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false
          },
          timezone: 'Europe/London',
          status: {
            code: 'onsale'
          },
          spanMultipleDays: false
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music'
            },
            genre: {
              id: 'KnvZfZ7vAev',
              name: 'Pop'
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vk1t',
              name: 'Pop'
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined'
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined'
            },
            family: false
          }
        ],
        promoter: {
          id: '4110',
          name: 'LIVE NATION MUSIC UK LTD',
          description: 'LIVE NATION MUSIC UK LTD / NTL / GBR'
        },
        promoters: [
          {
            id: '4110',
            name: 'LIVE NATION MUSIC UK LTD',
            description: 'LIVE NATION MUSIC UK LTD / NTL / GBR'
          },
          {
            id: '4580',
            name: 'SMG T-A MANCHESTER ARENA',
            description: 'SMG T-A MANCHESTER ARENA / NTL / GBR'
          }
        ],
        info:
          'A max of 4 tickets per person and per household applies. Tickets in excess of 4 will be cancelled.',
        pleaseNote:
          'A max of 4 tickets per person and per household applies. Tickets in excess of 4 will be cancelled. Under 14s must be accompanied by an adult over 18. Over 14s only in standing area.',
        priceRanges: [
          {
            type: 'standard including fees',
            currency: 'GBP',
            min: 45.2,
            max: 101.45
          },
          {
            type: 'standard',
            currency: 'GBP',
            min: 39,
            max: 89
          }
        ],
        seatmap: {
          staticUrl:
            'https://s1.ticketm.net/uk/tmimages/venue/maps/uk5/18324s.gif'
        },
        ticketLimit: {
          info:
            'Please note: There is a ticket Limit of 4 tickets per person and per credit card on this event'
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5vHZ4SnWTW2W?locale=en-us'
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9174Za7?locale=en-us'
            }
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZ9177A4f?locale=en-de'
            }
          ]
        },
        _embedded: {
          venues: [
            {
              name: 'Manchester Arena',
              type: 'venue',
              id: 'KovZ9177A4f',
              test: false,
              url:
                'https://www.ticketmaster.co.uk/Manchester-Arena-tickets-Manchester/venue/254336',
              locale: 'en-de',
              images: [
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/v/876/0d2e6779-5d13-4f40-856b-edfe23e39876_305642_SOURCE.jpg',
                  width: 1600,
                  height: 1200,
                  fallback: false,
                  attribution: 'CC BY-SA 2.5 via wikipedia'
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/2495v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/v/876/0d2e6779-5d13-4f40-856b-edfe23e39876_305642_SOURCE.jpg',
                  width: 1600,
                  height: 1200,
                  fallback: false,
                  attribution: 'CC BY-SA 2.5 via wikipedia'
                }
              ],
              postalCode: 'M3 1AR',
              timezone: 'Europe/London',
              city: {
                name: 'Manchester'
              },
              country: {
                name: 'Great Britain',
                countryCode: 'GB'
              },
              address: {
                line1: 'Victoria Station, Hunts Bank'
              },
              location: {
                longitude: '-2.244066',
                latitude: '53.488164'
              },
              markets: [
                {
                  name: 'All of United Kingdom',
                  id: '201'
                },
                {
                  name: 'Wales and North West',
                  id: '205'
                },
                {
                  name: 'North and North East',
                  id: '206'
                }
              ],
              dmas: [
                {
                  id: 601
                },
                {
                  id: 605
                },
                {
                  id: 606
                }
              ],
              boxOfficeInfo: {
                phoneNumberDetail: '0844 847 8000',
                openHoursDetail:
                  'A temporary box office is situated on the Trinity Way corridor next to the Arena Car Park entrance. This box office will be available from 4pm only on a show day and will close 15 minutes after the main act has gone onstage. Opening times will change for Box Office depending on the time of the show. Please check https://www.manchester-arena.com/your-visit/ prior to attending the event to ensure you have the most current up to date information. More venue information http://www.manchester-arena.com/',
                acceptedPaymentDetail:
                  'Ticket purchases can be made at this box office during opening hours. Cash or debit/credit is available.',
                willCallDetail:
                  "Pre-booked tickets can be collected on the day of the show from an hour before door time, up to a half-hour after the event starts. Customers must take the credit card used to make the booking and the Ticketmaster reference number with them in order to collect the tickets. The cardholder will need to sign for the tickets. If you have any queries regarding box office collections, please contact Ticketmaster's customer services department."
              },
              parkingDetail:
                'The official NCP on-site multi-storey car park has a capacity of 1,000. In addition, approximately 7,000 recognised NCP spaces within 10 minutes walk serve the Manchester Arena.',
              accessibleSeatingDetail:
                'Provisions have been made to cater for wheelchair users. Lifts have been installed and it is possible to enter the arena by the access link between Trinity Way and Victoria Station. The Hunts Bank entrance is accessible via external lift and access from the car park and Victoria Station is possible via the City Room. The second raised tier of seating (BLK 201 and above) requires the negotiation of steep steps and so may not be suitable for the elderly, infirm or those with mobility problems. Seating at the front of the upper tier is 35ft (10m) from ground, rising to 70ft (20m) at the rear. Please call 0161 950 5229 for further details.',
              generalInfo: {
                generalRule:
                  'What items are NOT allowed into the arena? Backpacks, holdalls, luggage, oversized bags and cushions. (Bags larger than 35cm x 40cm x 19cm will not be permitted) No video cameras, still cameras or recording devices. No food or drink allowed. The Manchester Arena is a non-smoking venue. In addition to these, a full list of items that are also not permitted into the arena can be reviewed here https://www.manchester-arena.com/your-visit/ along with anything else which we deem to ruin the enjoyment or viewing experience of others.',
                childRule:
                  "Children under the age of two are admitted free, except for children's shows where the age limit is 12 months if unsure check event details when booking an individual show with Ticketmaster. Children without a ticket will not be allocated a seat and must sit on the parents lap. Seated Tickets: Under 14s must be accompanied by an adult. Standing Tickets: Strictly over 14s only in the standing area, admission will be refused to customers below this age."
              },
              upcomingEvents: {
                _total: 84,
                ticketmaster: 84
              },
              ada: {
                adaPhones: '0161 950 5229\n\n',
                adaCustomCopy:
                  'To better accommodate your needs, the Manchester Arena has requested that all Accessible Ticketing requests be solicited only through their representatives. Please contact a Manchester Arena representative for further help with your ticket purchase.*   Advance ticket purchase may be required.\n\n* Box office information is subject to change.',
                adaHours:
                  'Mon - Fri: 10.00am – 5.00pm\nSaturdays: 10.00am - 4.00pm\nSundays/Bank Hols: Closed\nOn Event Nights: \nWhen there is a performance, the Box Office will remain open until either approx 9.00pm or just before the main act take to the stage \nThe box office will also open from 2pm on Sundays and Bank holidays when there is a performance.\n'
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZ9177A4f?locale=en-de'
                }
              }
            }
          ]
        }
      }
    ];
    const newArrCopy = [
      {
        name: 'BILLIE EILISH: where do we go? world tour',
        type: 'event',
        id: 'G5vHZ4SnWTW2W',
        test: false,
        url:
          'https://www.ticketmaster.co.uk/billie-eilish-where-do-we-go-manchester-07-21-2020/event/1F00573ABDFFD3FD',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false
          },
          {
            ratio: '4_3',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false
          },
          {
            ratio: '3_2',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false
          },
          {
            ratio: '16_9',
            url:
              'https://s1.ticketm.net/dam/a/fb6/0014a9f8-ead6-435d-8509-df7c5ec52fb6_1167121_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false
          }
        ],
        sales: {
          public: {
            startDateTime: '2019-10-04T08:00:00Z',
            startTBD: false,
            endDateTime: '2020-07-21T18:30:00Z'
          },
          presales: [
            {
              startDateTime: '2019-10-02T08:00:00Z',
              endDateTime: '2019-10-04T07:00:00Z',
              name: 'O2 Priority'
            },
            {
              startDateTime: '2019-10-02T08:00:00Z',
              endDateTime: '2019-10-04T07:00:00Z',
              name: 'Album Presale'
            },
            {
              startDateTime: '2019-10-03T08:00:00Z',
              endDateTime: '2019-10-04T07:00:00Z',
              name: 'Live Nation Presale'
            },
            {
              startDateTime: '2019-10-03T08:00:00Z',
              endDateTime: '2019-10-04T07:00:00Z',
              name: 'Venue Presale'
            }
          ]
        },
        dates: {
          start: {
            localDate: '2020-07-21',
            localTime: '19:30:00',
            dateTime: '2020-07-21T18:30:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false
          },
          timezone: 'Europe/London',
          status: {
            code: 'onsale'
          },
          spanMultipleDays: false
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music'
            },
            genre: {
              id: 'KnvZfZ7vAev',
              name: 'Pop'
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vk1t',
              name: 'Pop'
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined'
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined'
            },
            family: false
          }
        ],
        promoter: {
          id: '4110',
          name: 'LIVE NATION MUSIC UK LTD',
          description: 'LIVE NATION MUSIC UK LTD / NTL / GBR'
        },
        promoters: [
          {
            id: '4110',
            name: 'LIVE NATION MUSIC UK LTD',
            description: 'LIVE NATION MUSIC UK LTD / NTL / GBR'
          },
          {
            id: '4580',
            name: 'SMG T-A MANCHESTER ARENA',
            description: 'SMG T-A MANCHESTER ARENA / NTL / GBR'
          }
        ],
        info:
          'A max of 4 tickets per person and per household applies. Tickets in excess of 4 will be cancelled.',
        pleaseNote:
          'A max of 4 tickets per person and per household applies. Tickets in excess of 4 will be cancelled. Under 14s must be accompanied by an adult over 18. Over 14s only in standing area.',
        priceRanges: [
          {
            type: 'standard including fees',
            currency: 'GBP',
            min: 45.2,
            max: 101.45
          },
          {
            type: 'standard',
            currency: 'GBP',
            min: 39,
            max: 89
          }
        ],
        seatmap: {
          staticUrl:
            'https://s1.ticketm.net/uk/tmimages/venue/maps/uk5/18324s.gif'
        },
        ticketLimit: {
          info:
            'Please note: There is a ticket Limit of 4 tickets per person and per credit card on this event'
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5vHZ4SnWTW2W?locale=en-us'
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9174Za7?locale=en-us'
            }
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZ9177A4f?locale=en-de'
            }
          ]
        },
        _embedded: {
          venues: [
            {
              name: 'Manchester Arena',
              type: 'venue',
              id: 'KovZ9177A4f',
              test: false,
              url:
                'https://www.ticketmaster.co.uk/Manchester-Arena-tickets-Manchester/venue/254336',
              locale: 'en-de',
              images: [
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/v/876/0d2e6779-5d13-4f40-856b-edfe23e39876_305642_SOURCE.jpg',
                  width: 1600,
                  height: 1200,
                  fallback: false,
                  attribution: 'CC BY-SA 2.5 via wikipedia'
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/2495v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false
                },
                {
                  ratio: '4_3',
                  url:
                    'https://s1.ticketm.net/dam/v/876/0d2e6779-5d13-4f40-856b-edfe23e39876_305642_SOURCE.jpg',
                  width: 1600,
                  height: 1200,
                  fallback: false,
                  attribution: 'CC BY-SA 2.5 via wikipedia'
                }
              ],
              postalCode: 'M3 1AR',
              timezone: 'Europe/London',
              city: {
                name: 'Manchester'
              },
              country: {
                name: 'Great Britain',
                countryCode: 'GB'
              },
              address: {
                line1: 'Victoria Station, Hunts Bank'
              },
              location: {
                longitude: '-2.244066',
                latitude: '53.488164'
              },
              markets: [
                {
                  name: 'All of United Kingdom',
                  id: '201'
                },
                {
                  name: 'Wales and North West',
                  id: '205'
                },
                {
                  name: 'North and North East',
                  id: '206'
                }
              ],
              dmas: [
                {
                  id: 601
                },
                {
                  id: 605
                },
                {
                  id: 606
                }
              ],
              boxOfficeInfo: {
                phoneNumberDetail: '0844 847 8000',
                openHoursDetail:
                  'A temporary box office is situated on the Trinity Way corridor next to the Arena Car Park entrance. This box office will be available from 4pm only on a show day and will close 15 minutes after the main act has gone onstage. Opening times will change for Box Office depending on the time of the show. Please check https://www.manchester-arena.com/your-visit/ prior to attending the event to ensure you have the most current up to date information. More venue information http://www.manchester-arena.com/',
                acceptedPaymentDetail:
                  'Ticket purchases can be made at this box office during opening hours. Cash or debit/credit is available.',
                willCallDetail:
                  "Pre-booked tickets can be collected on the day of the show from an hour before door time, up to a half-hour after the event starts. Customers must take the credit card used to make the booking and the Ticketmaster reference number with them in order to collect the tickets. The cardholder will need to sign for the tickets. If you have any queries regarding box office collections, please contact Ticketmaster's customer services department."
              },
              parkingDetail:
                'The official NCP on-site multi-storey car park has a capacity of 1,000. In addition, approximately 7,000 recognised NCP spaces within 10 minutes walk serve the Manchester Arena.',
              accessibleSeatingDetail:
                'Provisions have been made to cater for wheelchair users. Lifts have been installed and it is possible to enter the arena by the access link between Trinity Way and Victoria Station. The Hunts Bank entrance is accessible via external lift and access from the car park and Victoria Station is possible via the City Room. The second raised tier of seating (BLK 201 and above) requires the negotiation of steep steps and so may not be suitable for the elderly, infirm or those with mobility problems. Seating at the front of the upper tier is 35ft (10m) from ground, rising to 70ft (20m) at the rear. Please call 0161 950 5229 for further details.',
              generalInfo: {
                generalRule:
                  'What items are NOT allowed into the arena? Backpacks, holdalls, luggage, oversized bags and cushions. (Bags larger than 35cm x 40cm x 19cm will not be permitted) No video cameras, still cameras or recording devices. No food or drink allowed. The Manchester Arena is a non-smoking venue. In addition to these, a full list of items that are also not permitted into the arena can be reviewed here https://www.manchester-arena.com/your-visit/ along with anything else which we deem to ruin the enjoyment or viewing experience of others.',
                childRule:
                  "Children under the age of two are admitted free, except for children's shows where the age limit is 12 months if unsure check event details when booking an individual show with Ticketmaster. Children without a ticket will not be allocated a seat and must sit on the parents lap. Seated Tickets: Under 14s must be accompanied by an adult. Standing Tickets: Strictly over 14s only in the standing area, admission will be refused to customers below this age."
              },
              upcomingEvents: {
                _total: 84,
                ticketmaster: 84
              },
              ada: {
                adaPhones: '0161 950 5229\n\n',
                adaCustomCopy:
                  'To better accommodate your needs, the Manchester Arena has requested that all Accessible Ticketing requests be solicited only through their representatives. Please contact a Manchester Arena representative for further help with your ticket purchase.*   Advance ticket purchase may be required.\n\n* Box office information is subject to change.',
                adaHours:
                  'Mon - Fri: 10.00am – 5.00pm\nSaturdays: 10.00am - 4.00pm\nSundays/Bank Hols: Closed\nOn Event Nights: \nWhen there is a performance, the Box Office will remain open until either approx 9.00pm or just before the main act take to the stage \nThe box office will also open from 2pm on Sundays and Bank holidays when there is a performance.\n'
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZ9177A4f?locale=en-de'
                }
              }
            }
          ]
        }
      }
    ];
    util(newArr);
    expect(newArr).to.eql(newArrCopy);
  });
});
