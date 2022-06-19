import { parseISO, formatDistance, subDays } from 'date-fns';

interface DateViewInterface {
  dateString: string;
}

export default function DateView({ dateString }: DateViewInterface) {
  const date: Date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {formatDistance(subDays(date, 0), new Date(), {
        addSuffix: true,
      })}
    </time>
  );
}
