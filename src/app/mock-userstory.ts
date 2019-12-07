import { UserStory } from './model/UserStory';

export const USERSTORIES: UserStory [] = [
  { id: 1,
    title: 'User Story',
    description: 'User story 1',
    priority: 3,
    comments: ['comment 1', 'comment 2'],
    storyPoint: 3,
    status: 'TODO',
    sprintId: 1
  },
  { id: 2,
    title: 'User Story',
    description: 'User story 2',
    priority: 1,
    comments: ['comment 1', 'comment 2', 'comment 3'],
    storyPoint: 15 ,
    status: 'TODO',
    sprintId: 1
  },
  { id: 3,
    title: 'User Story',
    description: 'User story 3',
    priority: 5,
    comments: ['comment 1'],
    storyPoint: 8 ,
    status: 'TODO',
    sprintId: 2
  },
  { id: 4,
    title: 'User Story',
    description: 'User story 4',
    priority: 2,
    comments: [],
    storyPoint: 3,
    status: 'TODO',
    sprintId: 2
   },
  { id: 5,
    title: 'User Story',
    description: 'User story 5',
    priority: 1,
    comments: ['comment 1', 'comment 2', 'comment 3', 'comment 4', 'comment 5'],
    storyPoint: 55,
  status: 'TODO',
  sprintId: 2}
];
