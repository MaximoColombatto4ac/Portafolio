"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-20 top-0 start-0 duration-300 ease-out ${
          isScrolled
            ? 'bg-white border-b border-gray-200 dark:border-gray-700'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between pb-5 border-b-1 hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded-sm duration-300 hover:bg-accent hover:text-white"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded-sm duration-300 hover:bg-accent hover:text-background"
                >
                  Proyecto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded-sm duration-300 hover:bg-accent hover:text-white"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded-sm duration-300 hover:bg-accent hover:text-white"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
