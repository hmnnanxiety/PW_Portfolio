import Image from "next/image";

const assets = {
  peek: {
    src: "/mascot/actions/dimeees-action-peek.webp",
    width: 301,
    height: 309,
    sizes: "(max-width: 760px) 120px, 144px",
  },
  wink: {
    src: "/mascot/expressions/dimeees-expression-wink.webp",
    width: 415,
    height: 406,
    sizes: "(max-width: 760px) 64px, 80px",
  },
} as const;

/** Static visual punctuation. Adjacent text carries all meaning and actions. */
export function Mascot({ variant }: { variant: keyof typeof assets }) {
  return (
    <Image
      {...assets[variant]}
      alt=""
      aria-hidden="true"
      className={`mascot mascot-${variant}`}
      loading="lazy"
    />
  );
}
