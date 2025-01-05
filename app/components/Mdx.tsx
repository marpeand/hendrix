"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";

import { HTMLAttributes } from "react";
import { CopyButton } from "./CopyButton";
import { cn } from "../lib/cn";

interface PreProps extends React.HTMLProps<HTMLPreElement> {
  __rawString__?: string;
  ["data-language"]?: string;
}

const BasicItems = {
  code: (props: HTMLAttributes<HTMLElement>) => {
    const { className, ...rest } = props;
    return (
      <code
        className={cn(
          "rounded-sm  font-mono text-sm text-foreground overflow-x-scroll text-white",
          className
        )}
        {...rest}
      />
    );
  },
};

export function PreCustom(props: PreProps) {
  const {
    children,
    __rawString__ = "",
    ["data-language"]: dataLanguage = "Shell",
  } = props;

  return (
    <pre className="rounded-xl relative overflow-hidden " {...props}>
      <p className="absolute bottom-0 right-1 capitalize text-xs font-medium bg-slate-700/30 text-white p-1 rounded-lg">
        {dataLanguage}
      </p>
      <CopyButton
        text={__rawString__}
        className="absolute right-1 top-1 shadow-smooth"
      />

      {children}
    </pre>
  );
}

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const components = {
  pre: PreCustom,
  Image: RoundedImage,
  a: CustomLink,
  ...BasicItems,
};

export function MdxRenderer({ source }: { source: string }) {
  const Component = useMDXComponent(source);
  return <Component components={components} />;
}
