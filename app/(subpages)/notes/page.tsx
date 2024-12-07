import { allNotes } from "@/.contentlayer/generated";
import { Metadata } from "next";
import { NoteLink } from "../../components/NoteLink";
import { FaRegStickyNote } from "react-icons/fa";
import PageContainer from "@/app/components/PageContainer";

export const metadata: Metadata = {
  title: "Notes",
  description: "A list of my personal projects",
};

const Page = () => {
  const filteredNotes = allNotes.filter((note) => !note.draft);
  return (
    <PageContainer>
      <div className="flex items-center mb-10 ">
        <h1 className="text-2xl font-bold">Notes</h1>
        <FaRegStickyNote size={20} className="ml-2" />
      </div>
      <div className="md:max-w-2xl mx-auto min-h-screen space-y-6">
        {filteredNotes
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((note) => (
            <NoteLink note={note} key={note._id} />
          ))}
      </div>
    </PageContainer>
  );
};

export default Page;
