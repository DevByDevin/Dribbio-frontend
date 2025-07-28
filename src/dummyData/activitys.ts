import { Activity } from '../types/activity';

export const dummyActivitys: Activity[] = [
  {
    id: '1',
    title: 'Activity 1',
    description: 'Description for Activity 1',
    date: new Date('2023-01-01'),
    type: 'pickup',
    location: 'Location 1',
    participants: ['User1', 'User2'],
    status: 'active',
  },
  {
    id: '2',
    title: 'Activity 2',
    description: 'Description for Activity 2',
    date: new Date('2023-02-01'),
    type: 'training',
    participants: ['User3', 'User4'],
    location: 'Location 2',
    status: 'inactive',
  },
  {
    id: '3',
    title: 'Activity 3',
    description: 'Description for Activity 3',
    date: new Date('2023-03-01'),
    type: 'camp',
    participants: ['User5', 'User6'],
    location: 'Location 3',
    status: 'active',
  },
];
