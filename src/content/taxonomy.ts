export const categories = [
  { id: "photography", label: "Photography" },
  { id: "motion", label: "Motion" },
  { id: "design", label: "Design" },
  { id: "ui-ux", label: "UI/UX" },
  { id: "frontend", label: "Frontend" },
  { id: "software", label: "Software" },
  { id: "ai-ml", label: "AI/ML" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];
export const categoryIds = categories.map(({ id }) => id) as [
  CategoryId,
  ...CategoryId[],
];
export const filterGroups: {
  id: string;
  label: string;
  categories: readonly CategoryId[];
}[] = [
  {
    id: "visual",
    label: "Visual",
    categories: ["photography", "motion", "design", "ui-ux"],
  },
];
export const filters = [
  { id: "all", label: "All", categories: [] as readonly CategoryId[] },
  ...filterGroups,
  ...categories.map((category) => ({ ...category, categories: [category.id] })),
];
export const categoryLabel = (id: CategoryId) =>
  categories.find((category) => category.id === id)!.label;
