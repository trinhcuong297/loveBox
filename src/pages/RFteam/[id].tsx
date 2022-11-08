import React from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await res.json();
  const paths = result.map((tex: any) => {
    return {
      params: {
        id: tex.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context: any) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const result = await res.json();
  return {
    props: { result },
  };
};

const Detail = (result: any) => {
  return (
    <>
      <div className="p-10 bg-gray-100 h-max">
        <h1 className="text-xl">Name: {result.result.name}</h1>
        <h2>Email: {result.result.email}</h2>
        <h2>Email: {result.result.email}</h2>
        <h2>Email: {result.result.email}</h2>
        <h2>Email: {result.result.email}</h2>
        <h2>Email: {result.result.email}</h2>
        <h2>Email: {result.result.email}</h2>
        <h2>Email: {result.result.email}</h2>
        <h2>Email: {result.result.email}</h2>
        <h2>Email: {result.result.email}</h2>
        <h2>Email: {result.result.email}</h2>
        <h2>Email: {result.result.email}</h2>
        <h2>Email: {result.result.email}</h2>
        <h2>Email: {result.result.email}</h2>
      </div>
      <div className="btn-group grid md:grid-cols-6 grid-cols-3 grid-start-2 px-4">
        <Link href={'/RFteam'}>
          <button className="btn btn-outline md:col-start-2 btn-primary ml-[1px]">
            Go back
          </button>
        </Link>
        <button className="btn btn-outline btn-error gap-2 ml-[1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          Love it!
        </button>
        {/* <div className="btn-group grid grid-cols-2 col-start-2 col-end-4 md:col-start-4 md:col-end-7 md:grid-cols-3"> */}
        <Link
          href={`/RFteam/${result.result.id > 1 ? result.result.id - 1 : ''}`}
        >
          <button className="btn btn-outline btn-accent ml-[1px]">
            Previous
          </button>
        </Link>
        <Link
          href={`/RFteam/${result.result.id > 0 ? result.result.id + 1 : ''}`}
        >
          <button className="btn btn-outline btn-accent ml-[1px]">Next</button>
        </Link>
        {/* </div> */}
      </div>
    </>
  );
};

export default Detail;
