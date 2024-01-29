'use client';

import Link from 'next/link';
import clsx from 'clsx';
import ExtLink from './ext-link';
import Container from './container';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/work-journal': {
    name: 'Work Journal',
  },
  '/projects': {
    name: 'Projects',
  },
};

const Header = () => {
  let pathname = usePathname() || '/';

  return (
    <header className='py-10'>
      <Container>
        <nav className='flex'>
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                href={path}
                className={clsx('transition-all hover:text-gray-950 mr-4', {
                  'text-gray-400': !isActive,
                })}
              >
                <span className='relative py-1'>
                  {name}
                  {path === pathname ? (
                    <motion.div
                      className='absolute h-[2px] top-7 inset-0 bg-gray-500 z-[-1]'
                      layoutId='sidebar'
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  ) : null}
                </span>
              </Link>
            );
          })}
          <ExtLink
            className='transition-all text-gray-400 hover:text-gray-950'
            href='https://read.cv/aman_wankar'
          >
            Resume
          </ExtLink>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
