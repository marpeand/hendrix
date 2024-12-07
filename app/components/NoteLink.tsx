import Link from "next/link";
import FormatDate from "./FormatDate";
import { Notes } from "@/.contentlayer/generated";

export const NoteLink = ({ note }: { note: Notes }) => (
  <Link className="flex flex-col group" href={note.url}>
    <div className="flex justify-between items-center">
      <h1 className="flex-1 overflow-hidden whitespace-nowrap overflow-ellipsis group-hover:underline font-medium ">
        {note.title}
      </h1>
      <span className="text-foreground-300 font-light text-sm flex-shrink-0 ml-4">
        <FormatDate dateString={note.date} />
      </span>
    </div>
  </Link>
);
