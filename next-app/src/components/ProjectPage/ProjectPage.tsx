import React from 'react';
import { PageLayout } from '../Layout/PageLayout';
import { Header } from '../Header/Header';

const projects = [
  {
    name: 'Twitter Bot',
    description: 'Netlify function to tweet a dev article everyday',
    source: 'https://github.com/ruphaa/twitter-bot',
    demo: 'https://twitter.com/dailydevcodes',
    article: '',
  },
  {
    name: 'Product hunt clone',
    description: 'Product Hunt Clone built using Vue',
    source: 'https://github.com/ruphaa/vue-producthunt',
    demo: 'https://vue-producthunt-clone.netlify.app',
    article: '',
  },
  {
    name: 'Pictionary',
    description: 'Pictionary game built with Vue',
    source: 'https://github.com/ruphaa/vue-pictionary',
    demo: 'https://vue-pictionary.netlify.app/',
    article: '',
  },
  {
    name: 'Pomodoro Timer App',
    description: 'Vue based Pomodoro app for productivity',
    source: 'https://github.com/ruphaa/pomodoro-app',
    demo: 'https://pomodora-time-tracker.netlify.app/',
    article: '',
  },
  {
    name: 'Pastry shop website',
    description: 'Pastry Shop Web Application built using Ember',
    source: 'https://github.com/ruphaa/ember-pastry-shop',
    demo: 'https://ember-pastry-shop.netlify.app/home',
    article: '',
  },
  {
    name: 'TODO app',
    description: 'Simple todo app built using React⚡️',
    source: 'https://github.com/ruphaa/react-todo-app',
    demo: 'https://dry-mountain-79163.herokuapp.com/',
    article: '',
  }
];

export function ProjectPage() {
  return (
    <React.Fragment>
      <PageLayout className="grid grid-rows-[1fr_auto] max-w-[50rem]">
        <main className="lg:text-lg p-4">
          <Header forPage="projects" />
          <div className="mt-12">
            <h2 className="font-semibold text-3xl">Projects</h2>
            <div className="container mt-8">
              <div className="project-preview grid grid-cols-3 gap-4">
                {projects.map(project => (
                  <div className="card p-6 bg-primary-400 dark:bg-primary-600 rounded flex flex-col min-h-[10rem] dark:text-slate-800">
                    <div className="header flex-1">
                      <a
                        href={project.demo}
                        className="mx-1 font-semibold text-base underline decoration-transparent hover:decoration-slate-700 dark:text-slate-800"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.name}
                      </a>
                      {project.description && <p className="text-xs m-1 text-grey-700">{project.description}</p>}
                    </div>
                    <div className="links mx-1 flex gap-x-2">
                      {project.source && (
                        <a
                          href={project.source}
                          target="_blank"
                          className="text-xs font-medium bg-primary-200 rounded block py-0.5 px-2 hover:bg-primary-100 dark:text-slate-800"
                        >
                          🔗 Source
                        </a>
                      )}
                      {project.article && (
                        <a
                          href={project.article}
                          target="_blank"
                          className="text-xs font-medium bg-primary-200 rounded block py-0.5 px-2 hover:bg-primary-100 dark:text-slate-800"
                        >
                          🔗 Article
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          className="text-xs font-medium bg-primary-200 rounded block py-0.5 px-2 hover:bg-primary-100 dark:text-slate-800"
                        >
                          🔗 Demo
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </PageLayout>
    </React.Fragment>
  );
}
