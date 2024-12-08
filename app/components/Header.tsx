import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ThemeSwitcher";

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
      className="capitalize dark:text-white/60 text-dark/60 hover:text-dark/80 transition-colors"
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
          src={"/logo.png"}
          alt=""
          width={250}
          height={250}
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
