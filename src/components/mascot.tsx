import Image from "next/image";

const assets = {
  peek: {
    src: "/mascot/actions/dimeees-action-peek.webp",
    width: 640,
    height: 640,
  },
  wink: {
    src: "/mascot/expressions/dimeees-expression-wink.webp",
    width: 640,
    height: 640,
  },

  default: {
    src: "/mascot/expressions/dimeees-expression-default.png",
    width: 640,
    height: 640,
  },
  happy: {
    src: "/mascot/expressions/dimeees-expression-happy.png",
    width: 640,
    height: 640,
  },
  thinking: {
    src: "/mascot/expressions/dimeees-expression-thinking.png",
    width: 640,
    height: 640,
  },
  smug: {
    src: "/mascot/expressions/dimeees-expression-smug.png",
    width: 640,
    height: 640,
  },
  surprised: {
    src: "/mascot/expressions/dimeees-expression-surprised.png",
    width: 640,
    height: 640,
  },
} as const;

/** Decorative visual punctuation. Adjacent text carries all meaning and actions. */
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
