import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Menu } from './icons';

function Header() {
  return (
    <header className="container bg-white flex flex-wrap justify-between px-4 md:px-0">
      <Link href="/">
        <Image src="/images/Logo.svg" height={40} width={140} alt="查公車" />
      </Link>
      <nav>
        <button className="p-[1.875rem]">
          <Menu className={"fill-current text-primary"} />
        </button>
      </nav>
      <ul className="bg-primary divide-y divide-blue-dark w-full rounded-b">
        <li className="text-center">
          <Link href="/" className="">
            <span className="py-6 text-white">
            找公車
            </span>
          </Link>
        </li>
        <li className="text-center">
          <Link href="station" className="py-6">
            附近站牌
          </Link>
        </li>
        <li className="text-center">
          <Link href="transfer" className="py-6">
            轉乘規劃
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
