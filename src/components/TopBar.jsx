// import TopBarLogo from '../path/to/TopBarLogo.png'; // Replace '../path/to/TopBarLogo.png' with the relative path to your logo file
import { useState } from "react";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const mobileMenu = () => (
    <ul className={`ml-4 font-bold gap-10 flex flex-col w-full  lg:hidden  `}>
      <li className="flex items-center gap-1">
        <span>Solution</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mt-1 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </li>
      <li className="flex items-center gap-1">
        <span>Features</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mt-1  text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </li>
      <li className="flex items-center">
        <span>Blogs</span>
      </li>
      <li className="flex items-center gap-1">
        <span>About</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mt-1  text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </li>
    </ul>
  );

  return (
    <header className="bg-white sticky top-0 z-10">
      <div className="bg-white px-4 py-3 flex w-11/12 mx-auto max-w-screen-2xl  ">
      <nav className="flex flex-1   items-center justify-between sm:justify-start flex-wrap  gap-10 ">
        {/* mobile menu trigger */}

        <div className="block lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
          <a href={'/'}>
        <img src="/TopBarLogo.png" alt="logo" />
          </a>

        <ul className={`ml-4 font-bold gap-10  hidden lg:flex`}>
          <li className="flex items-center gap-1">
            <span>Solution</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mt-1 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="flex items-center gap-1">
            <span>Features</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mt-1  text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="flex items-center">
            <span>Blogs</span>
          </li>
          <li className="flex items-center gap-1">
            <span>About</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mt-1  text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
        </ul>

        {/* mobile menu */}
        {isOpen && mobileMenu()}
      </nav>
      <div className="hidden sm:block">
        <button className="bg-white-500 border border-primary font-bold text-primary py-2 px-4  rounded-lg mr-6 ">
          Log In
        </button>
        <button className="bg-primary text-white font-bold py-2 px-4  rounded-lg">
          Register
        </button>
      </div>
      </div>
    </header>
  );
};

export default TopBar;
