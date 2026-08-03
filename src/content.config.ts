import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { projectCoverKeys } from './config/visualAssets';
import { localMdxLoader } from './loaders/localMdxLoader';

const track = z.enum(['general', 'game', 'agent', 'auto']);
const projectFilter = z.enum(['game-ai', 'agent', 'evaluation', 'workflow']);
const insightSection = z.enum(['research', 'notes']);
const insightKind = z.enum(['research-report', 'ai-product-note']);
const researchCategory = z.enum([
  'game-research',
  'player-research',
  'game-ai',
  'ai-product',
  'model-observation',
]);
const publicationDate = z.string().regex(/^\d{4}-\d{2}(?:-\d{2})?$/);

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
    homepageFeatured: z.boolean().default(false),
    homepageOrder: z.number().optional(),
    homepageSummary: z.string().optional(),
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
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().default(''),
      type: z.string(),
      section: insightSection,
      kind: insightKind,
      category: researchCategory,
      publishDate: publicationDate,
      updatedDate: publicationDate,
      pageCount: z.number().int().positive().optional(),
      readingTime: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      featured: z.boolean().default(false),
      homepageFeatured: z.boolean().default(false),
      homepageOrder: z.number().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      pdfUrl: z.string().startsWith('/reports/').optional(),
      slug: z.string(),
      status: z.enum(['published', 'draft']).default('published'),
      coreJudgment: z.string(),
      researchBoundary: z.string(),
      methodology: z.array(z.string()).default([]),
      questions: z.array(z.string()).default([]),
      keyFindings: z.array(z.string()).default([]),
      contentStructure: z.array(z.string()).default([]),
      metrics: z
        .array(
          z.object({
            value: z.string(),
            label: z.string(),
          }),
        )
        .default([]),
      relatedProjects: z.array(z.string()).default([]),
      relatedInsights: z.array(z.string()).default([]),
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
