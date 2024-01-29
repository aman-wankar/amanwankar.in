import ExtLink from '@/components/ext-link';
import { format } from 'date-fns';

type listItemProps = {
  id: string;
  date: string;
  data: { content: string; link: string | null }[];
};

const ListItem = ({ id, date, data }: listItemProps) => {
  const dateObject = Date.parse(date);
  const day = format(dateObject, 'do');
  const month = format(dateObject, 'MMMM');
  const year = format(dateObject, 'yyyy');

  return (
    <div className='mb-8' key={id}>
      <h3 className='text-md font-semibold mb-2' key={id}>
        Week of {month} {day}, {year}
      </h3>
      <ul key={date} className='list-disc list-inside'>
        {data.map((contentAndLinkObj, index) => (
          <li key={index}>
            {contentAndLinkObj.content}{' '}
            {contentAndLinkObj.link && (
              <ExtLink
                href={contentAndLinkObj.link}
                className='text-blue-500 hover:underline'
              >
                Link
              </ExtLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
