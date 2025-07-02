import type { ReactElement, ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactElement;
}

export interface ExperienceCard {
  title: string;
  subtitle: string;
  icon: ReactElement;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: string;
}

export interface VideoProject {
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
}

export interface CareerItem {
  role: string;
  description: string;
  duration: string;
  period: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}
