import createMDX from "@next/mdx";

const withMDX = createMDX({});
export default withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
});
