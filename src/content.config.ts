import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { projectCoverKeys } from './config/visualAssets';
import { localMdxLoader } from './loaders/localMdxLoader';

const track = z.enum(['general', 'game', 'agent', 'auto']);
const projectFilter = z.enum(['game-ai', 'agent', 'evaluation', 'workflow']);
const researchCategory = z.enum([
  'game-research',
  'player-insight',
  'ai-opportunity',
  'agent-evaluation',
  'product-method',
  'learning-notes',
]);

const projects = defineCollection({
  loader: localMdxLoader('./src/content/projects'),
  schema: z.object({
    index: z.string(),
    title: z.string(),
    englishTitle: z.string(),
    codename: z.string(),
    summary: z.string(),
    description: z.string(),
    updated: z.coerce.date(),
    status: z.enum(['LIVE', 'TESTED', 'ITERATING', 'ARCHIVED']),
    categories: z.array(z.string()),
    targetTracks: z.array(track),
    filters: z.array(projectFilter),
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
    outcome: z.string(),
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
    sourceNote: z.string(),
    cover: z.enum(projectCoverKeys).optional(),
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

const research = defineCollection({
  loader: localMdxLoader('./src/content/research'),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: researchCategory,
    tags: z.array(z.string()),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    relatedProjects: z.array(z.string()).default([]),
    cover: z.string().optional(),
    sourceNote: z.string().optional(),
  }),
});

const spec = defineCollection({
  loader: localMdxLoader('./src/content/spec'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const game = defineCollection({
  loader: localMdxLoader('./src/content/game'),
  schema: z.object({
    game: z.string(),
    status: z.string(),
    modules: z.array(z.string()),
    favoriteDesign: z.string(),
    painPoints: z.array(z.string()),
    aiScenarios: z.array(z.string()),
    risks: z.array(z.string()),
    updated: z.coerce.date(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { projects, research, spec, game };
