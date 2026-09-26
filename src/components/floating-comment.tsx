"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { useReducedMotion } from "@/components/use-reduced-motion";

const defaultComments = [
  "should this be bigger?",
  "looks intentional enough",
  "one more tweak bro",
  "yeah this took too long",
  "final_final_REAL_v7",
  "okay maybe stop touching it",
] as const;

type Position = {
  x: number;
  y: number;
};

type Phase = "moving" | "typing" | "waiting" | "leaving";

export function FloatingComment({
  comments = defaultComments,
  username = "dimeees"
}: {
  comments?: readonly string[];
  username?: string;
}) {
  const reduced = useReducedMotion();

  const safePositions = useMemo<Position[]>(
    () => [
      { x: 55, y: 16 },
      { x: 73, y: 14 },
      { x: 85, y: 19 },
      { x: 63, y: 21 },
      { x: 80, y: 15 },
      { x: 68, y: 18 },
    ],
    [],
  );

  const [commentIndex, setCommentIndex] = useState(0);
  const [positionIndex, setPositionIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState<Phase>("moving");

  const currentComment =
    comments[commentIndex % comments.length] ?? "";

  const currentPosition =
    safePositions[reduced ? 0 : positionIndex % safePositions.length];

  const showNameOnly = !reduced && phase === "moving";
  const showTypingBubble = !reduced && phase === "typing";
  const showFinalBubble =
    reduced || phase === "waiting" || phase === "leaving";

  useEffect(() => {
    if (!comments.length || reduced) return;

    // 1. Cursor sedang pindah.
    // Setelah sampai, mulai typing.
    if (phase === "moving") {
      const timer = window.setTimeout(() => {
        setTypedText("");
        setPhase("typing");
      }, 900);

      return () => window.clearTimeout(timer);
    }

    // 2. Typewriter animation.
    if (phase === "typing") {
      if (typedText.length >= currentComment.length) {
        const timer = window.setTimeout(() => {
          setPhase("waiting");
        }, 300);

        return () => window.clearTimeout(timer);
      }

      const timer = window.setTimeout(() => {
        setTypedText(
          currentComment.slice(0, typedText.length + 1),
        );
      }, 42);

      return () => window.clearTimeout(timer);
    }

    // 3. Chat sudah selesai, stay sebentar.
    if (phase === "waiting") {
      const timer = window.setTimeout(() => {
        setPhase("leaving");
      }, 1900);

      return () => window.clearTimeout(timer);
    }

    // 4. Kasih waktu animasi OUT selesai,
    // baru pindah posisi dan ganti chat.
    if (phase === "leaving") {
      const timer = window.setTimeout(() => {
        setCommentIndex(
          (value) => (value + 1) % comments.length,
        );

        setPositionIndex((value) => {
          let next = value;

          while (
            safePositions.length > 1 &&
            next === value
          ) {
            next = Math.floor(
              Math.random() * safePositions.length,
            );
          }

          return next;
        });

        setTypedText("");
        setPhase("moving");
      }, 260);

      return () => window.clearTimeout(timer);
    }
  }, [
    phase,
    typedText,
    currentComment,
    comments.length,
    reduced,
    safePositions.length,
  ]);

  if (!comments.length) return null;

  return (
    <div
      className="floating-comment"
      style={{
        "--comment-x": `${currentPosition.x}%`,
        "--comment-y": `${currentPosition.y}%`,
      } as CSSProperties}
      data-position={reduced ? 0 : positionIndex}
      data-phase={reduced ? "waiting" : phase}
      aria-hidden="true"
    >
      <div
        className="floating-comment-cursor"
        aria-hidden="true"
      >
        ↖
      </div>

      {showNameOnly && (
        <div className="floating-comment-name-badge">
          {username}
        </div>
      )}

      {showTypingBubble && (
        <div className="floating-comment-bubble is-typing">
          <span>{typedText}</span>

          <span
            className="floating-comment-caret"
            aria-hidden="true"
          >
            |
          </span>
        </div>
      )}

      {showFinalBubble && (
        <div className="floating-comment-bubble">
          <span>{currentComment}</span>
        </div>
      )}
    </div>
  );
}
