import Image from "next/image";
import Link from "next/link";

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
      className="capitalize text-white/60 hover:text-white transition-colors"
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
          width={1000}
          height={1000}
          className="h-8 w-8"
        ></Image>
      </Link>
      <nav className="flex flex-row space-x-6">
        {Object.entries(navItems).map(([path, { name }]) => {
          return <NavItem key={path} path={path} name={name} />;
        })}
      </nav>
    </header>
  );
}
