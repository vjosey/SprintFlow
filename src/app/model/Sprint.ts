import { UserStory } from './UserStory';

export class Sprint {
  id: number;
  name: string;
  description: string;
  reviewDetails: string;
  retroDetails: string;
  startDate: string;
  endDate: string;
  dateCreated: string;
  userStories: UserStory[];
  sprintSummary: string;
  status: string;
  timeStamp: Date;

}
