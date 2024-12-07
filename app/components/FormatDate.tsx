import { format, parseISO } from "date-fns";

interface FormatDateProps {
  dateString: string;
}

const FormatDate = ({ dateString }: FormatDateProps) => {
  const date = parseISO(dateString);
  const formattedDate = format(date, "MMM dd, yyyy");
  return <time className="text-right">{formattedDate}</time>;
};

export default FormatDate;
