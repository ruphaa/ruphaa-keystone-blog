import React, { useState } from 'react';
import { HomePageSeo } from './HomePageSeo';
import { PageLayout } from '../Layout/PageLayout';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { ListItem } from './ListItem';
import type { Post, ExternalLink } from './types';

export type HomePageProps = {
  posts: Post[];
  externalLinks: ExternalLink[];
};

export function HomePage({ posts, externalLinks }: HomePageProps) {
  const [visible, setVisible] = useState(10);
  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 10);
  };
  const hideItems = () => {
    setVisible(() => 10);
  };

  const items = [...posts, ...externalLinks].sort((a, b) =>
    (b.publishDate || '').localeCompare(a.publishDate || '')
  );
  const blogs = items.filter(item => item?.type === 'blog');
  const notes = items.filter(item => item?.type === 'notes');
  const garden = items.filter(item => item?.type === 'garden');
  const bookNotes = items.filter(item => item?.type === 'book');

  return (
    <React.Fragment>
      <HomePageSeo />
      <PageLayout className="grid grid-rows-[1fr_auto] max-w-[50rem]">
        <main className="lg:text-lg p-4">
          <Header forPage="home" />
          <div className="mt-12">
            <h2 className="font-semibold text-3xl">Blog</h2>
            <ul className="list-none mt-4">
              {blogs.map(item => {
                return <ListItem item={item} key={item.id} />;
              })}
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="font-semibold text-3xl">Notes</h2>
            <ul className="list-none mt-4">
              {notes.slice(0, visible).map(item => {
                return <ListItem item={item} key={item.id} />;
              })}
              {visible < notes.length - 1 ? (
                <div className=" flex flex-col pt-2">
                  <button
                    className=" content-between bg-transparent
                      text-primary-600 font-medium hover:text-primary-800 p-0 border
                      border-transparent rounded self-start"
                    onClick={showMoreItems}
                  >
                    Load More →
                  </button>
                </div>
              ) : (
                <div className=" flex flex-col pt-2">
                  <button
                    className=" content-between bg-transparent 
                      text-primary-600 font-medium hover:text-primary-800 p-0 border
                      border-transparent self-start"
                    onClick={hideItems}
                  >
                    Hide
                  </button>
                </div>
              )}
            </ul>
          </div>
          {garden && garden.length ? (
            <div className="mt-12">
              <h2 className="font-semibold text-3xl">Digital garden</h2>
              <ul className="list-none mt-4">
                {garden.map(item => {
                  return <ListItem item={item} key={item.id} />;
                })}
              </ul>
            </div>
          ) : null}
          {bookNotes && bookNotes.length ? (
            <div className="mt-12">
              <h2 className="font-semibold text-3xl">Book notes</h2>
              <ul className="list-none mt-4">
                {bookNotes.map(item => {
                  return <ListItem item={item} key={item.id} />;
                })}
              </ul>
            </div>
          ) : null}
        </main>
        <Footer />
      </PageLayout>
    </React.Fragment>
  );
}
