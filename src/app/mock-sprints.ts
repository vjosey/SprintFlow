import { Sprint } from './model/Sprint';


export const SPRINTS: Sprint[] = [
    { id: 1,
    name: 'YYYY-QX-X/6', description: 'Collecting feedback from stalkholders',
    reviewDetails: '', retroDetails: '', startDate: new Date(), endDate: new Date(),
    userStories: [], sprintSummary: 'We are collection feedback from stalkholders' , status: 'ACTIVE' },

    { id: 2,
    name: 'ZUHD-TL-E/4', description: 'Sed ut perspiciatis unde antium doloremque',
    reviewDetails: 'ed ut perspiciatis', retroDetails: 'ed ut perspiciatis', startDate: new Date(), endDate: new Date(),
    userStories: [], sprintSummary: 'adipisci velit, sed quia non numqua incidunt' , status: 'ACTIVE' },

    { id: 3,
      name: 'YWYV-VP-B/3', description: 'aliquid ex ea commodi consequatur',
      reviewDetails: 'amet, consectetur', retroDetails: 'amet, consectetur', startDate: new Date(), endDate: new Date(),
      userStories: [], sprintSummary: 'molestiae consequatur, vel illum' , status: 'COMPLETED' },

    { id: 4,
      name: 'CODI-CJ-R/8', description: 'Sum iure reprehenderit qui in',
      reviewDetails: 'luptas nulla pariatur', retroDetails: 'luptas nulla pariatur', startDate: new Date(), endDate: new Date(),
      userStories: [], sprintSummary: 'quae ab illo inventore veritatis', status: 'COMPLETED' }
];
