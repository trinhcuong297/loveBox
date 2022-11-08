import { Fragment, useState } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import Link from 'next/link';

import { AboutUsList, ProductList, PublicationList } from './Data/navbarData';

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      <div
        className={`fixed top-0 right-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed h-full w-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed mt-8 h-fit">
          <div className="tracking-widest text-gray-900 dark:text-gray-100 flex flex-wrap flex-col justify-center items-center w-screen">
            <li className="inline-flex w-full justify-center items-center py-6">
              <Link href="/">
                <a className="text-gray-800 text-lg" onClick={onToggleNav}>
                  Home
                </a>
              </Link>
            </li>
            <Menu as="div" className="relative inline-block text-left py-6">
              <div>
                <Menu.Button className="aboutus inline-flex inline w-max text-gray-800 text-lg justify-center items-center rounded-md px-4 py-2 font-medium hover:bg-gray-50 ">
                  About us
                  <ChevronDownIcon
                    className="mr-1 ml-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-50"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {AboutUsList.map((item, index) => {
                      return (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <a
                              href={item[1]}
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                              onClick={onToggleNav}
                            >
                              {item[0]}
                            </a>
                          )}
                        </Menu.Item>
                      );
                    })}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="div" className="relative inline-block text-left py-6">
              <div>
                <Menu.Button className="inline-flex inline w-max text-gray-800 text-lg justify-center items-center rounded-md px-4 py-2 font-medium hover:bg-gray-50 ">
                  Publication
                  <ChevronDownIcon
                    className="mr-1 ml-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {PublicationList.map((item, index) => {
                      return (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <a
                              href={item[1]}
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                              onClick={onToggleNav}
                            >
                              {item[0]}
                            </a>
                          )}
                        </Menu.Item>
                      );
                    })}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="div" className="relative inline-block text-left py-6">
              <div>
                <Menu.Button className="inline-flex inline w-max text-gray-800 text-lg justify-center items-center rounded-md px-4 py-2 font-medium hover:bg-gray-50 ">
                  Product
                  <ChevronDownIcon
                    className="mr-1 ml-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {ProductList.map((item, index) => {
                      return (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <a
                              href={item[1]}
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                              onClick={onToggleNav}
                            >
                              {item[0]}
                            </a>
                          )}
                        </Menu.Item>
                      );
                    })}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <li className="inline-flex w-full justify-center items-center py-6">
              <Link href="/Contact">
                <a
                  className="text-gray-800 text-lg inline w-max"
                  onClick={onToggleNav}
                >
                  Contact Us
                </a>
              </Link>
            </li>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
