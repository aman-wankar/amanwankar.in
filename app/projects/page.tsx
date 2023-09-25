import metaversus from '../../public/project images/metaversus.png';
import hoobank from '../../public/project images/hoobank.png';
import gpt from '../../public/project images/gpt3.png';
import evogym from '../../public/project images/evogym.png';

import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/container';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

const projectsObj = [
  { name: metaversus, link: 'https://gpt-beige.vercel.app/' },
  { name: hoobank, link: 'https://modern-bank-eight.vercel.app/' },
  { name: gpt, link: 'https://gpt-beige.vercel.app/' },
  { name: evogym, link: 'https://gym-sepia.vercel.app/' },
];

const Projects = () => {
  return (
    <Container>
      <title>Aman Wankar | Projects</title>
      <h1 className={`${playfair.className} text-5xl font-bold`}>Projects</h1>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 my-6'>
        {projectsObj.map((obj, index) => (
          <Link href={obj.link} key={index}>
            <Image
              className='object-cover rounded-lg'
              src={obj.name}
              alt='Evogym Image'
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
