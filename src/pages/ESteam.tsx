import React from 'react';

import { GetStaticProps } from 'next';
import Head from 'next/head';

const ESteam = (data: any) => {
  return (
    <>
      <Head>
        <title>RF3i - Embedded System team</title>
      </Head>
      <div className="flex flex-wrap justify-center mt-5">
        {data.data.map((tex: any) => {
          return (
            <div key={tex.id}>
              <div className="flex justify-center items-center m-4">
                <div className="stack h-56 w-72 relative ">
                  <div className="cursor-pointer w-full h-full bg-rose-400 rounded-lg shadow-[0_0_8px_-4px_rgba(0,0,0,1)] z-30">
                    <div className="flex w-full h-full bg-gray-100 py-2 justify-center">
                      <div className="flex flex-col justify-center gap-1">
                        <div className="flex flex-row justify-center">
                          <h1 className="text-gray-600 text-lg text-center font-bold">
                            {tex.setup}
                          </h1>
                        </div>
                        <div className="flex flex-row justify-center">
                          <h1 className="text-sky-600 text-lg text-center font-bold">
                            {tex.punchline}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ESteam;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://official-joke-api.appspot.com/jokes/ten');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
