import React from 'react';
import { PageLayout } from '../Layout/PageLayout';
import { Header } from '../Header/Header';

const projects = [
  {
    name: 'Twitter Bot',
    description: '',
    source: 'https://github.com/ruphaa/twitter-bot',
    demo: 'https://twitter.com/dailydevcodes',
    article: '',
  },
  {
    name: 'Product hunt clone',
    description: '',
    source: 'https://github.com/ruphaa/vue-producthunt',
    demo: 'https://vue-producthunt-clone.netlify.app',
    article: '',
  },
  {
    name: 'Pictionary',
    description: '',
    source: 'https://github.com/ruphaa/vue-pictionary',
    demo: 'https://vue-pictionary.netlify.app/',
    article: '',
  },
  {
    name: 'Pomodoro Timer App',
    description: '',
    source: 'https://github.com/ruphaa/pomodoro-app',
    demo: 'https://pomodora-time-tracker.netlify.app/',
    article: '',
  },
  {
    name: 'Pastry shop website',
    description: '',
    source: 'https://github.com/ruphaa/ember-pastry-shop',
    demo: 'https://ember-pastry-shop.netlify.app/home',
    article: '',
  },
  {
    name: 'React powered TODO app',
    description: '',
    source: 'https://github.com/ruphaa/react-todo-app',
    demo: 'https://dry-mountain-79163.herokuapp.com/',
    article: '',
  },
  {
    name: 'Responsive form',
    description: '',
    source: 'https://github.com/ruphaa/responsive-form',
    demo: 'https://dribble-responsive-form.netlify.app/',
    article: '',
  },
  {
    name: 'Search application',
    description: '',
    source: 'https://github.com/ruphaa/search-app',
    demo: '',
    article: '',
  },
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
                      {project.description && <p className="text-sm">{project.description}</p>}
                    </div>
                    <div className="links mx-1 flex gap-x-2">
                      {project.source && (
                        <a
                          href={project.source}
                          target="_blank"
                          className="text-xs font-medium bg-primary-200 rounded block py-0.5 px-2 dark:text-slate-800"
                        >
                          🔗 Source
                        </a>
                      )}
                      {project.article && (
                        <a
                          href={project.article}
                          target="_blank"
                          className="text-xs font-medium bg-primary-200 rounded block py-0.5 px-2 dark:text-slate-800"
                        >
                          🔗 Article
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          className="text-xs font-medium bg-primary-200 rounded block py-0.5 px-2 dark:text-slate-800"
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
