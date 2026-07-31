import type { CollectionEntry } from 'astro:content';

export type ProjectStatus = 'LIVE' | 'TESTED' | 'ITERATING' | 'ARCHIVED';
export type TargetTrack = 'general' | 'game' | 'agent' | 'auto';
export type ProjectFilter = 'game-ai' | 'agent' | 'evaluation' | 'workflow';
export type ProjectEntry = CollectionEntry<'projects'>;

export interface AssetCredit {
  path: string;
  title: string;
  author: string;
  source: string;
  licenseStatus: 'ORIGINAL' | 'LICENSED' | 'PENDING';
  note: string;
  attributionRequired: boolean;
}

export interface TrackConfig {
  key: TargetTrack;
  path: string;
  label: string;
  eyebrow: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  resumeLabel: string;
  accent: string;
  seoDescription: string;
}
