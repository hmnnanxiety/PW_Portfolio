"use client";

import { useState } from "react";
export function CopyEmailButton({ email }: { email: string }) {
  const [message, setMessage] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setMessage("Email copied.");
    } catch {
      setMessage(
        "Copy unavailable. Select the email address or use its email link.",
      );
    }
  }
  return (
    <>
      <button type="button" className="copy-button" onClick={copy}>
        Copy email
      </button>
      <span role="status" className="pending">
        {message}
      </span>
    </>
  );
}
