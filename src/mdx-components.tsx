import type { MDXComponents } from "mdx/types";
import { Children } from "react";
import { ContentPlaceholder } from "@/components/placeholder";
import { caseStudySections } from "@/content/projects/sections";

const ids = new Map(caseStudySections.map(([id, label]) => [label, id]));
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, ...props }) => {
      const text = Children.toArray(children)
        .filter((child) => typeof child === "string")
        .join("");
      const id =
        ids.get(text as (typeof caseStudySections)[number][1]) ??
        text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");
      return (
        <h2 id={id} {...props}>
          {children}
        </h2>
      );
    },
    ContentPlaceholder,
    ...components,
  };
}
