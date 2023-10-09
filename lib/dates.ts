import dayjs from 'dayjs';

export function formatDate(inputDateStr: string) {
  // Parse the input date string using dayjs
  const date = dayjs(inputDateStr);

  // Format the date as "MMM DD YYYY" (e.g., "Sep 08 2023")
  const formattedDate = date.format('MMM DD YYYY');

  return formattedDate;
}