import { Sprint } from './model/Sprint';

export const SPRINTS: Sprint[] = [
  {
    id: 1,
    name: 'YYYY-QX-X/6',
    description: 'Collecting feedback from stalkholders',
    reviewDetails: '',
    retroDetails: '',
    startDate: '05/21/2019',
    endDate: '05/25/2019',
    userStories: [
      {
        id: 1,
        title: 'User Story',
        description: 'User story 1',
        summary: '',
        priority: 'Low',
        comments: ['comment 1', 'comment 2'],
        storyPoint: 3,
        status: 'TODO',
        sprintId: 1
      },
      {
        id: 2,
        title: 'User Story',
        description: 'User story 2',
        summary: '',
        priority: 'Low',
        comments: ['comment 1', 'comment 2', 'comment 3'],
        storyPoint: 15,
        status: 'TODO',
        sprintId: 1
      }
    ],
    sprintSummary: 'We are collection feedback from stalkholders',
    status: 'Working'
  },

  {
    id: 2,
    name: 'ZUHD-TL-E/4',
    description: 'Sed ut perspiciatis unde antium doloremque',
    reviewDetails: 'ed ut perspiciatis',
    retroDetails: 'ed ut perspiciatis',
    startDate: '05/27/2019',
    endDate: '05/31/2019',
    userStories: [
      {
        id: 3,
        title: 'User Story',
        description: 'User story 1',
        summary: '',
        priority: 'Low',
        comments: ['comment 1'],
        storyPoint: 8,
        status: 'TODO',
        sprintId: 2
      },
      {
        id: 4,
        title: 'User Story',
        description: 'User story 2',
        summary: '',
        priority: 'Low',
        comments: [],
        storyPoint: 3,
        status: 'TODO',
        sprintId: 2
      },
      {
        id: 5,
        title: 'User Story',
        description: 'User story 3',
        summary: '',
        priority: 'Low',
        comments: [
          'comment 1',
          'comment 2',
          'comment 3',
          'comment 4',
          'comment 5'
        ],
        storyPoint: 55,
        status: 'TODO',
        sprintId: 2
      }
    ],
    sprintSummary: 'adipisci velit, sed quia non numqua incidunt',
    status: 'Working'
  },

  {
    id: 3,
    name: 'IOHD-RL-R/4',
    description: 'Sed ut doloremque',
    reviewDetails: 'ed ut perspiciatis',
    retroDetails: 'edpiciatis',
    startDate: '05/27/2019',
    endDate: '05/31/2019',
    userStories: [
      {
        id: 6,
        title: 'User Story',
        description: 'User story 1',
        summary: '',
        priority: 'Low',
        comments: ['comment 1'],
        storyPoint: 8,
        status: 'TODO',
        sprintId: 3
      },
      {
        id: 7,
        title: 'User Story',
        description: 'User story 2',
        summary: '',
        priority: 'Low',
        comments: [],
        storyPoint: 3,
        status: 'TODO',
        sprintId: 3
      },
      {
        id: 8,
        title: 'User Story',
        description: 'User story 3',
        summary: '',
        priority: 'Low',
        comments: [
          'comment 1',
          'comment 2',
          'comment 3',
          'comment 4',
          'comment 5'
        ],
        storyPoint: 55,
        status: 'completed',
        sprintId: 3
      }
    ],
    sprintSummary: 'adipisci velit, sed quia non numqua incidunt',
    status: 'Working'
  },

  {
    id: 4,
    name: 'YWYV-VP-B/3',
    description: 'aliquid ex ea commodi consequatur',
    reviewDetails: 'amet, consectetur',
    retroDetails: 'amet, consectetur',
    startDate: '06/05/2019',
    endDate: '06/10/2019',
    userStories: [
      {
        id: 9,
        title: 'User Story',
        description: 'User story 3',
        summary: '',
        priority: 'Low',
        comments: ['comment 1'],
        storyPoint: 8,
        status: 'completed',
        sprintId: 4
      },
      {
        id: 10,
        title: 'User Story',
        description: 'User story 4',
        summary: '',
        priority: 'Low',
        comments: [],
        storyPoint: 3,
        status: 'TODO',
        sprintId: 4
      },

      {
        id: 11,
        title: 'User Story',
        description: 'User story 5',
        summary: '',
        priority: 'Low',
        comments: [
          'comment 1',
          'comment 2',
          'comment 3',
          'comment 4',
          'comment 5'
        ],
        storyPoint: 55,
        status: 'completed',
        sprintId: 4
      }
    ],
    sprintSummary: 'molestiae consequatur, vel illum',
    status: 'COMPLETED'
  },

  {
    id: 5,
    name: 'CODI-CJ-R/8',
    description: 'Sum iure reprehenderit qui in',
    reviewDetails: 'luptas nulla pariatur',
    retroDetails: 'luptas nulla pariatur',
    startDate: '06/15/2019',
    endDate: '06/20/2019',
    userStories: [
      {
        id: 12,
        title: 'User Story',
        description: 'User story 3',
        summary: '',
        priority: 'Low',
        comments: ['comment 1'],
        storyPoint: 8,
        status: 'completed',
        sprintId: 5
      },
      {
        id: 13,
        title: 'User Story',
        description: 'User story 4',
        summary: '',
        priority: 'Low',
        comments: [],
        storyPoint: 3,
        status: 'TODO',
        sprintId: 5
      },
      {
        id: 14,
        title: 'User Story',
        description: 'User story 5',
        summary: '',
        priority: 'Low',
        comments: [
          'comment 1',
          'comment 2',
          'comment 3',
          'comment 4',
          'comment 5'
        ],
        storyPoint: 55,
        status: 'completed',
        sprintId: 5
      }
    ],
    sprintSummary: 'quae ab illo inventore veritatis',
    status: 'COMPLETED'
  },
  {
    id: 6,
    name: 'YWYV-VP-B/3',
    description: 'aliquid ex ea commodi consequatur',
    reviewDetails: 'amet, consectetur',
    retroDetails: 'amet, consectetur',
    startDate: '06/05/2019',
    endDate: '06/10/2019',
    userStories: [
      {
        id: 15,
        title: 'User Story',
        description: 'User story 3',
        summary: '',
        priority: 'Low',
        comments: ['comment 1'],
        storyPoint: 8,
        status: 'TODO',
        sprintId: 6
      },
      {
        id: 16,
        title: 'User Story',
        description: 'User story 4',
        summary: '',
        priority: 'Low',
        comments: [],
        storyPoint: 3,
        status: 'TODO',
        sprintId: 6
      },
      {
        id: 17,
        title: 'User Story',
        description: 'User story 5',
        summary: '',
        priority: 'Low',
        comments: [
          'comment 1',
          'comment 2',
          'comment 3',
          'comment 4',
          'comment 5'
        ],
        storyPoint: 55,
        status: 'completed',
        sprintId: 6
      }
    ],
    sprintSummary: 'molestiae consequatur, vel illum',
    status: 'COMPLETED'
  },

  {
    id: 7,
    name: 'CODI-CJ-R/8',
    description: 'Sum iure reprehenderit qui in',
    reviewDetails: 'luptas nulla pariatur',
    retroDetails: 'luptas nulla pariatur',
    startDate: '06/15/2019',
    endDate: '06/20/2019',
    userStories: [
      {
        id: 18,
        title: 'User Story',
        description: 'User story 3',
        summary: '',
        priority: 'Low',
        comments: ['comment 1'],
        storyPoint: 8,
        status: 'TODO',
        sprintId: 7
      },
      {
        id: 19,
        title: 'User Story',
        description: 'User story 4',
        summary: '',
        priority: 'Low',
        comments: [],
        storyPoint: 3,
        status: 'Completed',
        sprintId: 7
      },
      {
        id: 20,
        title: 'User Story',
        description: 'User story 5',
        summary: '',
        priority: 'Low',
        comments: [
          'comment 1',
          'comment 2',
          'comment 3',
          'comment 4',
          'comment 5'
        ],
        storyPoint: 55,
        status: 'TODO',
        sprintId: 7
      }
    ],
    sprintSummary: 'quae ab illo inventore veritatis',
    status: 'COMPLETED'
  }
];
