import React, { useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
// import { useRouter } from 'next/router';

const ListLayout = ({ data, linkto, title }: any) => {
  // console.log(data)
  const show = 5;
  const dataLength = data.data.length;
  const numberPage = Math.ceil(dataLength / show);
  const arrayGoto = Array(numberPage).fill(0);
  const [page, setPage] = useState(1);
  function nextPage() {
    if (page < dataLength) setPage(() => page + show);
  }
  function prevPage() {
    if (page - show > 0) setPage(() => page - show);
  }
  function gotoPage(go: number) {
    setPage(() => go * show + 1);
  }
  const thisPage = (page - 1) / show;
  // const router = useRouter()
  return (
    <>
      <div className="mt-5 justify-center mx-12 md:mx-20">
        <h2 className="px-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-orange-400 to-red-400">
          {title}
        </h2>
        {data.data.map((tex: any) => {
          if (tex.id < page || tex.id > page - 1 + show) {
            return <div key={tex.id}></div>;
          }
          return (
            <div key={tex.id} className="m-5 cursor-pointer">
              <Link href={`/${linkto}/${tex.id}`}>
                <div className="flex items-center rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                    {tex.author ? (
                      <img src={tex.author} />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-orange-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )}
                  </div>

                  <div className="ml-4 w-full">
                    <div className="flex justify-between w-full lg:pr-5">
                      <h2 className="font-semibold mt-2 text-sm text-gray-500">
                        {tex.name}
                      </h2>
                      <h2 className="font-semibold mt-2 text-sm text-gray-500">
                        {tex.id}
                      </h2>
                    </div>
                    <p className="mt-2 text-sm">{tex.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 bg-gray-100 px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={prevPage}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between px-6 md:px-20">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{page}</span> to{' '}
              <span className="font-medium">{page + show - 1}</span> of{' '}
              <span className="font-medium">{dataLength}</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                onClick={prevPage}
                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

              {arrayGoto.map((item, index) => {
                if (index === thisPage) {
                  return (
                    <button
                      onClick={() => gotoPage(index)}
                      key={index + item}
                      className="relative z-10 inline-flex items-center z-10 border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                    >
                      {index + 1}
                    </button>
                  );
                }
                return (
                  <button
                    onClick={() => gotoPage(index)}
                    key={index + item}
                    className="relative z-10 inline-flex items-center z-10 border bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                  >
                    {index + 1}
                  </button>
                );
              })}
              {/* <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                ...
              </span> */}
              <button
                onClick={nextPage}
                className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListLayout;
