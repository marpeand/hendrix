import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

export function ViewMoreButton({ href, text }: { href: string; text: string }) {
  return (
    <Link
      className="flex group flex-row text-foreground-100 items-center w-48 " // Set a fixed width and center the button
      href={href}
      role="button"
    >
      <span className="flex text-sm font-semibold text-white/60">{text}</span>
      <IoMdArrowDropright
        size={20}
        className="text-white/60 group-hover:translate-x-1 transition ease-in-out delay-2000 h-5 w-5"
      />
    </Link>
  );
}
