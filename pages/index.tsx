import React from 'react';
import Head from 'next/head';
import BlogList from '../components/blog-list';
import { getSortedPostsData } from '../lib/posts';

function Home({ allPostsData }: any) {
  return (
    <div>
      <Head>
        <title>Anton Blogs</title>
        <meta name='description' content='Blog website by Anton Guinto' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <BlogList allPostsData={allPostsData} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
