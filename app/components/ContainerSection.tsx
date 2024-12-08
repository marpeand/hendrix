import { ViewMoreButton } from "./ViewMoreButton";

interface ContainerProps {
  children: React.ReactNode;
  title: string;
  href: string;
  textButton: string;
  icon: JSX.Element;
}

export function ContainerSection({
  children,
  title,
  href,
  icon,
  textButton,
}: ContainerProps) {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center w-full py-10 text-left flex">
      <h2 className="text-xl font-semibold mb-6 w-2/6 flex items-center dark:text-foreground-50 text-dark">
        {icon}
        {title}
      </h2>
      <div className="md:w-4/6 w-full">
        {children}
        <ViewMoreButton href={href} text={textButton} />
      </div>
    </section>
  );
}
