"use client";

import { useMemo } from "react";
import { Mascot } from "@/components/mascot";

const variants = ["wink"] as const;

export function AboutMascot() {
  const variant = useMemo(
    () => variants[Math.floor(Math.random() * variants.length)],
    [],
  );

  return (
    <div className="about-mascot">
      <Mascot variant={variant} />
    </div>
  );
}