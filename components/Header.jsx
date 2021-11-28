import React,{ useState, } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Menu, Search} from './icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuHandle = () =>{
    setIsOpen(!isOpen);
    document.querySelector("#navBar").classList.toggle("invisible");
  }
  return (
    <header className="bg-gray-light">
      <section className="bg-white pl-4 md:px-0">
        <nav className="container flex flex-wrap justify-between items-center md:py-5">
          <Link href="/">
            <h2>
              <Image
                src="/images/Logo.svg"
                height={40}
                width={140}
                alt="查公車"
              />
            </h2>
          </Link>
          <button className="p-[1.875rem] md:hidden" onClick={menuHandle}>
            <Menu className={"fill-current text-primary"} />
          </button>
          <ul className="hidden md:flex items-center space-x-[30px]">
            <li className="text-center">
              <Link href="station">
                <a className="block py-1 text-primary">附近站牌</a>
              </Link>
            </li>
            <li className="text-center">
              <Link href="navigation">
                <a className="block py-1 text-primary">轉乘規劃</a>
              </Link>
            </li>
            <li className="text-center ">
              <Link href="/">
                <a className="flex items-center py-1 px-3 text-white bg-primary rounded-full">
                  <Search className={"fill-current text-white mr-1"} />
                  找公車
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <div className="container px-4 h-0">
        <ul
          id="navBar"
          className={`bg-primary divide-y divide-blue-dark w-full rounded-b-[20px] transition duration-200 ${
            isOpen ? "-translate-y-0" : "opacity-0 -translate-y-[400px]"
          }`}
        >
          <li className="text-center">
            <Link href="/">
              <a className="block py-6 text-white" onClick={menuHandle}>
                找公車
              </a>
            </Link>
          </li>
          <li className="text-center">
            <Link href="station">
              <a className="block py-6 text-white" onClick={menuHandle}>
                附近站牌
              </a>
            </Link>
          </li>
          <li className="text-center">
            <Link href="navigation">
              <a className="block py-6 text-white" onClick={menuHandle}>
                轉乘規劃
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
