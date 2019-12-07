import { UserStory } from './UserStory';

export class Sprint {
  id: number;
  name: string;
  description: string;
  reviewDetails: string;
  retroDetails: string;
  startDate: Date;
  endDate: Date;
  userStories: UserStory[];
  sprintSummary: string;
  status: string;
}
