import { Comment } from './Comment';
export class UserStory {
  id: number;
  title: string;
  description: string;
  summary: string;
  priority: string;
  comments: Comment[];
  storyPoint: number;
  status: string;
  sprintId: number;
}
