import type { Project } from "@/lib/project-schema";

const pending = {
  publication: "draft",
  fixture: false,
  summary: null,
  year: null,
  status: null,
  tags: [],
  role: null,
  tools: null,
  cover: null,
  gallery: [],
  featured: true,
  contentReviewed: false,
} as const;

// Candidates supplied by the owner. No dates, responsibilities, or outcomes inferred.
// Categories are provisional browsing assignments until the owner reviews the content.
export const projectRecords: Project[] = [
  {
    ...pending,
    slug: "showcase-layout-preview",
    title: "Showcase layout preview",
    type: "showcase",
    fixture: true,
    categories: ["photography", "design"],
    tags: [],
    gallery: [],
    featuredOrder: 0,
    todos: [
      {
        field: "project",
        note: "Layout fixture only. Replace with a verified visual project and its media. Category assignments demonstrate filtering, not actual project facts.",
      },
    ],
  },
  {
    ...pending,
    slug: "orca",
    title: "ORCA",
    type: "case-study",
    categories: ["software"],
    tags: [],
    gallery: [],
    featuredOrder: 1,
    todos: [
      {
        field: "content",
        note: "Confirm title, categories, year, scope, individual contribution, tools, narrative, results, and media for the ORCA robotics candidate.",
      },
    ],
  },
  {
    ...pending,
    slug: "rag-chatbot",
    title: "RAG chatbot",
    type: "case-study",
    categories: ["frontend", "ai-ml"],
    tags: [],
    gallery: [],
    featuredOrder: 2,
    todos: [
      {
        field: "content",
        note: "Confirm title, categories, project status, dates, contribution, architecture, tools, results, links, and media.",
      },
    ],
  },
];
