import React from 'react';

import { GetStaticProps } from 'next';
import Head from 'next/head';

import ListLayout from '../../component/Layout/Listlayout';

const RFteam = (data: Data) => {
  return (
    <>
      <Head>
        <title>RF3i - Radio Frequency Team</title>
      </Head>
      <ListLayout
        data={data}
        linkto="RFteam"
        title="Radio Frequency team research"
      />
    </>
  );
};

export default RFteam;

interface Data {
  data: String[];
}

// interface getData {}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await res.json();
  const data: Data = result;
  return {
    props: {
      data,
    },
  };
};
