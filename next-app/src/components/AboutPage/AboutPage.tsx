import React from 'react';
import { PageLayout } from '../Layout/PageLayout';
import { Header } from '../Header/Header';
import Link from 'next/link';
import { format } from 'date-fns';

const talks = [
  {title: "JSFoo - VueDay 2019", link: "https://www.youtube.com/watch?v=cR901Xmb1-I&feature=youtu.be&t=8370", date: "Aug 30, 2019"},
  {title: "VueBLR #15 - Atomic Design using VUE", link: "https://www.youtube.com/watch?v=duaDIM3dJH8", date: "Jun 22, 2019"},
  {title: "Frontend DevHours - Flex your layout muscle", link: "" , date: "Feb 15, 2019"},
  {title: "Frontend Syncup - It's time to Ember Up", link: "https://slides.com/ruphaaganesh/ember-intro/fullscreen", date: "May 30, 2019"},
  {title: "Frontend DevHours - Fontastic Variable Fonts", link: "https://github.com/ruphaa/variable-fonts-experiment", date: "Jul 19, 2019"},
]

const ListItem = ({id, title, link, date}: {id: string | number, title: string, link: string, date: string}) => {
  const formattedDate = date
    ? format(new Date(date), 'MMM dd, yyyy')
    : null;

  return (
    <li
      className="mb-2 before:-ml-5 before:content-['_»_'] before:text-slate-500 dark:before:text-slate-400 ml-4 before:pr-2 grid grid-cols-listItem sm:grid-cols-smListItem"
      key={id}
    >
      <Link href={link} passHref>
        <a className="hover:text-link" target={'_blank'}>
          <span className="hover:after:bg-link">{title}</span>
        </a>
      </Link>
      <React.Fragment>
          {/* Wrap to next line when for longer titles */}
          <span className="block justify-self-end">
            <span className="hidden after:content-['—'] text-slate-500 dark:text-slate-400 pl-4 pr-4"></span>
            <span className="text-slate-500 dark:text-slate-400 text-sm justify-self-end">
              {formattedDate}
            </span>
          </span>
        </React.Fragment>
    </li>
  )
}

export function AboutPage() {
    return (
        <React.Fragment>
          <PageLayout className="grid grid-rows-[1fr_auto] max-w-[50rem]">
            <main className="lg:text-lg p-4">
            <Header forPage="about"/>
            <div className="mt-12">
              <h2 className="font-semibold text-3xl">Speaking🎙</h2>
              <ul className="list-none mt-4">
              {
                talks.map((talk, index) => (
                  <ListItem
                    id={index}
                    title={talk.title}
                    link={talk.link}
                    date={talk.date}
                  />
                ))
              }
              </ul>
            </div>
            </main>
          </PageLayout>
        </React.Fragment>
    )
}