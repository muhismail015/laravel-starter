import { format } from "date-fns";

export const formatDateTime = (dateString: string) => {
  if (!dateString) return null;
  const date = new Date(dateString);

  const dateFormatted = format(date, "dd/MMMM/yyyy");
  const timeFormatted = format(date, "HH.mm");

  return `${dateFormatted} - ${timeFormatted}`;
};
