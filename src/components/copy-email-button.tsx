"use client";

import { useEffect, useRef, useState } from "react";
export function CopyEmailButton({ email }: { email: string }) {
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const request = useRef(0);
  useEffect(
    () => () => {
      clearTimeout(timer.current);
      request.current += 1;
    },
    [],
  );
  async function copy() {
    const current = ++request.current;
    clearTimeout(timer.current);
    setMessage("");
    setCopied(false);
    try {
      await navigator.clipboard.writeText(email);
      if (current !== request.current) return;
      setCopied(true);
      setMessage("Email copied.");
      timer.current = setTimeout(() => {
        setCopied(false);
        setMessage("");
      }, 2600);
    } catch {
      if (current !== request.current) return;
      setMessage(
        "Copy unavailable. Select the email address or use its email link.",
      );
    }
  }
  return (
    <>
      <button
        type="button"
        className="copy-button"
        onClick={copy}
        aria-label="Copy email"
      >
        <span className="copy-label" aria-hidden="true">
          <span data-visible={!copied}>Copy email</span>
          <span data-visible={copied}>copied. behave.</span>
        </span>
      </button>
      <span
        role="status"
        className={copied || !message ? "sr-only" : "pending"}
      >
        {message}
      </span>
    </>
  );
}
