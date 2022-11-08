import { Fragment, useState } from 'react';

import { Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';
import { AboutUsList, ProductList, PublicationList } from './Data/navbarData';
import MobileNav from './mobileNav';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const onToggle = () => {
    setShow((status) => {
      return !status;
    });
  };
  const onToggle2 = () => {
    setShow2((status) => {
      return !status;
    });
  };
  const onToggle3 = () => {
    setShow3((status) => {
      return !status;
    });
  };
  return (
    <>
      <Section yPadding="py-4 pt-5">
        <div className="hidden md:block">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li className="inline-flex w-full justify-center items-center">
              <Link href="/">
                <a className="text-gray-800 text-lg hover:text-blue-900">
                  Home
                </a>
              </Link>
            </li>

            <div
              className="relative inline-block text-left"
              onMouseEnter={onToggle}
              onMouseLeave={onToggle}
            >
              <div>
                <button className="aboutus inline-flex inline w-max text-gray-800 text-lg hover:text-blue-900 justify-center items-center rounded-md px-4 py-2 font-medium hover:bg-gray-50 ">
                  About us
                  <ChevronDownIcon
                    className="mr-1 ml-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <Transition
                as={Fragment}
                show={show}
                enter="transition ease-out duration-50"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className="absolute right-0 z-10 pt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {AboutUsList.map((item, index) => {
                      return (
                        <div key={index}>
                          <a
                            href={item[1]}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            {item[0]}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Transition>
            </div>

            <div
              className="relative inline-block text-left"
              onMouseEnter={onToggle2}
              onMouseLeave={onToggle2}
            >
              <div>
                <button className="inline-flex inline w-max text-gray-800 text-lg hover:text-blue-900 justify-center items-center rounded-md px-4 py-2 font-medium hover:bg-gray-50 ">
                  Publication
                  <ChevronDownIcon
                    className="mr-1 ml-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <Transition
                as={Fragment}
                show={show2}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className="absolute right-0 z-10 pt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {PublicationList.map((item, index) => {
                      return (
                        <div key={index}>
                          <a
                            href={item[1]}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            {item[0]}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Transition>
            </div>

            <div
              className="relative inline-block text-left"
              onMouseEnter={onToggle3}
              onMouseLeave={onToggle3}
            >
              <div>
                <button className="inline-flex inline w-max text-gray-800 text-lg hover:text-blue-900 justify-center items-center rounded-md px-4 py-2 font-medium hover:bg-gray-50 ">
                  Product
                  <ChevronDownIcon
                    className="mr-1 ml-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <Transition
                as={Fragment}
                show={show3}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className="absolute right-0 z-10 pt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {ProductList.map((item, index) => {
                      return (
                        <div key={index}>
                          <a
                            href={item[1]}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            {item[0]}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Transition>
            </div>

            <li className="inline-flex w-full justify-center items-center">
              <Link href="/Contact">
                <a className="text-gray-800 text-lg hover:text-blue-900 inline w-max">
                  Contact Us
                </a>
              </Link>
            </li>
          </NavbarTwoColumns>
        </div>
        <div className="md:hidden">
          <NavbarTwoColumns logo={<Logo xl />}>
            <MobileNav />
          </NavbarTwoColumns>
        </div>
      </Section>
    </>
  );
}
