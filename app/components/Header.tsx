import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ThemeSwitcher";
import CONFIG from "@/blog.config";

const navItems = {
  "/about": {
    name: "about",
  },
  "/projects": {
    name: "projects",
  },
  "/categories": {
    name: "categories",
  },
};

function NavItem({ path, name }: { path: string; name: string }) {
  return (
    <Link
      key={path}
      href={path}
      className="capitalize dark:text-white/60 text-dark/60 dark:hover:text-white/80 hover:text-dark/80"
    >
      {name}
    </Link>
  );
}

export function Header() {
  return (
    <header className="my-8 mx-4 flex items-center justify-between">
      <Link href={"/"}>
        <Image
          src={CONFIG.logo}
          alt="Logo"
          width={50}
          height={50}
          className="h-8 w-8"
          aria-label="Logo"
        />
      </Link>
      <nav className="flex flex-row space-x-6 items-center">
        {Object.entries(navItems).map(([path, { name }]) => {
          return <NavItem key={path} path={path} name={name} />;
        })}
        <ModeToggle />
      </nav>
    </header>
  );
}
