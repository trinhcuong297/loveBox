import { useEffect, useState } from 'react';

import { Menu } from '@headlessui/react';
import {
  HomeIcon,
  HeartIcon,
  ChevronDownIcon,
  CpuChipIcon,
  AcademicCapIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import smoothscroll from 'smoothscroll-polyfill';

import { AboutUsList, ProductList, PublicationList } from './Data/navbarData';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    smoothscroll.polyfill();
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true);
      else setShow(false);
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <div className={show ? 'block' : 'hidden'}>
      <div className="sidebar h-fit w-[3.35rem] overflow-hidden border rounded-[10px] ml-2 hover:w-56 hover:shadow-lg">
        <div className="flex flex-col justify-between pt-2 pb-6 bg-gray-200 ">
          <li className="inline-flex w-full justify-left">
            <Link href="/">
              <a className="text-gray-800 text-lg flex items-center hover:text-green-800">
                <HomeIcon
                  className="mx-4 mt-4 mb-5 h-5 w-5"
                  aria-hidden="true"
                />
                Home
              </a>
            </Link>
          </li>

          <Menu>
            <Menu.Button>
              <div className="text-inline w-max flex items-center text-gray-800 hover:text-green-800">
                <HeartIcon
                  className="mx-4 mt-4 mb-5 h-5 w-5"
                  aria-hidden="true"
                />
                About us
                <ChevronDownIcon className="mx-4 mt-5 mb-5 h-5 w-5" />
              </div>
            </Menu.Button>
            <Menu.Items className="flex flex-col">
              {AboutUsList.map((data, index) => {
                return (
                  <Menu.Item key={index}>
                    <a
                      className="text-gray-800 text-md font-normal text-inline ml-[3.35rem] hover:text-green-800"
                      href={data[1]}
                    >
                      {data[0]}
                    </a>
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Menu>
          <Menu>
            <Menu.Button>
              <div className="text-inline w-max flex items-center text-gray-800 hover:text-green-800">
                <AcademicCapIcon
                  className="mx-4 mt-4 mb-5 h-5 w-5"
                  aria-hidden="true"
                />
                Publication
                <ChevronDownIcon className="mx-4 mt-5 mb-5 h-5 w-5" />
              </div>
            </Menu.Button>
            <Menu.Items className="flex flex-col">
              {PublicationList.map((data, index) => {
                return (
                  <Menu.Item key={index}>
                    <a
                      className="text-gray-800 text-md font-normal text-inline ml-[3.35rem] hover:text-green-800"
                      href={data[1]}
                    >
                      {data[0]}
                    </a>
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Menu>
          <Menu>
            <Menu.Button>
              <div className="text-inline w-max flex items-center text-gray-800 hover:text-green-800">
                <CpuChipIcon
                  className="mx-4 mt-4 mb-5 h-5 w-5"
                  aria-hidden="true"
                />
                Product
                <ChevronDownIcon className="mx-4 mt-5 mb-5 h-5 w-5" />
              </div>
            </Menu.Button>
            <Menu.Items className="flex flex-col">
              {ProductList.map((data, index) => {
                return (
                  <Menu.Item key={index}>
                    <a
                      className="text-gray-800 text-md font-normal text-inline ml-[3.35rem] hover:text-green-800"
                      href={data[1]}
                    >
                      {data[0]}
                    </a>
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Menu>
          <li className="inline-flex w-max justify-left">
            <Link href="/Contact">
              <a className="text-gray-800 w-max text-md flex items-center hover:text-green-800">
                <ChatBubbleBottomCenterIcon
                  className="mx-4 mt-4 mb-5 h-5 w-5"
                  aria-hidden="true"
                />
                Contact us
              </a>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
