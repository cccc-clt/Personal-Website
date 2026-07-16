export type ProjectStatus = 'LIVE' | 'TESTED' | 'ITERATING' | 'ARCHIVED';
export type TargetTrack = 'general' | 'game' | 'agent' | 'auto';

export interface IterationItem {
  stage: string;
  problem: string;
  condition: string;
  analysis: string;
  change: string;
  result: string;
  next: string;
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  englishTitle: string;
  shortDescription: string;
  fullDescription: string;
  status: ProjectStatus;
  category: string[];
  targetTracks: TargetTrack[];
  role: string;
  period: string;
  techStack: string[];
  highlights: string[];
  responsibilities: string[];
  targetUser: string;
  problem: string;
  solution: string;
  aiDesign: string[];
  evaluationMetrics: string[];
  iterations: IterationItem[];
  coverImage: string;
  screenshots: string[];
  demoUrl?: string;
  githubUrl?: string;
  documentUrl?: string;
  videoUrl?: string;
  featured: boolean;
  order: Record<TargetTrack, number>;
}
