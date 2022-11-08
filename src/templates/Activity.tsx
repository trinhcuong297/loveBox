import { ArrowLongRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Activ() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-24 py-8 sm:py-12 lg:py-16">
      <div className="flex items-center justify-center">
        <SparklesIcon
          className="text-red-400 mx-4 h-10 w-10"
          aria-hidden="true"
        />
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-red-400 to-blue-600">
          Gallery
        </h2>
        <SparklesIcon
          className="text-indigo-600 mx-4 h-10 w-10"
          aria-hidden="true"
        />
      </div>
      <section className="py-2 bg-gray-100 text-gray-50">
        <div className="container grid gap-4 p-4 mx-auto grid-cols-4">
          <img
            src="https://source.unsplash.com/random/301x301/"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?0"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?1"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?2"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?3"
          />
          {/* <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
		<img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" /> */}
        </div>
        <div className="w-full flex flex-row-reverse text-indigo-600 items-center">
          <ArrowLongRightIcon
            className="mx-4 h-6 w-6 text-blue-600"
            aria-hidden="true"
          />
          <Link href="News/all">Show all</Link>
        </div>
      </section>
    </div>
  );
}
