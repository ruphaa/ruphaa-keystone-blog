import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ThemeToggle } from './ThemeToggle';

type Props = {
  forPage: 'home' | 'blog';
};

function TopNav() {
  return (
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
