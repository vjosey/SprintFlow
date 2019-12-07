import { Sprint } from './sprint';
import { UserStory } from './UserStory';

export const SPRINTS: Sprint[] = [
    { id: 1,
    name: 'YYYY-QX-X/6', description: 'Collecting feedback from stalkholders',
    reviewDetails: '', retroDetails: '', startDate: new Date(), endDate: new Date(),
    userStories: [], sprintSummary: 'We are collection feedback from stalkholders' },

    { id: 2,
    name: 'ZUHD-TL-E/4', description: 'Sed ut perspiciatis unde antium doloremque',
    reviewDetails: 'ed ut perspiciatis', retroDetails: 'ed ut perspiciatis', startDate: new Date(), endDate: new Date(),
    userStories: [], sprintSummary: 'adipisci velit, sed quia non numqua incidunt' },

    { id: 3,
      name: 'YWYV-VP-B/3', description: 'aliquid ex ea commodi consequatur',
      reviewDetails: 'amet, consectetur', retroDetails: 'amet, consectetur', startDate: new Date(), endDate: new Date(),
      userStories: [], sprintSummary: 'molestiae consequatur, vel illum' },

    { id: 4,
      name: 'CODI-CJ-R/8', description: 'Sum iure reprehenderit qui in',
      reviewDetails: 'luptas nulla pariatur', retroDetails: 'luptas nulla pariatur', startDate: new Date(), endDate: new Date(),
      userStories: [], sprintSummary: 'quae ab illo inventore veritatis' }
];
