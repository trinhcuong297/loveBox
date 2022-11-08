import { ArrowLongRightIcon, MinusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];

export default function HightlightNews() {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
          <div className="flex items-center justify-center">
            <MinusIcon
              className="text-indigo-400 mx-4 h-10 w-10"
              aria-hidden="true"
            />
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-gray-800 to-blue-800">
              News
            </h2>
            <MinusIcon
              className="text-indigo-600 mx-4 h-10 w-10"
              aria-hidden="true"
            />
          </div>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="group relative flex md:block hover:scale-[1.05] transition"
              >
                <div>
                  <div className="relative h-[10rem] w-[10rem] overflow-hidden rounded-lg bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 md:h-[20rem] md:w-full">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="pl-5 md:pl-0">
                  <h3 className="mt-3 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-xl font-semibold text-indigo-900">
                    {callout.description}
                  </p>
                  <p>{callout.imageAlt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-row-reverse text-indigo-600 items-center">
            <ArrowLongRightIcon
              className="mx-4 h-6 w-6 text-blue-600"
              aria-hidden="true"
            />
            <Link href="News/all">Show all</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
