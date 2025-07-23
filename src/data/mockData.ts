import { Project, User, BlogPost, FeedPost, Skill, Experience } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Tom Anderson',
  username: 'tomanderson',
  avatar: '/images/profileperson.png',
  bio: 'UI/UX Designer passionate about creating intuitive digital experiences. I love turning complex problems into simple, beautiful solutions.',
  location: 'San Francisco, CA',
  website: 'tomanderson.design',
  email: 'hello@tomanderson.design',
  social: {
    dribbble: 'tomanderson',
    behance: 'tomanderson',
    linkedin: 'tom-anderson-design',
    twitter: 'tomandersonux'
  },
  followers: 12500,
  following: 890,
  images: 47,
  verified: true
};

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Bameletrics Analytics Dashboard',
    category: 'Web Design',
    description: 'Comprehensive analytics dashboard with data visualization and reporting features for business intelligence.',
    tools: ['Figma', 'Adobe XD', 'Principle'],
    thumbnail: '/images/w-bameletrics.jpg',
    images: [
      '/images/w-bameletrics.jpg'
    ],
    views: 3240,
    likes: 287,
    date: '2024-01-15',
    featured: true,
    problem: 'Businesses needed a comprehensive analytics platform that could handle complex data visualization while maintaining simplicity for everyday users.',
    solution: 'Created an intuitive dashboard with progressive disclosure, smart data filtering, and customizable widgets that adapt to user behavior patterns.',
    process: 'Started with stakeholder interviews, analyzed existing analytics tools, wireframed multiple dashboard concepts, and conducted extensive usability testing.',
    results: 'Increased user engagement by 40% and reduced data analysis time by 60%. The design system was adopted across multiple business intelligence products.'
  },
  {
    id: '2',
    title: 'DJS Technologies Platform',
    category: 'Web Design',
    description: 'Modern technology platform with clean interface design and seamless user experience for tech solutions.',
    tools: ['Figma', 'Adobe XD'],
    thumbnail: '/images/w-djstechnologies.jpg',
    images: [
      '/images/w-djstechnologies.jpg'
    ],
    views: 2890,
    likes: 203,
    date: '2024-01-10',
    problem: 'Technology companies needed a modern platform that could showcase complex services while maintaining user-friendly navigation.',
    solution: 'Designed a clean, professional interface focusing on service discovery and clear information architecture.',
    process: 'Analyzed competitor platforms, created user journey maps, designed wireframes, and tested prototypes with target users.',
    results: 'Improved user engagement by 35% and increased service inquiries by 45%.'
  },
  {
    id: '3',
    title: 'AIIM Tech Solutions',
    category: 'Web Design',
    description: 'AI and technology solutions platform with modern design and intuitive user interface.',
    tools: ['Adobe Illustrator', 'Photoshop'],
    thumbnail: '/images/w-aiimtech.jpg',
    images: [
      '/images/w-aiimtech.jpg'
    ],
    views: 1560,
    likes: 124,
    date: '2024-01-05',
  },
  {
    id: '4',
    title: 'WFS Financial Services',
    category: 'Web Design',
    description: 'Professional financial services website with secure design and comprehensive service offerings.',
    tools: ['Figma', 'Principle'],
    thumbnail: '/images/w-wfs.jpg',
    images: [
      '/images/w-wfs.jpg'
    ],
    views: 2100,
    likes: 189,
    date: '2023-12-28',
  },
  {
    id: '5',
    title: 'Cracker Theme Design',
    category: 'Web Design',
    description: 'Creative theme design with modern aesthetics and responsive layout for digital platforms.',
    tools: ['Adobe InDesign', 'Illustrator'],
    thumbnail: '/images/w-crackertheme.jpg',
    images: [
      '/images/w-crackertheme.jpg'
    ],
    views: 890,
    likes: 67,
    date: '2023-12-20',
  },
  {
    id: '6',
    title: 'WFS Domestic Services',
    category: 'Web Design',
    description: 'Domestic services platform with user-friendly interface and comprehensive service management.',
    tools: ['Figma', 'Adobe XD'],
    thumbnail: '/images/w-wfsdomestic.jpg',
    images: [
      '/images/w-wfsdomestic.jpg'
    ],
    views: 2780,
    likes: 234,
    date: '2023-12-15',
  },
  {
    id: '7',
    title: 'IIR Research Platform',
    category: 'Web Design',
    description: 'Research and information platform with clean design and advanced search capabilities.',
    tools: ['Figma', 'Principle', 'Adobe XD'],
    thumbnail: '/images/w-iir.jpg',
    images: [
      '/images/w-iir.jpg'
    ],
    views: 3450,
    likes: 298,
    date: '2023-12-10',
    featured: true,
    problem: 'Research institutions needed a platform that could handle complex data while providing intuitive search and discovery features.',
    solution: 'Developed a clean, organized interface with advanced filtering and search capabilities for efficient information retrieval.',
    process: 'Conducted user interviews with researchers, mapped information architecture, created wireframes, and tested search functionality.',
    results: 'Reduced research time by 45% and increased user satisfaction by 60%.'
  },
  {
    id: '8',
    title: 'Bameletrics Pro Dashboard',
    category: 'Web Design',
    description: 'Advanced analytics dashboard with enhanced features and professional data visualization.',
    tools: ['Figma', 'After Effects'],
    thumbnail: '/images/w-bameletrics.jpg',
    images: [
      '/images/w-bameletrics.jpg'
    ],
    views: 2190,
    likes: 187,
    date: '2023-12-05',
  },
  {
    id: '9',
    title: 'DJS Tech Solutions Hub',
    category: 'Web Design',
    description: 'Comprehensive technology solutions hub with modern interface and service integration.',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    thumbnail: '/images/w-djstechnologies.jpg',
    images: [
      '/images/w-djstechnologies.jpg'
    ],
    views: 1680,
    likes: 142,
    date: '2023-11-28',
  },
  {
    id: '10',
    title: 'AIIM Technology Platform',
    category: 'Web Design',
    description: 'AI-powered technology platform with intelligent features and modern user experience.',
    tools: ['Figma', 'Adobe XD', 'Sketch'],
    thumbnail: '/images/w-aiimtech.jpg',
    images: [
      '/images/w-aiimtech.jpg'
    ],
    views: 2890,
    likes: 245,
    date: '2023-11-20',
  },
  {
    id: '11',
    title: 'WFS Enterprise Solutions',
    category: 'Web Design',
    description: 'Enterprise-level financial solutions platform with comprehensive service management.',
    tools: ['Figma', 'Principle'],
    thumbnail: '/images/w-wfs.jpg',
    images: [
      '/images/w-wfs.jpg'
    ],
    views: 3120,
    likes: 276,
    date: '2023-11-15',
    featured: true,
  },
  {
    id: '12',
    title: 'Cracker Creative Platform',
    category: 'Web Design',
    description: 'Creative platform design with innovative layout and engaging user interface elements.',
    tools: ['Figma', 'Adobe XD'],
    thumbnail: '/images/w-crackertheme.jpg',
    images: [
      '/images/w-crackertheme.jpg'
    ],
    views: 2340,
    likes: 198,
    date: '2023-11-08',
  },
  {
    id: '13',
    title: 'WFS Domestic Solutions',
    category: 'Web Design',
    description: 'Domestic solutions platform with streamlined interface and service optimization.',
    tools: ['Figma', 'Principle', 'Adobe XD'],
    thumbnail: '/images/w-wfsdomestic.jpg',
    images: [
      '/images/w-wfsdomestic.jpg'
    ],
    views: 2750,
    likes: 231,
    date: '2023-11-01',
  },
  {
    id: '14',
    title: 'IIR Information Systems',
    category: 'Web Design',
    description: 'Information research system with advanced data management and user-friendly interface.',
    tools: ['Figma', 'Adobe XD'],
    thumbnail: '/images/w-iir.jpg',
    images: [
      '/images/w-iir.jpg'
    ],
    views: 3890,
    likes: 342,
    date: '2023-10-25',
  },
  {
    id: '15',
    title: 'Bameletrics Analytics Pro',
    category: 'Web Design',
    description: 'Professional analytics platform with advanced reporting and data visualization capabilities.',
    tools: ['Figma', 'Sketch'],
    thumbnail: '/images/w-bameletrics.jpg',
    images: [
      '/images/w-bameletrics.jpg'
    ],
    views: 2180,
    likes: 189,
    date: '2023-10-18',
  },
  {
    id: '16',
    title: 'DJS Technologies Suite',
    category: 'Web Design',
    description: 'Complete technology suite with integrated services and modern design approach.',
    tools: ['Figma', 'Principle'],
    thumbnail: '/images/w-djstechnologies.jpg',
    images: [
      '/images/w-djstechnologies.jpg'
    ],
    views: 4120,
    likes: 378,
    date: '2023-10-12',
    featured: true,
  },
  {
    id: '17',
    title: 'AIIM Advanced Systems',
    category: 'Web Design',
    description: 'Advanced AI systems platform with cutting-edge design and intelligent user interactions.',
    tools: ['Figma', 'After Effects'],
    thumbnail: '/images/w-aiimtech.jpg',
    images: [
      '/images/w-aiimtech.jpg'
    ],
    views: 1890,
    likes: 156,
    date: '2023-10-05',
  },
  {
    id: '18',
    title: 'WFS Professional Services',
    category: 'Web Design',
    description: 'Professional financial services platform with comprehensive client management and service delivery.',
    tools: ['Figma', 'Adobe XD'],
    thumbnail: '/images/w-wfs.jpg',
    images: [
      '/images/w-wfs.jpg'
    ],
    views: 2560,
    likes: 218,
    date: '2023-09-28',
  },
  {
    id: '19',
    title: 'Cracker Design Studio',
    category: 'Web Design',
    description: 'Creative design studio platform with portfolio showcase and modern aesthetic appeal.',
    tools: ['Figma', 'Webflow'],
    thumbnail: '/images/w-crackertheme.jpg',
    images: [
      '/images/w-crackertheme.jpg'
    ],
    views: 1720,
    likes: 143,
    date: '2023-09-20',
  },
  {
    id: '20',
    title: 'WFS Domestic Management',
    category: 'Web Design',
    description: 'Domestic service management platform with efficient workflow and user-centered design.',
    tools: ['Figma', 'Adobe XD', 'Sketch'],
    thumbnail: '/images/w-wfsdomestic.jpg',
    images: [
      '/images/w-wfsdomestic.jpg'
    ],
    views: 3780,
    likes: 324,
    date: '2023-09-15',
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How I Designed a Better Booking Flow for a Travel App',
    category: 'Design',
    summary: 'A deep dive into redesigning a complex booking process that reduced user drop-off by 40%.',
    content: `# How I Designed a Better Booking Flow for a Travel App

## The Challenge

When I was approached to redesign the booking flow for a travel app, the main issue was clear: users were abandoning their bookings at an alarming rate of 65%. The existing flow was confusing, lengthy, and didn't provide clear feedback to users about their progress.

## Research Phase

I started by analyzing user behavior through heatmaps and session recordings. What I discovered was eye-opening:

- Users were confused by the number of steps
- Form validation was unclear
- Progress indication was missing
- Too many options were presented at once

## The Solution

I redesigned the entire flow with these key principles:

### 1. Progressive Disclosure
Instead of showing all options at once, I broke down the booking process into digestible chunks.

### 2. Clear Progress Indication
Added a visual progress bar that showed users exactly where they were in the process.

### 3. Smart Defaults
Pre-filled forms with intelligent defaults based on user behavior and preferences.

### 4. Real-time Validation
Implemented instant feedback for form fields to prevent errors at submission.

## Results

The new design achieved remarkable results:
- 40% reduction in booking abandonment
- 25% increase in completed bookings
- 60% improvement in user satisfaction scores

## Key Takeaways

1. Always validate your assumptions with real user data
2. Simplicity trumps feature richness
3. Clear communication is crucial in complex flows
4. Test early and iterate often`,
    author: 'Tom Anderson',
    date: '2024-01-20',
    readTime: '8 min read',
    thumbnail: 'https:/.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '2',
    title: '5 UI Tricks That Instantly Improve Any App',
    category: 'Design',
    summary: 'Simple but effective UI techniques that can dramatically improve user experience.',
    content: `# 5 UI Tricks That Instantly Improve Any App

These are battle-tested techniques I've used across dozens of images...`,
    author: 'Tom Anderson',
    date: '2024-01-15',
    readTime: '5 min read',
    thumbnail: 'https:/.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Behind My Logo Design Process',
    category: 'Design',
    summary: 'A step-by-step breakdown of how I approach logo design from concept to final delivery.',
    content: `# Behind My Logo Design Process

Logo design is more than just making something look pretty...`,
    author: 'Tom Anderson',
    date: '2024-01-10',
    readTime: '6 min read',
    thumbnail: 'https:/.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'The Future of Gaming: VR and Beyond',
    category: 'Gaming',
    summary: 'Exploring how virtual reality and emerging technologies are reshaping the gaming landscape.',
    content: `# The Future of Gaming: VR and Beyond

## The Current State of VR Gaming

Virtual Reality has come a long way since its early days. With devices like the Meta Quest 3, PlayStation VR2, and Apple Vision Pro, we're seeing unprecedented levels of immersion and accessibility.

## Key Trends Shaping Gaming

### 1. Haptic Feedback Revolution
The latest controllers provide tactile sensations that make virtual worlds feel tangible.

### 2. AI-Driven NPCs
Characters that respond intelligently to player actions, creating unique narrative experiences.

### 3. Cloud Gaming Integration
Streaming high-quality games without expensive hardware requirements.

## What's Next?

The convergence of AR, VR, and traditional gaming will create hybrid experiences that blur the lines between digital and physical worlds. Brain-computer interfaces might be the next frontier.

## Impact on Game Design

As a designer, I'm fascinated by how these technologies challenge traditional UI/UX principles. Spatial interfaces require completely new design paradigms.`,
    author: 'Tom Anderson',
    date: '2024-01-18',
    readTime: '7 min read',
    thumbnail: 'https:/.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: '5',
    title: 'Dune: Part Two - A Visual Masterpiece',
    category: 'Cinema',
    summary: 'Denis Villeneuve continues to prove why he\'s one of the best sci-fi directors of our time.',
    content: `# Dune: Part Two - A Visual Masterpiece

## Cinematography That Tells a Story

Denis Villeneuve and cinematographer Greig Fraser have created something truly spectacular. Every frame of Dune: Part Two feels like a painting, with composition that serves both beauty and narrative purpose.

## The Sound Design Revolution

Hans Zimmer's score combined with the innovative sound design creates an auditory experience that's as important as the visuals. The way sound is used to convey the power of the Voice is particularly brilliant.

## Production Design Excellence

The attention to detail in costume design, set pieces, and practical effects shows what's possible when filmmakers prioritize craftsmanship over convenience.

## Why This Matters for Designers

As a visual designer, I'm constantly inspired by how film uses color, composition, and visual hierarchy to guide emotion and attention. Dune: Part Two is a masterclass in visual storytelling.`,
    author: 'Tom Anderson',
    date: '2024-01-12',
    readTime: '5 min read',
    thumbnail: 'https:/.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'The Rise of AI in Creative Industries',
    category: 'Technology',
    summary: 'How artificial intelligence is transforming creative work and what it means for designers.',
    content: `# The Rise of AI in Creative Industries

## The Current Landscape

AI tools like Midjourney, DALL-E, and ChatGPT have democratized creative capabilities, allowing anyone to generate images, write copy, and even code.

## Impact on Design Work

Rather than replacing designers, AI is becoming a powerful collaborator. It's changing how we approach ideation, iteration, and execution.

## Ethical Considerations

The creative community grapples with questions about originality, copyright, and the value of human creativity in an AI-augmented world.

## Adapting as Creatives

The key is learning to work with AI as a tool while maintaining our unique human perspective and creative judgment.`,
    author: 'Tom Anderson',
    date: '2024-01-08',
    readTime: '6 min read',
    thumbnail: 'https:/.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '7',
    title: 'My Morning Routine for Creative Productivity',
    category: 'Lifestyle',
    summary: 'How I structure my mornings to maximize creativity and maintain work-life balance.',
    content: `# My Morning Routine for Creative Productivity

## The Power of Consistency

After years of experimenting, I've found that a consistent morning routine is crucial for maintaining creative energy throughout the day.

## My Current Routine

### 6:00 AM - Wake Up (No Snooze)
I keep my phone in another room to avoid the temptation of checking notifications first thing.

### 6:15 AM - Meditation
10 minutes of mindfulness meditation using the Headspace app.

### 6:30 AM - Exercise
Either a 30-minute run or yoga session, depending on how I'm feeling.

### 7:15 AM - Journaling
Three pages of stream-of-consciousness writing to clear my mind.

### 7:45 AM - Coffee & Planning
I review my priorities for the day while enjoying my first cup of coffee.

## Why This Works

This routine gives me a sense of accomplishment before I even start work. It also ensures I take care of my physical and mental health before diving into client images.

## Adapting to Your Life

The key isn't copying my exact routine, but finding what works for your schedule and personality. Start small and build consistency.`,
    author: 'Tom Anderson',
    date: '2024-01-05',
    readTime: '4 min read',
    thumbnail: 'https:/.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '8',
    title: 'Breaking: Apple Announces Vision Pro 2',
    category: 'News',
    summary: 'Apple\'s next-generation mixed reality headset promises lighter design and improved battery life.',
    content: `# Breaking: Apple Announces Vision Pro 2

## What's New

Apple has just announced the Vision Pro 2, addressing many of the concerns from the first generation while introducing exciting new features.

## Key Improvements

### Lighter Design
The new headset is 30% lighter, making extended use much more comfortable.

### Better Battery Life
Up to 4 hours of continuous use, double the original Vision Pro.

### Enhanced Display
Micro-OLED displays with 50% higher pixel density for even sharper visuals.

### Improved Hand Tracking
More precise gesture recognition and reduced latency.

## Impact on the Industry

This announcement signals Apple's serious commitment to spatial computing and will likely accelerate adoption across consumer and enterprise markets.

## Design Implications

As designers, we need to start thinking about spatial interfaces and how traditional design principles translate to 3D environments.`,
    author: 'Tom Anderson',
    date: '2024-01-22',
    readTime: '3 min read',
    thumbnail: 'https:/.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '9',
    title: 'Baldur\'s Gate 3: A New Standard for RPGs',
    category: 'Gaming',
    summary: 'How Larian Studios created the most ambitious RPG in years and what it means for the industry.',
    content: `# Baldur's Gate 3: A New Standard for RPGs

## The Achievement

Larian Studios has created something truly special with Baldur's Gate 3. It's not just a great game; it's a statement about what's possible when developers prioritize player agency and narrative depth.

## What Makes It Special

### Meaningful Choices
Every decision feels consequential, with ripple effects that extend throughout the entire campaign.

### Character Development
The companions feel like real people with their own motivations and growth arcs.

### Technical Excellence
The game runs beautifully and the voice acting is top-tier throughout.

## Industry Impact

BG3 has raised the bar for what players expect from RPGs. Other developers will need to match this level of polish and depth.

## Design Lessons

The game's UI is a masterclass in information hierarchy and accessibility. Complex systems are made approachable through excellent design.`,
    author: 'Tom Anderson',
    date: '2024-01-14',
    readTime: '5 min read',
    thumbnail: 'https:/.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const mockFeedPosts: FeedPost[] = [
  {
    id: '1',
    type: 'image',
    content: 'Daily UI #17 – Calculator App. Exploring neumorphism design trends.',
    image: 'https:/.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 124,
    comments: 18,
    date: '2024-01-22',
  },
  {
    id: '2',
    type: 'text',
    content: 'Dark vs Light Mode: Which do you prefer? been experimenting with both and found that context matters more than personal preference. Dark mode for focus sessions, light mode for detailed work.',
    likes: 89,
    comments: 23,
    date: '2024-01-21',
  },
  {
    id: '3',
    type: 'image',
    content: 'New Brand Logo Sketch for a Pet Store. Going for playful yet professional.',
    image: 'https:/.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 156,
    comments: 12,
    date: '2024-01-20',
  },
  {
    id: '4',
    type: 'text',
    content: 'Just finished a 3-hour design session. There\'s something magical about getting into the flow state. What helps you get into your creative zone?',
    likes: 67,
    comments: 31,
    date: '2024-01-19',
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
  { name: 'Principle', level: 80, icon: 'Play' },
];

export const mockExperience: Experience[] = [
  {
    company: 'TechFlow Inc.',
    role: 'Senior UI/UX Designer',
    period: '2022 - Present',
    description: 'Leading design for multiple SaaS products, managing a team of 3 designers, and establishing design systems.',
  },
  {
    company: 'StartupLab',
    role: 'Product Designer',
    period: '2020 - 2022',
    description: 'Designed mobile apps and web platforms for early-stage startups, focusing on user research and rapid prototyping.',
  },
  {
    company: 'Creative Agency',
    role: 'Junior Designer',
    period: '2019 - 2020',
    description: 'Worked on branding images, print design, and digital marketing materials for various clients.',
  }
];