export interface Skill {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: 'Hardware' | 'Development' | 'Systems' | 'Education' | 'Certifications';
}

export interface EducationItem {
  id: string;
  institution: string;
  period: string;
  title: string;
  details: string;
  badge?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  icon: string;
  status: string;
  category: string;
  highlights?: string[];
}
