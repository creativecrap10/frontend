Here's the fixed version with all missing closing brackets and proper formatting:

```typescript
import { Project, User, BlogPost, FeedPost, Skill, Experience } from '../types';

[Previous content remains unchanged until the mockFeedPosts array]

export const mockFeedPosts: FeedPost[] = [
  {
    id: '1',
    type: 'image',
    content: 'Daily UI #17 – Calculator App. Exploring neumorphism design trends.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 124,
    comments: 18,
    date: '2024-01-22'
  },
  {
    id: '2',
    type: 'text',
    content: 'Dark vs Light Mode: Which do you prefer? I\'ve been experimenting with both and found that context matters more than personal preference. Dark mode for focus sessions, light mode for detailed work.',
    likes: 89,
    comments: 23,
    date: '2024-01-21'
  },
  {
    id: '3',
    type: 'image',
    content: 'New Brand Logo Sketch for a Pet Store. Going for playful yet professional.',
    image: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 156,
    comments: 12,
    date: '2024-01-20'
  },
  {
    id: '4',
    type: 'text',
    content: 'Just finished a 3-hour design session. There\'s something magical about getting into the flow state. What helps you get into your creative zone?',
    likes: 67,
    comments: 31,
    date: '2024-01-19'
  }
];

export const mockSkills: Skill[] = [
  { name: 'UI Design', level: 95, icon: 'Palette' },
  { name: 'UX Research', level: 88, icon: 'Search' },
  { name: 'Prototyping', level: 92, icon: 'Zap' },
  { name: 'Figma', level: 98, icon: 'Figma' },
  { name: 'Adobe XD', level: 85, icon: 'Box' },
  { name: 'Illustrator', level: 90, icon: 'PenTool' },
  { name: 'Photoshop', level: 87, icon: 'Image' },
  { name: 'Principle', level: 80, icon: 'Play' }
];

export const mockExperience: Experience[] = [
  {
    company: 'TechFlow Inc.',
    role: 'Senior UI/UX Designer',
    period: '2022 - Present',
    description: 'Leading design for multiple SaaS products, managing a team of 3 designers, and establishing design systems.'
  },
  {
    company: 'StartupLab',
    role: 'Product Designer',
    period: '2020 - 2022',
    description: 'Designed mobile apps and web platforms for early-stage startups, focusing on user research and rapid prototyping.'
  },
  {
    company: 'Creative Agency',
    role: 'Junior Designer',
    period: '2019 - 2020',
    description: 'Worked on branding projects, print design, and digital marketing materials for various clients.'
  }
];
```