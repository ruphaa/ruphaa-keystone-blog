import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

type Props = {
  forPage?: 'home' | 'blog' | 'about' | 'projects';
};

function TopNav() {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <div className="py-2 flex items-center content-center">
        <Link href={`/`}>
          <a
            className={classnames("text-base font-medium mr-4 hover:text-primary-800 dark:hover:text-secondary-800", {
              'text-primary-800': router.pathname === '/'
            })}
          >
            Home
          </a>
        </Link>
        <Link href={`/about`}>
          <a
            className={classnames("text-base font-medium mr-4 hover:text-primary-800 dark:hover:text-secondary-800", {
              'text-primary-800': router.pathname === '/about'
            })}
          >
            About
          </a>
        </Link>
        <Link href={`/projects`}>
          <a
            className={classnames("text-base font-medium mr-4 hover:text-primary-800 dark:hover:text-secondary-800", {
              'text-primary-800': router.pathname === '/projects'
            })}
          >
            Projects
          </a>
        </Link>
      </div>
      <div className="justify-self-end py-2 flex items-center content-center">
        <a
          href="https://github.com/ruphaa"
          aria-label="Dinesh on GitHub"
          rel="noopener noreferrer"
          target="_blank"
          className="text-2xl ml-4 hover:text-primary-800 dark:hover:text-secondary-800"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://twitter.com/ruphaaganesh"
          aria-label="Dinesh on Twitter"
          rel="noopener noreferrer"
          target="_blank"
          className="text-2xl ml-4 hover:text-primary-800 dark:hover:text-secondary-800"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
}

export function Header({ forPage = 'home' }: Props) {
  // semantically correct tags for SEO in home vs other pages
  const HeadingTag = forPage === 'home' ? 'h1' : 'h3';
  const headingClassnames = forPage === 'home' ? ' text-5xl py-2' : 'text-4xl py-0';
  const headerClassnames = forPage === 'home' ? ' pb-8' : 'pb-2';

  return (
    <header className={`text-center grid auto-rows-auto ${headerClassnames}`}>
      <TopNav />
      {
        forPage == 'home'
        ? 
        <>
          <HeadingTag className={`dark:text-white ${headingClassnames} mt-12`}>
            {/* after:w-11/12 after:bg-gradient-to-bl after:from-primary-500 after:to-primary-700 dark:after:from-secondary-500 dark:after:to-secondary-700 */}
            <span className="fancy-name">
              Ruphaa Ganesan
            </span>
          </HeadingTag>
          <p className="text-zinc-800 dark:text-zinc-300 font-medium text tracking-wider mt-2">
            Welcome to my digital garden 🌱
          </p>
        </>
        : null
      }
    </header>
  );
}
