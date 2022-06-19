import Link from 'next/link';
import React from 'react';
import DateView from './date-view';

function BlogList({ allPostsData }: any) {
  return (
    <section>
      {allPostsData.map(({ id, date, title }) => (
        <li className='' key={id}>
          <Link href={`/posts/${id}`} passHref>
            <h2>{title}</h2>
          </Link>
          <br />
          <DateView dateString={date} />
        </li>
      ))}
    </section>
  );
}

export default BlogList;
