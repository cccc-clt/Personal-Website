import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { localMdxLoader } from './loaders/localMdxLoader';

const track = z.enum(['general', 'game', 'agent', 'auto']);

const projects = defineCollection({
  loader: localMdxLoader('./src/content/projects'),
  schema: z.object({
    index: z.string(),
    title: z.string(),
    englishTitle: z.string(),
    summary: z.string(),
    description: z.string(),
    status: z.enum(['LIVE', 'TESTED', 'ITERATING', 'ARCHIVED']),
    categories: z.array(z.string()),
    targetTracks: z.array(track),
    role: z.string(),
    period: z.string(),
    techStack: z.array(z.string()),
    highlights: z.array(z.string()),
    responsibilities: z.array(z.string()),
    targetUser: z.string(),
    goal: z.string(),
    problem: z.string(),
    aiNeeded: z.string(),
    solution: z.string(),
    flow: z.array(z.string()),
    aiDesign: z.array(z.string()),
    humanCheckpoints: z.array(z.string()),
    edgeCases: z.array(z.string()),
    safety: z.array(z.string()),
    evaluationMetrics: z.array(z.string()),
    failures: z.array(z.string()),
    iterations: z.array(
      z.object({
        stage: z.string(),
        problem: z.string(),
        analysis: z.string(),
        change: z.string(),
        result: z.string(),
        next: z.string(),
      }),
    ),
    reflection: z.string(),
    nextSteps: z.array(z.string()),
    cover: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    demoUrl: z.url().optional(),
    githubUrl: z.url().optional(),
    documentUrl: z.url().optional(),
    videoUrl: z.url().optional(),
    featured: z.boolean(),
    order: z.object({
      general: z.number(),
      game: z.number(),
      agent: z.number(),
      auto: z.number(),
    }),
  }),
});

export const collections = { projects };
