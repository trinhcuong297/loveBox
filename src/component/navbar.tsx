import Link from 'next/link';
// import router from 'next/router';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="fixed flex justify-center w-screen z-10">
      <div className="navbar bg-gray-900/75 m-1 mt-2 md:mx-8 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="text-gray-100 btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Homepage</Link>
              </li>
              <li>
                <Link href="/">Our story</Link>
              </li>
              <li>
                <Link href="/">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/">
            <div className="btn btn-ghost normal-case text-xl">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={`${router.basePath}/favicon.jpg`} />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost text-gray-100 btn-circle">
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
