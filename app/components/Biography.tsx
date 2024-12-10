import { Rubik } from "next/font/google";
import { cn } from "../lib/cn";
import Image from "next/image";
import CONFIG, { social } from "@/blog.config";

const rubik = Rubik({ subsets: ["latin"] });

interface SocialLinkProps {
  link: string;
  name: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ link, name }) => {
  if (!link) return null;

  return (
    <a
      className="py-1 text-sm dark:text-white/60 dark:hover:text-white/80 text-dark/60 hover:text-dark/80 transition-colors"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
};

export function Biography() {
  const { title, description } = CONFIG.biography;

  return (
    <div
      className={cn(
        "flex w-full flex-col flex-1 justify-left py-16",
        rubik.className
      )}
    >
      <Image
        src={CONFIG.biography.avatar}
        alt="Avatar"
        width={100}
        height={100}
        className="rounded-full mb-6 flex sm:hidden h-12 w-12"
      />
      <h1 className="text-4xl font-bold mb-4 dark:text-foreground-50 text-dark max-w-2xl">
        {title}
      </h1>
      <p className="md:text-lg mb-8 text-foreground-400 dark:text-foreground-300 max-w-2xl">
        {description}
      </p>
      <div className="flex items-center">
        <Image
          src={CONFIG.biography.avatar}
          alt="Avatar"
          width={100}
          height={100}
          className="rounded-full mr-6 hidden sm:flex h-12 w-12"
        />
        <div className="flex flex-wrap gap-x-10 sm:gap-x-4 ">
          {Object.entries(social).map(([key, link]) => (
            <SocialLink
              key={key}
              link={link}
              name={key.charAt(0).toUpperCase() + key.slice(1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
