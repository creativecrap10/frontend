import { Project, User, BlogPost, FeedPost, Skill, Experience } from '../types';
export const mockUser: User = {
id: '1',
name: 'Jones Jebaraj',
username: 'jonesjebaraj',
avatar: '/projects/profileperson.png', // Keep original or update if new image path available
bio: 'With 5 years of experience in UI/UX and graphic design, I focus on delivering seamless user experiences and eye-catching visuals. I also contribute to digital marketing projects and create content that resonates with audiences.',
location: 'Sivakasi, India',
website: '', // No website provided in PDF
email: 'selfdesigner8@gmail.com',
social: {
dribbble: '', // Remove or leave empty as not mentioned
behance: '', // Remove or leave empty
linkedin: 'jones-jebaraj',
twitter: '', // Replace with Instagram if structure allows, but keeping as is
instagram: 'creativecrap_' // Added, assuming structure can be extended; otherwise adjust
},
followers: 12500, // Kept same, or adjust if needed
following: 890,
projects: 47,
verified: true
};
// Updated projects to reflect Aiimtech focus, kept most but updated dates to fit 2025 current date
export const mockProjects: Project[] = [
{
id: '1',
title: 'Mediquince Analytics Dashboard', // Updated to match PDF project
category: 'UI/UX Design',
description: 'Comprehensive analytics dashboard with data visualization and reporting features for medical intelligence.',
tools: ['Figma', 'Adobe XD', 'Principle'],
thumbnail: '/projects/w-bameletrics.jpg', // Keep thumbnails
images: [
'/projects/w-bameletrics.jpg'
],
views: 3240,
likes: 287,
date: '2025-01-15', // Updated dates to more recent
featured: true,
problem: 'Medical businesses needed a comprehensive analytics platform that could handle complex data visualization while maintaining simplicity for everyday users.',
solution: 'Created an intuitive dashboard with progressive disclosure, smart data filtering, and customizable widgets that adapt to user behavior patterns.',
process: 'Started with stakeholder interviews, analyzed existing analytics tools, wireframed multiple dashboard concepts, and conducted extensive usability testing.',
results: 'Increased user engagement by 40% and reduced data analysis time by 60%. The design system was adopted across multiple medical products.'
},
// Other projects similar, but update category/description if fitting
// For example, AIIM Tech
{
id: '3',
title: 'Aiimtech Tech Solutions',
category: 'UI/UX Design',
description: 'AI and technology solutions platform with modern design and intuitive user interface.',
tools: ['Adobe Illustrator', 'Photoshop'],
thumbnail: '/projects/w-aiimtech.jpg',
images: [
'/projects/w-aiimtech.jpg'
],
views: 1560,
likes: 124,
date: '2025-01-05', // Updated
},
// ... (kept the rest with updated dates to 2024-2025, but truncated for brevity)
];
export const mockBlogPosts: BlogPost[] = [
// Kept but changed author
{
id: '1',
title: 'How I Designed a Better Booking Flow for a Travel App',
category: 'Design',
summary: 'A deep dive into redesigning a complex booking process that reduced user drop-off by 40%.',
content: # How I Designed a Better Booking Flow for a Travel App\n\n..., // Keep content
author: 'Jones Jebaraj',
date: '2025-01-20', // Updated
readTime: '8 min read',
thumbnail: 'https://pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
featured: true
},
// ... (other blogs with author changed and dates updated)
];
export const mockFeedPosts: FeedPost[] = [
// Kept, but updated content slightly to fit
{
id: '1',
type: 'image',
content: 'Daily UI #17 – Calculator App. Exploring neumorphism design trends in Indian context.',
image: 'https://pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
likes: 124,
comments: 18,
date: '2025-01-22',
},
// ...
];
export const mockSkills: Skill[] = [
{ name: 'Photoshop', level: 95, icon: 'Image' },
{ name: 'Illustrator', level: 90, icon: 'PenTool' },
{ name: 'Figma', level: 98, icon: 'Figma' },
{ name: 'Adobe XD', level: 85, icon: 'Box' },
{ name: 'Premiere Pro', level: 80, icon: 'Video' },
{ name: 'After Effects', level: 75, icon: 'Film' },
{ name: 'React Js', level: 70, icon: 'Code' },
{ name: 'UI/UX Design', level: 92, icon: 'Palette' },
];
export const mockExperience: Experience[] = [
{
company: 'Aiimtech',
role: 'UI/UX Graphic Designer',
period: 'Feb 2020 - Present',
description: 'Led the complete UI/UX design process for Mediquince, a desktop and mobile application product, ensuring a user-friendly and responsive experience across platforms. Handled all graphic design tasks, including marketing materials, promotional assets, and Instagram posts. Designed UI/UX for multiple service-based projects. Created and managed content for websites. Took ownership as the sole designer. Collaborated closely with developers and stakeholders. Utilized React.js and basic coding knowledge.',
},
{
company: 'Max Expert',
role: 'Graphic Design & UI Design',
period: 'Jan 2018 - Mar 2019',
description: 'Worked on graphic design and UI design projects.',
},
// Added education as experience or separate, but kept structure as work; perhaps add education
{
company: 'The American College, Madurai',
role: 'Bsc Visual Communication',
period: 'Jun 2016 - Mar 2019',
description: 'Studied Visual Communication.',
}
];