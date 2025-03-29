import Link from "next/link";
import Image from "next/image";
import CONFIG from "@/blog.config";

interface NavItem {
  name: string;
  href: string;
}

export default function Footer() {
  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Writings", href: "/writings" },
    { name: "Projects", href: "/projects" },
    { name: "Notes", href: "/notes" },
    { name: "Categories", href: "/categories" },
  ];

  return (
    <footer className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Hendrix Logo"
              width={40}
              height={40}
              className="w-8 h-8 mr-3"
            />
            <span className="text-white text-xl font-bold">{CONFIG.title}</span>
          </div>

          <div className="flex flex-wrap justify-between">
            <nav className="space-x-3 mb-6 w-full md:w-auto">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm dark:text-white/60 text-dark/60 hover:text-dark/80 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="space-x-3 mb-6 w-full md:w-auto">
              {Object.entries(CONFIG.social).map(([key, link]) => (
                <Link
                  key={key}
                  href={link as string}
                  className="text-sm dark:text-white/60 text-dark/60 dark:hover:text-white/80 hover:text-dark/80"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm dark:text-white/40 text-dark/60">
              © {new Date().getFullYear()} {CONFIG.title} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
