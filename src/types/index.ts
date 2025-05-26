export interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
  important: boolean;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  level: string;
}

export interface GalleryImage {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface User {
  id: number;
  username: string;
  role: string;
}