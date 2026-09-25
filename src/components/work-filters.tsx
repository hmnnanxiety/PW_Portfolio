import { filters } from "@/content/taxonomy";

export function WorkFilters({ active }: { active: string }) {
  return (
    <nav aria-label="Filter projects by category">
      <p className="eyebrow">Browse by discipline</p>
      <ul className="filters">
        {filters.map((filter) => (
          <li key={filter.id}>
            <a
              href={
                filter.id === "all" ? "/work" : `/work?category=${filter.id}`
              }
              aria-current={active === filter.id ? "true" : undefined}
            >
              {filter.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
