import { Project, User, BlogPost, FeedPost, Skill, Experience } from '../types';
// Assuming '../types' exists and defines Project, User, BlogPost, FeedPost, Skill, Experience
export const mockUser: User = {
  id: '1',
  name: 'D. Jones Jebaraj',
  username: 'jonesjebaraj',
  avatar: '/projects/profileperson.png', // Update if a new avatar path is available
  bio: 'With 5 years of experience in UI/UX and graphic design, I focus on delivering seamless user experiences and eye-catching visuals. I also contribute to digital marketing projects and create content that resonates with audiences.',
  location: 'Sivakasi, India',
  website: '', // No website provided
  email: 'selfdesigner8@gmail.com',
  social: {
    linkedin: 'jones-jebaraj',
    instagram: 'creativecrap_', // Added based on PDF
    // Removed dribbble, behance, twitter as not mentioned; adjust if type requires them
  },
  followers: 12500,
  following: 890,
  projects: 47,
  verified: true
};

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Mediquince Application',
    category: 'UI/UX Design',
    description: 'Desktop and mobile application for medical intelligence with a user-friendly and responsive experience.',
    tools: ['Figma', 'Adobe XD', 'React.js'],
    thumbnail: '/projects/w-mediquince.jpg', // Updated thumbnail name
    images: ['/projects/w-mediquince.jpg'],
    views: 3240,
    likes: 287,
    date: '2025-02-01', // Updated to reflect current year and ongoing work
    featured: true,
    problem: 'Medical businesses needed a comprehensive platform with intuitive design for cross-platform use.',
    solution: 'Designed a responsive UI/UX for Mediquince, ensuring usability across desktop and mobile.',
    process: 'Conducted stakeholder interviews, wireframed concepts, and collaborated with developers using React.js.',
    results: 'Improved user engagement and ensured seamless implementation.'
  },
  {
    id: '2',
    title: 'Aiimtech Tech Solutions',
    category: 'UI/UX Design',
    description: 'AI and technology solutions platform with modern design and intuitive user interface.',
    tools: ['Adobe Illustrator', 'Photoshop'],
    thumbnail: '/projects/w-aiimtech.jpg',
    images: ['/projects/w-aiimtech.jpg'],
    views: 1560,
    likes: 124,
    date: '2025-01-05',
  },
  // Add more projects as needed, updating dates to 2024-2025
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Designing Responsive UI/UX for Mediquince',
    category: 'Design',
    summary: 'A deep dive into designing a responsive UI/UX for a medical application, reducing user drop-off.',
    content: `# Designing Responsive UI/UX for Mediquince\n\nLed the complete UI/UX design process for Mediquince, ensuring a user-friendly experience across platforms. Utilized Figma and React.js for seamless collaboration with developers.\n\n## Results\n- Improved user engagement\n- Reduced drop-off rates`,
    author: 'D. Jones Jebaraj',
    date: '2025-02-15',
    readTime: '6 min read',
    thumbnail: 'https://pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  // Add more blog posts as needed
];

export const mockFeedPosts: FeedPost[] = [
  {
    id: '1',
    type: 'image',
    content: 'Daily UI #17 – Calculator App. Exploring neumorphism design trends in Indian context.',
    image: 'https://pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 124,
    comments: 18,
    date: '2025-02-10',
  },
  // Add more feed posts as needed
];

export const mockSkills: Skill[] = [
  { name: 'Photoshop', level: 95, icon: 'Image' },
  { name: 'Illustrator', level: 90, icon: 'PenTool' },
  { name: 'Figma', level: 98, icon: 'Figma' },
  { name: 'Adobe XD', level: 85, icon: 'Box' },
  { name: 'Premiere Pro', level: 80, icon: 'Video' },
  { name: 'After Effects', level: 75, icon: 'Film' },
  { name: 'React.js', level: 70, icon: 'Code' },
  { name: 'UI/UX Design', level: 92, icon: 'Palette' },
];

export const mockExperience: Experience[] = [
  {
    company: 'Aiimtech',
    role: 'UI/UX Graphic Design',
    period: 'Feb 2020 - Present',
    description: 'Led the complete UI/UX design process for Mediquince, a desktop and mobile application product, ensuring a user-friendly and responsive experience. Handled graphic design tasks including marketing materials and Instagram posts. Designed UI/UX for service-based projects. Created and managed website content. Collaborated with developers using React.js.',
  },
  {
    company: 'Max Expert, Madurai',
    role: 'Graphic Design & UI Design',
    period: 'Jan 2018 - Mar 2019',
    description: 'Worked on graphic design and UI design projects.',
  },
  {
    company: 'The American College, Madurai',
    role: 'BSc Visual Communication',
    period: 'Jun 2016 - Mar 2019',
    description: 'Studied Visual Communication.',
  }
];