'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ConnectionButton } from './ConnectionButton';
import { SiTelegram } from "react-icons/si";
import { RiTelegram2Fill } from 'react-icons/ri';
import { LiaFacebookF } from "react-icons/lia";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Swap', path: '/swap' },
    { name: 'Future development', path: '/future' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className='px-[2px] pt-[4px] bg-gradient-to-r from-[#5BB31C] via-[#B999FE] to-[#B999FE0A] rounded-t-[100px]'>
        <footer className="w-full bg-[#0a0b1e] py-4 md:py-8 px-3 md:px-6 rounded-t-[100px]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8 gap-3 md:gap-0">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Universal Liquidity Protocol"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
                <span className="text-[#B999FE] font-semibold font-cleanow text-sm md:text-xl text-shadow-[-3px_3px_#054642]">
                  Universal Liquidity<br /> Protocol
                </span>
              </div>

              <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="text-xs md:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <ConnectionButton />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center md:gap-6 pt-4 border-t border-gray-800">
              <span className="text-gray-400">Follow us</span>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-[#73C11B] hover:shadow-[0_0_20px_0_#7DC71B] hover:rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <LiaFacebookF className='w-8 h-8 md:w-12 md:h-12 bg-[#1F2333] rounded-full p-2'/>
                </a>
                <a
                  href="#"
                  className="text-[#73C11B] hover:shadow-[0_0_20px_0_#7DC71B] hover:rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <TiSocialTwitter className="w-8 h-8 md:w-12 md:h-12  bg-[#1F2333] rounded-full p-2"/>
                </a>

                <a
                  href="#"
                  className="text-[#73C11B] hover:shadow-[0_0_20px_0_#7DC71B] hover:rounded-full transition-colors"
                  aria-label="Telegram"
                >
                  <RiTelegram2Fill className='w-8 h-8 md:w-12 md:h-12  bg-[#1F2333] rounded-full p-2'/>
                </a>
              </div>
            </div>


          </div>
        </footer>
      </div>
      <p className="text-white text-center bg-gradient-to-r from-[#000618] via-[#7D69B3] to-[#000618] py-2 text-sm md:text-base">
        Copyright © Universal Liquidity Protocol
      </p>
    </>
  );
};

export default Footer; 