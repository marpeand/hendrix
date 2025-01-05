"use client";

import { Check, Clipboard } from "lucide-react";
import { cn } from "../lib/cn";
import { useState } from "react";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className, ...props }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <button
      className={cn(
        "size-7 !bg-slate-700/60 rounded-lg !text-white hover:!bg-slate-700/50",
        className
      )}
      disabled={isCopied}
      onClick={copy}
      aria-label="Copy"
      {...props}
    >
      <span className="sr-only">Copy</span>
      {isCopied ? (
        <Check className="text-green-400 h-4 w-4 mx-auto" />
      ) : (
        <Clipboard className="h-4 w-4 mx-auto" />
      )}
    </button>
  );
}
