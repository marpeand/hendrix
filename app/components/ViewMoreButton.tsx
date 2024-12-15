import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

export function ViewMoreButton({ href, text }: { href: string; text: string }) {
  return (
    <Link
      className="flex group flex-row text-foreground-100 items-center w-48 "
      href={href}
      role="button"
    >
      <span className="flex text-sm font-semibold dark:text-white/60 text-dark/70">
        {text}
      </span>
      <IoMdArrowDropright
        size={20}
        className="dark:text-white/60 text-dark/70 group-hover:translate-x-1 transition ease-in-out delay-2000 h-5 w-5"
      />
    </Link>
  );
}
