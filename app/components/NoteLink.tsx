import Link from "next/link";
import FormatDate from "./FormatDate";
import { Notes } from "@/.contentlayer/generated";

export const NoteLink = ({ note }: { note: Notes }) => (
  <Link className="flex flex-col group" href={note.url}>
    <div className="flex justify-between items-center">
      <h1 className="flex-1 overflow-hidden whitespace-nowrap overflow-ellipsis group-hover:underline font-medium dark:text-foreground-50 text-dark">
        {note.title}
      </h1>
      <span className="dark:text-foreground-300 text-foreground-400/80  text-sm flex-shrink-0 ml-4">
        <FormatDate dateString={note.date} />
      </span>
    </div>
  </Link>
);
