import { Notice, Course, GalleryImage, TeamMember } from '../types';

export const notices: Notice[] = [
  {
    id: 1,
    title: 'School Reopening After Summer Break',
    content: 'We are pleased to announce that the school will reopen on August 15th, 2025 after the summer break. All students are expected to arrive in proper uniform.',
    date: '2025-07-30',
    important: true,
  },
  {
    id: 2,
    title: 'Annual Sports Day',
    content: 'The annual sports day will be held on September 5th, 2025. All students are encouraged to participate in at least one event.',
    date: '2025-08-05',
    important: false,
  },
  {
    id: 3,
    title: 'Parent-Teacher Meeting',
    content: 'A parent-teacher meeting is scheduled for August 25th, 2025. Parents are requested to attend without fail to discuss their child\'s progress.',
    date: '2025-08-10',
    important: true,
  },
  {
    id: 4,
    title: 'Science Exhibition',
    content: 'The school is organizing a science exhibition on September 15th, 2025. Students from grades 6-10 can participate and showcase their projects.',
    date: '2025-08-12',
    important: false,
  },
  {
    id: 5,
    title: 'Independence Day Celebration',
    content: 'The school will celebrate Independence Day on August 15th, 2025. A special assembly will be conducted followed by cultural activities.',
    date: '2025-08-13',
    important: false,
  },
];

export const courses: Course[] = [
  {
    id: 1,
    title: 'Science and Mathematics',
    description: 'Our comprehensive Science and Mathematics program focuses on developing analytical thinking and problem-solving skills through practical experiments and real-world applications.',
    imageUrl: 'https://images.pexels.com/photos/3825381/pexels-photo-3825381.jpeg',
    duration: '1-12 Grades',
    level: 'All Levels',
  },
  {
    id: 2,
    title: 'Arts and Humanities',
    description: 'Explore the world of literature, history, and creative arts with our Arts and Humanities program designed to nurture creative thinking and cultural awareness.',
    imageUrl: 'https://images.pexels.com/photos/3776557/pexels-photo-3776557.jpeg',
    duration: '1-12 Grades',
    level: 'All Levels',
  },
  {
    id: 3,
    title: 'Computer Science',
    description: 'Our Computer Science program introduces students to programming, web development, and digital literacy skills essential for success in the modern technological world.',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    duration: '6-12 Grades',
    level: 'Beginner to Advanced',
  },
  {
    id: 4,
    title: 'Physical Education',
    description: 'Our Physical Education program promotes health, fitness, and sportsmanship through a variety of individual and team sports activities.',
    imageUrl: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
    duration: '1-12 Grades',
    level: 'All Levels',
  },
  {
    id: 5,
    title: 'Language Studies',
    description: 'Master multiple languages including Nepali, English, and optional third languages with our comprehensive language studies program.',
    imageUrl: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg',
    duration: '1-12 Grades',
    level: 'All Levels',
  },
  {
    id: 6,
    title: 'Music and Performing Arts',
    description: 'Discover and develop artistic talents through our Music and Performing Arts program that includes vocal, instrumental, and dance training.',
    imageUrl: 'https://images.pexels.com/photos/7095694/pexels-photo-7095694.jpeg',
    duration: '1-12 Grades',
    level: 'All Levels',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'Annual Sports Day',
    imageUrl: 'https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg',
    category: 'Sports',
  },
  {
    id: 2,
    title: 'Science Exhibition',
    imageUrl: 'https://images.pexels.com/photos/8926546/pexels-photo-8926546.jpeg',
    category: 'Academic',
  },
  {
    id: 3,
    title: 'Cultural Program',
    imageUrl: 'https://images.pexels.com/photos/7092614/pexels-photo-7092614.jpeg',
    category: 'Cultural',
  },
  {
    id: 4,
    title: 'Graduation Ceremony',
    imageUrl: 'https://images.pexels.com/photos/5905465/pexels-photo-5905465.jpeg',
    category: 'Events',
  },
  {
    id: 5,
    title: 'Annual Day Celebration',
    imageUrl: 'https://images.pexels.com/photos/8472874/pexels-photo-8472874.jpeg',
    category: 'Events',
  },
  {
    id: 6,
    title: 'Field Trip',
    imageUrl: 'https://images.pexels.com/photos/5095153/pexels-photo-5095153.jpeg',
    category: 'Trips',
  },
  {
    id: 7,
    title: 'Art Exhibition',
    imageUrl: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg',
    category: 'Academic',
  },
  {
    id: 8,
    title: 'Independence Day',
    imageUrl: 'https://images.pexels.com/photos/5063095/pexels-photo-5063095.jpeg',
    category: 'Events',
  },
  {
    id: 9,
    title: 'Classroom Activities',
    imageUrl: 'https://images.pexels.com/photos/8363156/pexels-photo-8363156.jpeg',
    category: 'Academic',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    position: 'Principal',
    imageUrl: 'https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg',
  },
  {
    id: 2,
    name: 'Anita Gurung',
    position: 'Vice Principal',
    imageUrl: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Head of Science Department',
    imageUrl: 'https://images.pexels.com/photos/8363775/pexels-photo-8363775.jpeg',
  },
  {
    id: 4,
    name: 'Sunita Rai',
    position: 'Head of Arts Department',
    imageUrl: 'https://images.pexels.com/photos/5212635/pexels-photo-5212635.jpeg',
  },
];