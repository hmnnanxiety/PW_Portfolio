// Explicit imports keep the content bundle local and make missing MDX files build errors.
export const projectBodies = {
  "showcase-layout-preview": () => import("./showcase-layout-preview.mdx"),
  orca: () => import("./orca.mdx"),
  "rag-chatbot": () => import("./rag-chatbot.mdx"),
};
