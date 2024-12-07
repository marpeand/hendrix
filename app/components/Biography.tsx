import { Rubik } from "next/font/google";
import { cn } from "../lib/cn";
import Image from "next/image";
import CONFIG, { logo, social } from "@/blog.config";

const rubik = Rubik({ subsets: ["latin"] });

interface SocialLinkProps {
  link: string;
  name: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ link, name }) => {
  if (!link) return null;

  return (
    <a
      className="py-1 text-sm text-white/60 hover:text-white transition-colors"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
};

export function Biography() {
  const { title, description } = CONFIG.byography;

  return (
    <div
      className={cn(
        "flex w-full flex-col flex-1 justify-left py-16",
        rubik.className
      )}
    >
      <Image
        src={logo}
        alt="Avatar"
        width={45}
        height={45}
        className="rounded-full mb-6 flex sm:hidden"
      />
      <h1 className="text-4xl font-bold mb-4 text-gray-50 max-w-2xl">
        {title}
      </h1>
      <p className="md:text-lg mb-8 text-foreground-300 max-w-2xl">
        {description}
      </p>
      <div className="flex items-center">
        <Image
          src="/avatar.jpeg"
          alt="Avatar"
          width={45}
          height={45}
          className="rounded-full mr-6 hidden sm:flex"
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
