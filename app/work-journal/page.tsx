import { fetchBlock } from '../../lib/notion';
import { format } from 'date-fns';
import { Playfair_Display } from 'next/font/google';
import Container from '@/components/container';
import ExtLink from '@/components/ext-link';

const playfair = Playfair_Display({ subsets: ['latin'] });

type dataObj = {
  content: string;
  link: string | null;
};

export default async function page() {
  const res = await fetchBlock(`${process.env.NOTION_PAGE_ID}`);
  const blockIdsWithDate = res
    .map((obj) => {
      if ('paragraph' in obj) {
        if (obj.has_children) {
          let data: dataObj[] = [];
          return {
            id: obj.id,
            date: obj.paragraph.rich_text[0].plain_text,
            data,
          };
        }
      }
    })
    .filter((id) => {
      if (id) {
        return id;
      }
    });

  for (const obj of blockIdsWithDate) {
    const blockRes = await fetchBlock(`${obj?.id}`);
    blockRes.map((blockObj) => {
      if ('bulleted_list_item' in blockObj && 'block_id' in blockObj.parent) {
        const content = blockObj.bulleted_list_item.rich_text[0].plain_text;
        const link = blockObj.bulleted_list_item.rich_text[0].href;
        obj?.data.push({ content, link });
      }
    });
  }

  return (
    <Container>
      <title>Aman Wankar | Work Journal</title>
      <h1
        className={`${playfair.className} text-5xl 
        font-bold mb-6`}
      >
        Work Journal
      </h1>
      {blockIdsWithDate.map((dateWithIdAndContentObj) => {
        const dateObject = Date.parse(dateWithIdAndContentObj?.date!);
        const day = format(dateObject, 'do');
        const month = format(dateObject, 'MMMM');
        const year = format(dateObject, 'yyyy');
        return (
          <div className='mb-8' key={dateWithIdAndContentObj?.id}>
            <h3
              className='text-md font-semibold mb-2'
              key={dateWithIdAndContentObj?.id}
            >
              Week of {month} {day}, {year}
            </h3>
            <ul
              key={dateWithIdAndContentObj?.date}
              className='list-disc list-inside'
            >
              {dateWithIdAndContentObj?.data.map((contentAndLinkObj, index) => (
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
      })}
    </Container>
  );
}
