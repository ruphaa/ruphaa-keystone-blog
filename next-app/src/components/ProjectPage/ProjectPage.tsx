import React from 'react';
import { PageLayout } from '../Layout/PageLayout';
import { Header } from '../Header/Header';

export function ProjectPage() {
  return (
    <React.Fragment>
      <PageLayout className="grid grid-rows-[1fr_auto] max-w-[50rem]">
        <main className="lg:text-lg p-4">
        <Header forPage="projects"/>
        <div className="mt-12">
          <h2 className="font-semibold text-3xl">Projects</h2>
          <div className="container mt-8">
            <div className="project-preview grid grid-cols-3 gap-4">
              <div className="card p-6 bg-primary-400 rounded">
                <div className="header">
                  <a href="#" className="mx-1 font-semibold text-xl" target="_blank" rel="noreferrer">Website</a>
                  <p>The source of this website</p>
                </div>
                <div className="links">
                  <a href="#" className="text-base font-medium">Article</a>
                  <a href="#" className="text-base font-medium">Demo</a>
                  <a href="#" className="text-base font-medium">Source</a>
                </div>
              </div>
              <div className="card p-6 bg-primary-400 rounded">
                <div className="header">
                  <a href="#" className="mx-1 font-semibold text-xl" target="_blank" rel="noreferrer">Website</a>
                  <p>The source of this website</p>
                </div>
                <div className="links">
                  <a href="#" className="text-base font-medium">Article</a>
                  <a href="#" className="text-base font-medium">Demo</a>
                  <a href="#" className="text-base font-medium">Source</a>
                </div>
              </div>
              <div className="card p-6 bg-primary-400 rounded">
                <div className="header">
                  <a href="#" className="mx-1 font-semibold text-xl" target="_blank" rel="noreferrer">Website</a>
                  <p>The source of this website</p>
                </div>
                <div className="links">
                  <a href="#" className="text-base font-medium">Article</a>
                  <a href="#" className="text-base font-medium">Demo</a>
                  <a href="#" className="text-base font-medium">Source</a>
                </div>
              </div>
              <div className="card p-6 bg-primary-400 rounded">
                <div className="header">
                  <a href="#" className="mx-1 font-semibold text-xl" target="_blank" rel="noreferrer">Website</a>
                  <p>The source of this website</p>
                </div>
                <div className="links">
                  <a href="#" className="text-base font-medium">Article</a>
                  <a href="#" className="text-base font-medium">Demo</a>
                  <a href="#" className="text-base font-medium">Source</a>
                </div>
              </div>
              <div className="card p-6 bg-primary-400 rounded">
                <div className="header">
                  <a href="#" className="mx-1 font-semibold text-xl" target="_blank" rel="noreferrer">Website</a>
                  <p>The source of this website</p>
                </div>
                <div className="links">
                  <a href="#" className="text-base font-medium">Article</a>
                  <a href="#" className="text-base font-medium">Demo</a>
                  <a href="#" className="text-base font-medium">Source</a>
                </div>
              </div>
              <div className="card p-6 bg-primary-400 rounded">
                <div className="header">
                  <a href="#" className="mx-1 font-semibold text-xl" target="_blank" rel="noreferrer">Website</a>
                  <p>The source of this website</p>
                </div>
                <div className="links">
                  <a href="#" className="text-base font-medium">Article</a>
                  <a href="#" className="text-base font-medium">Demo</a>
                  <a href="#" className="text-base font-medium">Source</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </main>
      </PageLayout>
    </React.Fragment>
)
}