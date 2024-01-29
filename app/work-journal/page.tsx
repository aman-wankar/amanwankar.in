import Container from '@/components/container';
import ListItem from '@/components/listItem';
import { newFunction } from '../../lib/notion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default async function page() {
  const blockIdsWithDate = await newFunction();

  return (
    <Container>
      <title>Aman Wankar | Work Journal</title>
      <h1
        className={`${playfair.className} text-5xl 
        font-bold mb-6`}
      >
        Work Journal
      </h1>
      {blockIdsWithDate.map((dateWithIdAndContentObj, index) => (
        <ListItem
          key={index}
          id={dateWithIdAndContentObj!.id}
          date={dateWithIdAndContentObj!.date}
          data={dateWithIdAndContentObj!.data}
        />
      ))}
    </Container>
  );
}
